const Pokenea = require('../models/pokenea');

function getRandomPokenea() {
    const pokeneas = Pokenea.getAll();
    return pokeneas[Math.floor(Math.random() * pokeneas.length)];
}

module.exports = { getRandomPokenea };