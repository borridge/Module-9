const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  content: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);
