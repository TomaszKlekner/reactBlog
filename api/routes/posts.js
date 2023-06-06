import express from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../model/User.js";
import { PostModel } from "../model/Post.js";
const router = express.Router();
const saltRounds = 10;

// Create post
router.post("/", async (req, res) => {
  const newPost = new PostModel(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});
