const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');

router.get('/json', pokeneaController.getRandomPokeneaJson);

router.get('/image', pokeneaController.getRandomPokeneaImage);

module.exports = router;