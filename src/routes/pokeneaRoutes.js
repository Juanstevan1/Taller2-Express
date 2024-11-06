const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');

router.get('/', pokeneaController.homePage);
router.get('/pokenea/Json', pokeneaController.getRandomPokeneaJson);
router.get('/pokenea/image', pokeneaController.getRandomPokeneaImage);

module.exports = router;