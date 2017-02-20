"use strict";

var assert = require('chai').assert;
var Visitor = require('../src/visitor');
var CocktailBuilder = require('../tests/dsl/cocktail-builder');

suite('when drinking cocktail', function () {
    test('visitor wants to dance and play the guitar', function () {
        let visitor = new Visitor();
        let cocktail = new CocktailBuilder()
            .withName("Rum & Cola")
            .withAlcoholLevel(5)
            .withVolume(250)
            .please();

        visitor.drink(cocktail);

        assert.equal(visitor.alcoholLevel, 0 + 5);
    });

    test('visitor wants to dance and play the guitar and creates a lot of unused objects', function () {
        let visitor = new Visitor();
        let barmen = new Barmen();
        let cupboard = new Cupboard();
        let waiter = new Waiter();
        let cocktail = new CocktailBuilder()
            .withName("Rum & Cola")
            .withAlcoholLevel(5)
            .withVolume(250)
            .withGlassMaterial("Plastic")
            .please();

        visitor.drink(cocktail);

        assert.equal(visitor.alcoholLevel, 0 + 5);
    });
});