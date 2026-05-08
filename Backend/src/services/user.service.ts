import bcrypt from "bcrypt";
import fs from "fs/promises";
import jwt from "jsonwebtoken";
import path from "path";
import { Op } from "sequelize";
import User from "../database/models/user.models";
import { generateOtp, hashOtp, isOtpExpired } from "../utils/otpUtils";
import { sendEmail } from "../utils/sendEmail";

const RESET_TOKEN_EXPIRES_MIN = Number(process.env.OTP_RESET_TOKEN_EXPIRES_MIN);
const OTP_EXPIRES_MIN = Number(process.env.OTP_EXPIRES_MIN);
const OTP_RESEND_COOLDOWN_SEC = Number(process.env.OTP_RESEND_COOLDOWN_SEC);
const OTP_MAX_RESENDS = Number(process.env.OTP_MAX_RESENDS);
const OTP_MAX_ATTEMPTS = Number(process.env.OTP_MAX_ATTEMPTS);

export const deleteFile = async (fileName?: string | null) => {
  if (!fileName) return;
  const filePath = path.join(process.cwd(), "uploads", fileName);
  await fs.unlink(filePath).catch(() => {});
};

export const registerUserService = async (
  name: string,
  email: string,
  password: string,
  phone: number,
  profileImage: string,
) => {
  const emailExist = await User.findOne({ where: { email } });

  if (emailExist) throw new Error("EMAIL_EXIST");

  const hashPassword = await bcrypt.hash(
    password,
    Number(process.env.BCRYPT_SALT_ROUNDS),
  );

  const user = await User.create({
    name,
    email,
    password: hashPassword,
    phoneNumber: phone,
    profileImage,
  });

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      profileImage: user.profileImage,
      role: user.role,
    },
  };
};

export const forgotPasswordService = async (email: string) => {
  const user = await User.findOne({ where: { email } });

  if (!user) throw new Error("USER_NOT_FOUND");

  const now = Date.now();

  if (user.otpLastSentAt) {
    const last = new Date(user.otpLastSentAt).getTime();
    if (now - last < OTP_RESEND_COOLDOWN_SEC * 1000) {
      throw new Error("OTP_COOLDOWN");
    }
  }

  if ((user.otpResendCount || 0) >= OTP_MAX_RESENDS) {
    throw new Error("OTP_LIMIT");
  }

  const otp = generateOtp(Number(process.env.OTP_LENGTH));

  user.passwordOtp = hashOtp(otp);
  user.passwordOtpExpiresAt = new Date(Date.now() + OTP_EXPIRES_MIN * 60000);
  user.otpLastSentAt = new Date();
  user.otpResendCount = (user.otpResendCount || 0) + 1;
  user.otpAttempts = 0;
  user.isOtPVerified = false;

  await user.save();

  await sendEmail({
    email: user.email,
    subject: "Password Reset OTP",
    message: `Your OTP is ${otp}`,
  });

  return { message: "OTP sent successfully" };
};

export const verifyOtpService = async (email: string, otp: string) => {
  const user = await User.findOne({ where: { email } });

  if (!user) throw new Error("USER_NOT_FOUND");

  if (!user.passwordOtp || !user.passwordOtpExpiresAt) {
    throw new Error("NO_OTP_REQUESTED");
  }

  if ((user.otpAttempts || 0) >= OTP_MAX_ATTEMPTS) {
    user.passwordOtp = null;
    user.passwordOtpExpiresAt = null;
    user.otpAttempts = 0;
    await user.save();
    throw new Error("OTP_ATTEMPTS_EXCEEDED");
  }

  if (isOtpExpired(user.passwordOtpExpiresAt)) {
    user.passwordOtp = null;
    user.passwordOtpExpiresAt = null;
    user.otpAttempts = 0;
    await user.save();
    throw new Error("OTP_EXPIRED");
  }

  const hashed = hashOtp(String(otp));

  if (hashed !== user.passwordOtp) {
    user.otpAttempts = (user.otpAttempts || 0) + 1;
    await user.save();

    const left = OTP_MAX_ATTEMPTS - user.otpAttempts;

    throw new Error(`OTP_INVALID:${left}`);
  }

  user.isOtPVerified = true;
  user.passwordOtp = null;
  user.passwordOtpExpiresAt = null;
  user.otpAttempts = 0;

  await user.save();

  const resetToken = jwt.sign(
    { id: user.id, type: "otp_reset" },
    process.env.JWT_SECRET as string,
    { expiresIn: `${RESET_TOKEN_EXPIRES_MIN}m` },
  );

  return resetToken;
};

export const resetPasswordService = async (
  resetToken: string,
  newPassword: string,
) => {
  const payload: any = jwt.verify(resetToken, process.env.JWT_SECRET as string);

  if (!payload || payload.type !== "otp_reset") {
    throw new Error("INVALID_TOKEN");
  }

  const user = await User.findByPk(payload.id);
  if (!user) throw new Error("USER_NOT_FOUND");

  const hashPassword = await bcrypt.hash(
    newPassword,
    Number(process.env.BCRYPT_SALT_ROUNDS),
  );

  user.password = hashPassword;
  await user.save();

  await sendEmail({
    email: user.email,
    subject: "Password Changed",
    message: "Your password has been successfully updated.",
  });

  return { message: "Password updated successfully" };
};

export const loginService = async (email: string, password: string) => {
  const user = await User.findOne({ where: { email } });

  if (!user) throw new Error("USER_NOT_FOUND");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("INVALID_CREDENTIALS");

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET as string,
    { expiresIn: "30d" },
  );

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      profileImage: user.profileImage,
    },
  };
};

export const updateUserByIdService = async (id: string, data: any) => {
  const user = await User.findByPk(id);

  if (!user) throw new Error("USER_NOT_FOUND");

  if (data.profileImage && user.profileImage) {
    await deleteFile(user.profileImage);
  }

  user.set(data);
  await user.save();

  return user;
};

export const updatePasswordService = async (
  id: string,
  password: string,
  newPassword: string,
) => {
  const user = await User.findByPk(id);

  if (!user) throw new Error("USER_NOT_FOUND");

  const match = await bcrypt.compare(password, user.password);

  if (!match) throw new Error("OLD_PASSWORD_DIDNOT_MATCH");

  user.password = await bcrypt.hash(
    newPassword,
    Number(process.env.BCRYPT_SALT_ROUNDS),
  );

  await user.save();

  return user;
};

export const deleteUserService = async (id: string) => {
  const user = await User.findByPk(id);

  if (!user) throw new Error("USER_NOT_FOUND");

  await user.destroy();
  return user;
};

export const getAllUserService = async () => {
  return await User.findAll({
    where: {
      role: { [Op.ne]: "superAdmin" },
    },
    attributes: {
      exclude: ["password"],
    },
  });
};

export const getUserByIdService = async (id: string) => {
  return await User.findByPk(id);
};

export const totalCountSevice = async () => {
  const totalUser = await User.count();
  return { totalUser };
};
