import { User } from "~~/server/models/user.model";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const newUser = new User(body);
    const savedUser = await newUser.save();
    console.log("Dodano użytkownika:", savedUser);

    return {
      message: "Użytkownik dodany pomyślnie",
      product: savedUser,
    };
  } catch (error) {
    console.error("Błąd podczas zapisywania użytkownika:", error);

    return {
      error: "Wystąpił błąd podczas dodawania użytkownika do bazy danych.",
    };
  }
});
