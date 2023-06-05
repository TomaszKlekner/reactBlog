import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Post", PostSchema);

export { PostModel };
