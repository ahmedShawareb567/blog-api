import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    arName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    thumbnails: [
      {
        type: String,
        required: true,
      },
    ],
    enName: {
      type: String,
      required: true,
    },
    arContent: {
      type: String,
      required: true,
    },
    enContent: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
    category: [
      {
        type: String,
        required: true,
        ref: "category",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = model("post", postSchema);

export default Post;
