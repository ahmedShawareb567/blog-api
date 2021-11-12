import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(`mongodb://localhost:27017/${process.env.DB}`, () => {
  console.log(`DB IS CONNECTED `);
});
