var expect = require("chai").expect;

var gradiansToDegrees = require("./../dist/commonjs/grad-to-deg").gradiansToDegrees;

describe("Gradians to Degrees", function () {
    it("Should accurately convert the specified value from gradians to degrees", function () {
        var grad = 42;
        var deg = gradiansToDegrees(grad);

        expect(deg).to.be.approximately(37.8, 0.1);
    });
});
