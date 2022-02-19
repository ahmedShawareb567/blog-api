import express, { Router } from "express";
import dotenv from "dotenv";
import postRoute from "./post";
import userRoute from "./Auth";
import categoryRoute from "./Category";

dotenv.config();

const route: any = Router();

route.get("/", (req: any, res: any) => {
  res.send("Blog Api");
});

route.use("/post", postRoute);
route.use("/user", userRoute);
route.use("/category", categoryRoute);

export default route;
