import mongoose from "mongoose";

const CategorySchama = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const CategoryModel = mongoose.model("Category", CategorySchama);

export { CategoryModel };
