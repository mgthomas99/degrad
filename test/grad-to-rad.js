var expect = require("chai").expect;

var gradiansToRadians = require("./../dist/commonjs/grad-to-rad").gradiansToRadians;

describe("Gradians to Radians", function () {
    it("Should accurately convert the specified value from gradians to radians", function () {
        var grad = 42;
        var rad = gradiansToRadians(grad);

        expect(rad).to.be.approximately(0.65, 0.01);
    });
});
