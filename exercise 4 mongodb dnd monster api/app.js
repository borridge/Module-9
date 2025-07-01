const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/blog_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB Error:", err));

// Register routes
const monsterRoutes = require('./routes/monsterRoutes');
app.use('/monsters', monsterRoutes);

app.get('/', (req, res) => {
  res.send('🧙‍♂️ Welcome to the Blog API + D&D Monsters!');
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
