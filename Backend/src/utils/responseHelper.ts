import { Response } from "express";

export const sendErrorResponse = (
  res: Response,
  message: string,
  statusCode: number,
) => {
  return res.status(statusCode).json({ message });
};

export const sendSuccessResponse = (
  res: Response,
  message: string,
  data: any,
  statusCode: number,
) => {
  return res.status(statusCode).json({ message, data });
};
