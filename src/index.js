import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import app from "./controllers/spotify-playlist-controller.js";
const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, host, () => {
  console.log(`server berjalan di http://${host}:${port}`);
});
