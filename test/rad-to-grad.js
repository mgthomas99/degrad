var expect = require("chai").expect;

var radiansToGradians = require("./../dist/commonjs/rad-to-grad").radiansToGradians;

describe("Radians to Gradians", function () {
    it("Should accurately convert the specified value from radians to gradians", function () {
        var rad = 42;
        var grad = radiansToGradians(rad);

        expect(grad).to.be.approximately(2673.8, 0.1);
    });
});
