import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import route from "./router";

import "./db";

dotenv.config();

const app: any = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// ROUTING
app.get("/", (req: any, res: any) => {
  res.send("Blog Posts");
});
app.use("/api", route);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});