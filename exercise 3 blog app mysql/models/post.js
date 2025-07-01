const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const User = require('./User');

const Post = sequelize.define('Post', {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  image_url: DataTypes.STRING
}, {
  timestamps: true
});

Post.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Post, { foreignKey: 'user_id' });

module.exports = Post;
