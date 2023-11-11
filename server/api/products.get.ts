import { Product} from "../models/product.model.ts";

export default defineEventHandler(async (event) => {
  const products = await Product.find();

  return products;
});
