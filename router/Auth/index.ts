import { Router } from "express";
import User from "../../models/users/";
import fs from "fs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userValidation from "../../validations/Auth";

const userRoute: any = Router();
const privateKey = fs.readFileSync("private.key");

userRoute.post("/register", async (req: any, res: any) => {
  try {
    const bodyData = req.body;

    const userCheck = userValidation(req.body);

    if (userCheck) {
      return res.status(400).json({
        message: userCheck,
        status: 400,
      });
    }

    const user_content: any = {
      firstname: bodyData.firstname,
      lastname: bodyData.lastname,
      username: bodyData.username,
      email: bodyData.email,
      age: bodyData.age,
      password: bodyData.password,
    };

    user_content.password = await bcrypt.hash(bodyData.password, 15);

    const user = new User(user_content);
    await user.save();

    let token = jwt.sign({ token: user._id }, privateKey);

    if (user) {
      return res.status(200).send({
        message: "User is registered",
        token,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

userRoute.post("/", (req: any, res: any) => {
  let userId = jwt.verify(req.body.token, privateKey);
  res.send(userId);
});

export default userRoute;
