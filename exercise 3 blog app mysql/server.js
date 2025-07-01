const app = require('./app');
const sequelize = require('./models/db');

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
});
