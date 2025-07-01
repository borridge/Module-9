const app = require('./app');
const connectDB = require('./config/db');

connectDB();

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
