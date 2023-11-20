/*import { User } from "~~/server/models/user.model";
export default handleLoginPost = (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const isValidLogin = verifyLogin(username, password);

    if (isValidLogin) {
      res.status(200).json({ success: true, token: "exampleToken" });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Nieprawidłowe dane logowania" });
    }
  } catch (error) {
    console.error("Błąd podczas logowania:", error);
    res
      .status(500)
      .json({ success: false, message: "Wystąpił błąd podczas logowania" });
  }
};
const verifyLogin = (username: string, password: string): boolean => {
  return username === password;
}; */
