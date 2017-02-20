"use strict";

var Cocktail = require('../../src/cocktail');

class CocktailBuilder {
    constructor() {
        this._name = "";
        this._alcoholLevel = 0;
        this._volume = 0;
    }

    withName(name) {
        this._name = name;
        return this;
    }

    withAlcoholLevel(level) {
        this._alcoholLevel = level;
        return this;
    }

    withVolume(volume) {
        this._volume = volume;
        return this;
    }

    please() {
        return new Cocktail(this._name, this._alcoholLevel, 0);
    }
}

module.exports = CocktailBuilder;