const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const User = require('./User');
const Post = require('./Post');

const Comment = sequelize.define('Comment', {
  content: DataTypes.TEXT
}, {
  timestamps: true
});

Comment.belongsTo(User, { foreignKey: 'user_id' });
Comment.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = Comment;
