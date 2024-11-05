const pokeneas = require('../models/pokeneaModel');
const os = require('os');


function getRandomPokeneaJson(req, res) {
    const randomPokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
    const containerId = os.hostname();
    res.json({
      id: randomPokenea.id,
      name: randomPokenea.name,
      height: randomPokenea.height,
      ability: randomPokenea.ability,
      containerId: containerId
    });
  }

function getRandomPokeneaImage(req, res) {
    const randomPokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
    const containerId = os.hostname();
    res.render('pokenea', {
      name: randomPokenea.name,
      image: randomPokenea.image,
      phrase: randomPokenea.phrase,
      containerId: containerId
    });
  }


module.exports = { getRandomPokeneaJson, getRandomPokeneaImage };
