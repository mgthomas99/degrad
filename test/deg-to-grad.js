var expect = require("chai").expect;

var degreesToGradians = require("./../dist/commonjs/deg-to-grad").degreesToGradians;

describe("Degrees to Gradians", function () {
    it("Should accurately convert the specified value from degrees to gradians", function () {
        var deg = 42;
        var grad = degreesToGradians(deg);

        expect(grad).to.be.approximately(46.66, 0.01);
    });
});
