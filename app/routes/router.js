import express from "express";

// here we import the controllers for the router
import { userController } from "../controllers/user.controllers.js";
import { postController } from "../controllers/post.controller.js";
import { commentController } from "../controllers/comment.controller.js";
import { getAllPostController } from "../controllers/getAllPost.controller.js";

export const router = express.Router();

// post routers
router.post("/add-user", userController)
router.post("/add-post", postController)
router.post("/add-comment", commentController)

// get routers
router.get("/get-all-posts", getAllPostController)
