import { User } from "~~/server/models/user.model";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const user = await User.findOne({ username: body.username });
    if (!user) {
      return {
        message: "Logowanie nie powiodło się - błędna nazwa użytkownika",
      };
    }
    const isPasswordEqual = body.password === user.password;
    if (!isPasswordEqual) {
      return {
        message: "Logowanie nie powiodło się - błędne hasło",
      };
    }
    return {
      message: "Logowanie się powiodło",
    };
  } catch (error) {
    console.error(error);

    return {
      error: "Wystąpił błąd podczas połączenia z bazą.",
    };
  }
});

