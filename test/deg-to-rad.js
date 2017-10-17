var expect = require("chai").expect;

var degreesToRadians = require("./../dist/commonjs/deg-to-rad").degreesToRadians;

describe("Degrees to Radians", function () {
    it("Should accurately convert the specified value from degrees to radians", function () {
        var deg = 42;
        var rad = degreesToRadians(deg);

        expect(rad).to.be.approximately(0.73, 0.01);
    });
});
