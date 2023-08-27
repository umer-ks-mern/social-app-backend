import postModel from "../model/post.js";

const commentController = {
  getAll: async (req, res) => {
    const { id } = req.params;
    const post = await postModel.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.json(post.comments);
  },

  add: async (req, res) => {
    const { id } = req.params;
    const post = await postModel.findById(id).populate("user_id");

    const body = req.body;

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (body) {
      post.comments.push(body);
    }

    await post.save();
    return res.json({ message: "Comment added", post });
  },
};
export default commentController;
