import { Router } from "express";
import postController from "../controller/post.js";
import commentController from "../controller/comments.js";
import likeController from "../controller/likes.js";
import loginAuth from "../middleware/loginAuthorization.js";
import roleAuth from "../middleware/roleAuthorization.js";
import postValidator from "../validator/validatePost.js";

const postRouter = new Router();
postRouter.get("/posts", loginAuth, roleAuth, postController.getAll);
postRouter.get("/post/:id", postController.getSingle);

postRouter.put("/post/:id", postController.update);

postRouter.post("/post", loginAuth, postValidator.create, postController.create);
postRouter.get("/post-delete/:id", postController.delete);

postRouter.post("/comment/:id", commentController.add);
postRouter.get("/comments/:id", commentController.getAll);

postRouter.post("/likes/:id", likeController.updateLikes);

postRouter.get("/user-posts/:user_id",postController.userPosts);
postRouter.get("/recent-posts/",postController.recentPosts);

postRouter.get("/email-posts/:email",postController.emailPosts);

export default postRouter;
