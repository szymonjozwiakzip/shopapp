import { Comment } from "~~/server/models/comment.model";

export default defineEventHandler(async (event) => {
  try {
    const comments = await Comment.find();
    return comments;
    //res.status(200).json(products);
  } catch (error) {
    console.error(error);
    //res.status(500).send("Internal Server Error");
  }
});

