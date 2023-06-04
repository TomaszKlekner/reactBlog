import express from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../model/User.js";
const router = express.Router();
const saltRounds = 10;

// Register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = await UserModel.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

export default router;
