"use strict";

var assert = require('chai').assert;
var Visitor = require('../src/visitor');
var CocktailBuilder = require('../tests/dsl/cocktail-builder');

suite('when drinking cocktail', function () {
    let visitor = new Visitor();

    test('this test should run first', function () {
        visitor.sober();
        let cocktail = new CocktailBuilder()
            .withName("Rum & Cola")
            .withAlcoholLevel(5)
            .withVolume(250)
            .please();

        visitor.drink(cocktail);

        assert.equal(visitor.alcoholLevel, 0 + 5);
    });

    test('this test should run second to pass', function () {
        let cocktail = new CocktailBuilder()
            .withAlcoholLevel(10)
            .please();

        visitor.drink(cocktail);

        assert.equal(visitor.alcoholLevel, 5 + 10);
    });
});