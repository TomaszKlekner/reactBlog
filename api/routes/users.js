import express from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../model/User.js";
import { PostModel } from "../model/Post.js";
const router = express.Router();
const saltRounds = 10;

// Update
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(saltRounds);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("You are not the owner of this account!");
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await UserModel.findById(req.params.id);
      try {
        // Find all user posts an set status to unpublised
        await PostModel.updateMany(
          { author: user.username },
          { isPublished: false }
        )
          .then((posts) => {
            res.status(200).json(posts);
          })
          .catch((err) => res.status(404).json("Posts not found!"));

        // Delete user
        await UserModel.findByIdAndDelete(user.id);
        res.status(200).json("User has been deleted.");
      } catch (error) {
        res.status(500).json(error);
      }
    } catch (error) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You are not the owner of this account!");
  }
});

// Get Single User
router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    // Do not send user password
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
