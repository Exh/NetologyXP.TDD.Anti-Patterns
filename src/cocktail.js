"use strict";

class Cocktail {
    constructor(name, alcoholLevel, volume) {
        this._name = name;
        this._alcoholLevel = alcoholLevel;
        this._volume = volume;
    }

    get name() {
        return this._name;
    }

    get alcoholLevel() {
        return this._alcoholLevel;
    }

    get volume() {
        return this._volume;
    }
}

module.exports = Cocktail;