import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(`${process.env.DB}`, () => {
  console.log(`DB IS CONNECTED `);
});
