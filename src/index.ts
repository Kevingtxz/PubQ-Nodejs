import "dotenv/config";
import appData from "./config/data/app-data";
import serverConfig from "./config/server-config";
import router from "./resource/routers";
import express from "express";

const PORT = serverConfig.port;
const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
appData
  .initialize()
  .then(() => console.log("AppData initilized"))
  .catch((err) => console.error("Error during Data initialization", err));
