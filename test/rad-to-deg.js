var expect = require("chai").expect;

var radiansToDegrees = require("./../dist/commonjs/rad-to-deg").radiansToDegrees;

describe("Radians to Degrees", function () {
    it("Should accurately convert the specified value from radians to degrees", function () {
        var rad = 42;
        var deg = radiansToDegrees(rad);

        expect(deg).to.be.approximately(2406.42, 0.01);
    });
});
