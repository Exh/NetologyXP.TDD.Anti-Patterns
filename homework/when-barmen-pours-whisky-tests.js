var assert = require('assert');
var expect = require('chai').expect;
var Barmen = require('../src/barmen');
var Visitor = require('../src/visitor');

suite('when barmen pours whisky', function () {
    let barmen = new Barmen();
    let me = new Visitor();

    setup(function () {
        me.sober();
        barmen.free();
    });


    suite('i ask 180 grams', function () {
        test('i`ll become drunk after 50 ml vodka', function () {
            var iAskVolume = 180;
            var volumeInGlass = barmen.pour("vodka", iAskVolume);
            me.drink(volumeInGlass);

            assert.equal(true, me.isDrunk());
        });
    });


    teardown(function () {

    })
});
