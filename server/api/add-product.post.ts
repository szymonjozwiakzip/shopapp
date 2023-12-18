import { Product } from "~~/server/models/product.model";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const newProduct = new Product(body);
    const savedProduct = await newProduct.save();
    console.log("Dodano produkt:", savedProduct);

    return {
      message: "Produkt dodany pomyślnie",
      product: savedProduct,
    };
  } catch (error) {
    console.error("Błąd podczas zapisywania produktu:", error);

    return {
      error: "Wystąpił błąd podczas dodawania produktu do bazy danych.",
    };
  }
});

