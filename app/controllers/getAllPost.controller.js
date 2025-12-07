import { Post } from "../models/post.models.js";

export const getAllPostController = async (req, res) => {
  try {
    const post = await Post.find()
      .populate("author", "password")

    res
      .json({
        data: post,
      })
      .status(201);
  } catch (error) {
    res.json({
      error,
      message: "Get all post controller error",
    });
  }
};
