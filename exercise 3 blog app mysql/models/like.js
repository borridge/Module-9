const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const User = require('./User');
const Post = require('./Post');

const Like = sequelize.define('Like', {}, {
  timestamps: true
});

Like.belongsTo(User, { foreignKey: 'user_id' });
Like.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = Like;
