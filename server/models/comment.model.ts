import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  description: { type: String },
  creationDate: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
});

export const Comment = mongoose.model("Comment", commentSchema);

