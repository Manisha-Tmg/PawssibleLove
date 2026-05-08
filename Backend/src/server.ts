import "dotenv/config";
import { App } from "./configs/app";
import { connectToDatabase } from "./database/connection";
import adminSeed from "./seed/admin.seed";

const PORT = process.env.PORT;

async function start() {
  await connectToDatabase();
  await adminSeed();

  const appInstance = new App();

  appInstance.app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}

start();
