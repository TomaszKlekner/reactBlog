import express from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../model/User.js";
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
      console.log(error);
    }
  } else {
    res.status(401).json("You are not the owner of this account!");
  }
});

// Delete

export default router;
