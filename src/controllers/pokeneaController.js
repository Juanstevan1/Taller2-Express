const Pokenea = require('../models/pokenea');
const { getRandomPokenea } = require('../util/pokeneaUtils');
const os = require('os');

function getRandomPokeneaJson(req, res) {
    const randomPokenea =  getRandomPokenea();
    const containerId = os.hostname();
    const response = {
        id: randomPokenea.getId(),
        name: randomPokenea.getName(),
        height: randomPokenea.getHeight(),
        ability: randomPokenea.getAbility(),
        containerId: containerId
    };
    res.json(response);
}

function getRandomPokeneaImage(req, res) {
    const randomPokenea = getRandomPokenea();
    const containerId = os.hostname();
    const response = {
        name: randomPokenea.getName(),
        image: randomPokenea.getImage(),
        phrase: randomPokenea.getPhilosophicalPhrase(),
        containerId: containerId
    };
    res.render('pokenea', { viewData: response });
}

function homePage(req, res) {
    res.render('index');
}

module.exports = {
    getRandomPokeneaJson,
    getRandomPokeneaImage,
    homePage,
};
