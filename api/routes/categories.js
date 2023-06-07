import express from "express";
import { CategoryModel } from "../model/Category.js";
const router = express.Router();

// Create category
router.post("/", async (req, res) => {
  const newCategory = new CategoryModel(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update category
router.put("/:id", async (req, res) => {
  try {
    const updatedCategory = await CategoryModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete category
router.delete("/:id", async (req, res) => {
  try {
    await CategoryModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Category has been deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await CategoryModel.find();

    if (categories.length) {
      res.status(200).json(categories);
    } else {
      res.status(404).json("No categories found!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
