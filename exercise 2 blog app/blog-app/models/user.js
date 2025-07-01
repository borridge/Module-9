const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  profile_image_url: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
 