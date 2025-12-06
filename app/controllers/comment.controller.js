import { Comment } from "../models/comment.models.js";
import { Post } from "../models/post.models.js";

export const commentController = async (req, res) => {
  try {
    const { text, userId, postId } = req.body;
    const comment = new Comment({
      text,
      user: userId,
      post: postId,
    });
    await comment.save();

    await Post.findByIdAndUpdate(postId, {
      $push: { comments: comment._id },
    });
    
    res.status(201).json({
        success:true,
        comment:comment,
        message:"Comment save accurately"
    })

  } catch (error) {
    res.status(400).send("comment controller error", error);
  }
};
