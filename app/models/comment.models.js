import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "POST",
    require: true,
  },
});

export const Comment = mongoose.model("Comment", commentSchema)
