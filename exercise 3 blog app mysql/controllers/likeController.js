const Like = require('../models/Like');

exports.addLike = async (req, res) => {
  try {
    const like = await Like.create(req.body);
    res.status(201).json(like);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
