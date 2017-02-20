"use strict";

var assert = require('chai').assert;
var Visitor = require('../src/visitor');
var CocktailBuilder = require('../tests/dsl/cocktail-builder');

suite('when drinking cocktail', function () {
    test('sometimes we just test mock itself', function () {
        let cupboard = new FullCupboardMock();
        let barmen = new Barmen(cupboard);

        barmen.wakeUp();

        assert.equal(cupboard.isFull(), true);
    });

});