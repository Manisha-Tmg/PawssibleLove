import { Response } from "express";

interface Options {
  trimStrings?: boolean;
  normalizeFields?: Record<string, (value: any) => any>;
}

export const checkRequiredFields = (
  data: Record<string, any>,
  fields: string[],
  res: Response,
  options: Options = {
    trimStrings: true,
    normalizeFields: { email: (v) => v.toLowerCase() },
  },
): boolean => {
  const missingFields: string[] = [];

  fields.forEach((field) => {
    let value = data[field];
    if (options.trimStrings && typeof value === "string") {
      value = value.trim();
      data[field] = value;
    }
    if (
      options.normalizeFields &&
      options.normalizeFields[field] &&
      value !== undefined
    ) {
      value = options.normalizeFields[field](value);
      data[field] = value;
    }
    if (value === undefined || value === "") {
      missingFields.push(field);
    }
  });

  if (missingFields.length > 0) {
    res.status(400).json({
      message: `Missing required field(s): ${missingFields.join(", ")}`,
    });
    return false;
  }
  return true;
};
