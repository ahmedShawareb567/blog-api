import { Router } from "express";
import Post from "../../models/posts/";

const postRoute: any = Router();

postRoute.get("/", async (req: any, res: any) => {
  try {
    const posts = await Post.find();
    if (posts) {
      return res.status(200).send(posts);
    }
    return res.status(400).json({
      message: "Posts not Found",
    });
  } catch (e) {
    console.log(e);
  }
});

postRoute.post("/create", async (req: any, res: any) => {
  try {
    const post = new Post(req.body);
    await post.save();
    if (post) {
      return res.status(200).json(post);
    } else {
      return res.status(400).json({
        message: "Failed To save posts...",
      });
    }
  } catch (e) {
    console.log(e);
  }
});

postRoute.post("/update", (req: any, res: any) => {
  res.send("update");
});

postRoute.post("/delete", async (req: any, res: any) => {
  try {
    const postId = req.body.id;
    const deletedPost = await Post.deleteOne({
      _id: postId,
    });
    if (deletedPost) {
      return res.status(200).json({
        message: `Post ${postId} is deleted`,
      });
    } else {
      return res.status(200).json({
        message: `Failed to delete ${postId} post`,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

postRoute.get("/find", async (req: any, res: any) => {
  try {
    const posts = await Post.find({
      title: req.body.title,
    });
    if (posts) {
      return res.status(200).json(posts);
    }
  } catch (e) {
    console.log(e);
  }
});

export default postRoute;
