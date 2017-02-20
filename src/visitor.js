"use strict";

class Visitor {
    constructor() {
        this._alcoholLevel = 0;
    }

    drink(cocktail) {
        this._alcoholLevel += cocktail.alcoholLevel;
    }

    get alcoholLevel() {
        return this._alcoholLevel;
    }
}

module.exports = Visitor;