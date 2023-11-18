/*import { Product } from "~~/server/models/product.model"; */
import { Comment } from "~~/server/models/comment.model";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const newComment = new Comment(body);
    const savedComment = await newComment.save();
    console.log("Dodano komentarz:", savedComment);

    return {
      message: "Komentarz dodany pomyślnie",
      comment: savedComment,
    };
  } catch (error) {
    console.error("Błąd podczas zapisywania produktu:", error);

    return {
      error: "Wystąpił błąd podczas dodawania produktu do bazy danych.",
    };
  }
});
