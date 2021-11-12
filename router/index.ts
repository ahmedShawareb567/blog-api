import express, { Router } from "express";
import dotenv from "dotenv";
import postRoute from "./post";
import userRoute from "./Auth";

dotenv.config();

const route: any = Router();

route.get("/", (req: any, res: any) => {
  res.send("Blog Api");
});

route.use("/post", postRoute);
route.use("/user", userRoute);

export default route;
