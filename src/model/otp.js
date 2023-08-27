import mongoose, { Schema } from "mongoose";
const otpSchema = new mongoose.Schema(
  {
    email: {
      type: "string",
      required: true,
    },
    otp: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const otpModel = mongoose.model("otp", otpSchema);

export default otpModel;
