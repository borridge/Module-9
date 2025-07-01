const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Like', likeSchema);
