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

// Update post
router.put("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);

    if (post.author === req.body.author) {
      try {
        const updatedPost = await PostModel.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You are not the owner of this post!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete post
router.delete("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (post.author === req.body.author) {
      try {
        await PostModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been deleted.");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You are not the owner of this post!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get post
router.get("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (post) {
      try {
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(404).json("Post not found!!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
