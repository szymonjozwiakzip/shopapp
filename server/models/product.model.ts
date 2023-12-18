import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  creationDate: { type: Date, default: Date.now },
  imageUrl: { type: String },
  isDeleted: { type: Boolean, default: false },
});

export const Product = mongoose.model('Product', productSchema);
