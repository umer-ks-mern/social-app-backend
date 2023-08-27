import mongoose, { Schema } from "mongoose";
import userModel from "./user.js";
const postSchema = new mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    likes: [
      {
        user_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          required: true,
        },
      },
    ],
    share: {
      type: "number",
      default: 0,
    },
    comments: [
      {
        comment_text: {
          type: "string",
          required: true,
        },
        user_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          required: true,
        },

        dateTime: { type: Date, default: Date.now },
      },
    ],
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

const postModel = mongoose.model("post", postSchema);

export default postModel;
