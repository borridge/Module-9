const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
