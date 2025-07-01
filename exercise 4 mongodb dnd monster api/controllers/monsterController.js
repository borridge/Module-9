const axios = require('axios');

// GET /monsters?limit=10
exports.getMonsters = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;

  try {
    const response = await axios.get('https://www.dnd5eapi.co/api/monsters');
    const monsters = response.data.results.slice(0, limit);
    res.json(monsters);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch monsters list' });
  }
};

// GET /monsters/:index
exports.getMonsterByIndex = async (req, res) => {
  const { index } = req.params;

  try {
    const response = await axios.get(`https://www.dnd5eapi.co/api/monsters/${index}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: `Monster '${index}' not found` });
  }
};
