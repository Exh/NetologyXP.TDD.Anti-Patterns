"use strict";

var assert = require('chai').assert;
var Visitor = require('../src/visitor');
var CocktailBuilder = require('../tests/dsl/cocktail-builder');

suite('when drinking cocktail', function () {
    test('...', function () {
        let visitor = new Visitor();
        let barmen = new Barmen();
        let cupboard = new Cupboard();
        let waiter = new Waiter();
        let cocktail = new CocktailBuilder()
            .withName("Rum & Cola")
            .withAlcoholLevel(1)
            .withVolume(250)
            .withGlassMaterial("Plastic")
            .please();

        visitor.drink(cocktail);

        assert.equal(visitor.alcoholLevel, 0 + 1);
    });
    test('a lot of duplication and unnecessary logic not well refactored', function () {
        let visitor = new Visitor();
        let barmen = new Barmen();
        let cupboard = new Cupboard();
        let waiter = new Waiter();
        let cocktail = new CocktailBuilder()
            .withName("Rum & Cola")
            .withAlcoholLevel(1)
            .withVolume(250)
            .withGlassMaterial("Plastic")
            .please();

        visitor.drink(cocktail);

        assert.equal(visitor.alcoholLevel, 0 + 1);
    });

    test('visitor wants to dance and drink', function () {
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