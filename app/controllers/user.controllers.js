import { User } from "../models/user.models.js";

export const userController = async (req, res) => {
  try {
    const data = req.body;
    const user = new User(data);
    await user.save();
    res.json(user).status(201);
  } catch (error) {
    console.log("user controller error", error);
    res.json({
      error,
      message: "User controller error",
    });
  }
};
