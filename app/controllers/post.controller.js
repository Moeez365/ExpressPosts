import { Post } from "../models/post.models.js";

export const postController = async(req, res) =>{
    try {
        const data = req.body;
        const post = await Post(data);
        await post.save();
        res.json(post).status(201);
    } catch (error) {
        res.json({
            error,
            message:"post controller error"
        }).status(400);
    }
}