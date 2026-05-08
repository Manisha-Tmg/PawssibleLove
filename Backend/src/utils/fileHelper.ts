import fs from "fs/promises";
import path from "path";

export async function deleteFile(fileOrPath?: string | null) {
  if (!fileOrPath) return;

  try {
    const uploadsDir = path.resolve(process.cwd(), "uploads");
    let filePath: string;

    if (!fileOrPath.includes("/") && !fileOrPath.includes("\\")) {
      filePath = path.join(uploadsDir, fileOrPath);
    } else {
      filePath = path.resolve(process.cwd(), fileOrPath);
    }

    if (filePath === uploadsDir) return;

    await fs.access(filePath);
    await fs.unlink(filePath);

    console.log("✅ File deleted:", filePath);
  } catch (err) {
    console.error("❌ File delete error:", err);
  }
}
