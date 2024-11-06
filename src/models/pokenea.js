const pokeneas = require('../database/pokeneas');

/**
 * Represents a Pokenea.
 * @class
 * @param {number} id - The unique identifier for the Pokenea.
 * @param {string} name - The name of the Pokenea.
 * @param {number} height - The height of the Pokenea.
 * @param {string} ability - The ability of the Pokenea.
 * @param {string} image - The image URL of the Pokenea.
 * @param {string} philosophicalPhrase - A philosophical phrase associated with the Pokenea.
 */

class Pokenea {
    constructor(id, name, height, ability, image, philosophicalPhrase) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.ability = ability;
        this.image = image;
        this.philosophicalPhrase = philosophicalPhrase;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getHeight() {
        return this.height;
    }

    getAbility() {
        return this.ability;
    }

    getImage() {
        return this.image;
    }

    getPhilosophicalPhrase() {
        return this.philosophicalPhrase;
    }
    
    static getAll() {
        return pokeneas.map(p => new Pokenea(p.id, p.name, p.height, p.ability, p.image, p.phrase));
    }
}

module.exports = Pokenea;