import mongoose from "mongoose";

const CategorySchama = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Category", CategorySchama);
