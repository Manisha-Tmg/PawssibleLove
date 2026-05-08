import crypto from "crypto";

export const generateOtp = (length = 6): string => {
  const min = 10 ** (length - 1);
  const max = 10 ** length - 1;
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
};

export const hashOtp = (otp: string): string => {
  return crypto.createHash("sha256").update(otp).digest("hex");
};

export const isOtpExpired = (expiresAt?: Date | null): boolean => {
  if (!expiresAt) return true;
  return Date.now() > expiresAt.getTime();
};
