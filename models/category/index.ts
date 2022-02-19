import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    arName: {
      type: String,
      required: true,
    },
    enName: {
      type: String,
      required: true,
    },
    arDescription: {
      type: String,
      required: true,
    },
    enDescription: {
      type: String,
      required: true,
    },
    children: new Schema({ name: String }),
  },
  {
    timestamps: true,
  }
);

const Category = model("category", categorySchema);

export { Category };
