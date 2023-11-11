import { User } from "../models/user.mode.ts";

export default defineEventHandler(async (event) => {
  const users = await User.find();

  return users;
});
