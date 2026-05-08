import bcrypt from "bcrypt";
import User from "../database/models/user.models";

const adminSeed = async () => {
  const {
    SUPER_ADMIN_NAME,
    SUPER_ADMIN_PASSWORD,
    SUPER_ADMIN_EMAIL,
    SUPER_ADMIN_PHONE,
    SUPER_ADMIN_ROLE,
    DEFAULT_AVATAR,
  } = process.env;

  if (
    !SUPER_ADMIN_NAME ||
    !SUPER_ADMIN_EMAIL ||
    !SUPER_ADMIN_PASSWORD ||
    !SUPER_ADMIN_PHONE ||
    !SUPER_ADMIN_ROLE
  ) {
    throw new Error(" Missing admin environment variables");
  }
  const adminExit = await User.findOne({ where: { email: SUPER_ADMIN_EMAIL } });

  const hashPassword = await bcrypt.hash(
    SUPER_ADMIN_PASSWORD,
    Number(process.env.BCRYPT_SALT_ROUNDS),
  );

  if (!adminExit) {
    await User.create({
      name: SUPER_ADMIN_NAME,
      password: hashPassword,
      email: SUPER_ADMIN_EMAIL,
      phoneNumber: SUPER_ADMIN_PHONE,
      role: SUPER_ADMIN_ROLE,
    });
    console.log("SuperAdmin created sucessfully");
  } else {
    console.log("SuperAdmin exist.Skipping the creation");
  }
};

export default adminSeed;
