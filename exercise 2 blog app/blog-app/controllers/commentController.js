const Comment = require('../models/comment');

exports.addComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
