import { Schema, model } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
  },
});

const Post = model("post", postSchema);

export default Post;
