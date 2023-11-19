import { Product } from "~~/server/models/product.model";

export default defineEventHandler(async (event) => {
  try {
    const products = await Product.find();
    return products;
    //res.status(200).json(products);
  } catch (error) {
    console.error(error);
    //res.status(500).send("Internal Server Error");
  }
});
