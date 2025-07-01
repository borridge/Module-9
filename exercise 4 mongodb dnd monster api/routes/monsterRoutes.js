const express = require('express');
const router = express.Router();
const monsterController = require('../controllers/monsterController');

router.get('/', monsterController.getMonsters);           // ?limit=5
router.get('/:index', monsterController.getMonsterByIndex); // /aboleth

module.exports = router;
