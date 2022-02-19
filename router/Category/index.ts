import { Router } from "express";
import User from "../../models/users/";
import fs from "fs";
import { Category } from "../../models/category";

const categoryRoute: any = Router();

categoryRoute.post("/create", async (req: any, res: any) => {
  let categoryParams = req.body;
  const currentCategory = await Category.create(categoryParams);
  res.json(currentCategory);
});

categoryRoute.get("/find", async (req: any, res: any) => {
  let categoryParams = req.body;
  const currentCategory = await Category.find({
    $or: [{ _id: categoryParams.id }],
  }).populate("subCategories");
  res.json(currentCategory);
});

export default categoryRoute;
