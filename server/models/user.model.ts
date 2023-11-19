import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: String,
  password: String,
});

export const User = model("User", UserSchema);
