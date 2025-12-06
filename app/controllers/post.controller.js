import { Post } from "../models/post.models.js";

export const postController = async(req, res) =>{
    try {
        const data = req.body;
        const post = await Post(data);
        await post.save();
        res.json(post).status(400)
    } catch (error) {
        console.log("post controller error", error)
    }
}