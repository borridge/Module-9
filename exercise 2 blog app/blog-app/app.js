const express = require('express');
const app = express();

app.use(express.json());
app.use('/users', require('./routes/userRoutes'));
app.use('/posts', require('./routes/postRoutes'));
app.use('/comments', require('./routes/commentRoutes'));
app.use('/likes', require('./routes/likeRoutes'));

module.exports = app;
