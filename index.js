import express from "express";
import { apiroute } from "./routes";

const app = express();

app.use("api", apiroute);

app.listen(process.env.PORT, () => {
  console.log("Server is up......");
});
