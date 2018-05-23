[circleci-shield-url]: https://img.shields.io/circleci/project/github/mgthomas99/degrad.svg
[circleci-url]: https://circleci.com/gh/mgthomas99/degrad
[codecov-shield-url]: https://img.shields.io/codecov/c/github/mgthomas99/degrad.svg
[codecov-url]: https://codecov.io/gh/mgthomas99/degrad
[license-shield-url]: https://img.shields.io/github/license/mgthomas99/degrad.svg
[license-url]: https://github.com/mgthomas99/degrad/blob/master/LICENSE
[logo-image-url]: https://raw.githubusercontent.com/mgthomas99/degrad/master/www/logo.png
[logo-url]: https://github.com/mgthomas/degrad
[npm-shield-url]: https://img.shields.io/npm/v/degrad.svg
[npm-url]: https://www.npmjs.com/package/degrad

[![Degrad][logo-image-url]][logo-url]

[![npm][npm-shield-url]][npm-url]
[![CircleCI][circleci-shield-url]][circleci-url]
[![CodeCov][codecov-shield-url]][codecov-url]
[![license][license-shield-url]][license-url]

# degrad

Degrad is a library providing unit conversion between **deg**rees, **rad**ians,
and **grad**ians.

## Usage

### Install

```shell
    npm install degrad --save // -> Install via NPM
    yarn add degrad           // -> Install via Yarn
```

### Build

`degrad` is built using Gulp, a task automation service. When building `degrad`,
you can either invoke Gulp directly via the `gulp` command, or allow NPM to take
care of invoking Gulp by executing `npm run build`. Both commands do exactly the
same task internally.

```shell
    npm run build   // Build via NPM script
```

### Usage

`degrad` exposes a small library of functions for accurately converting between
angular units, specifically degrees, radians, and gradians.

```ts
    import { expect } from "chai";
    import {
        degreesToGradians as deg2grad,
        degreesToRadians  as deg2rad ,
        gradiansToDegrees as grad2deg,
        gradiansToRadians as grad2rad,
        radiansToDegrees  as rad2deg ,
        radiansToGradians as rad2grad
    } from "degrad";

    // Some functionality tests, to prove the algorithm is correct by producing
    // the correct result.
    deg2grad(30) // -> 33.33333̅3...
    deg2rad(30)  // -> 0.5235987...
    grad2deg(30) // -> 27.000004...
    grad2rad(30) // -> 0.4712388...
    rad2deg(30)  // -> 1718.8733...
    rad2grad(30) // -> 1909.8593...

    // Some logical tests, to prove the algorithm is consistent and logical.
    const x = Math.random();
    expect(deg2grad(x)).to.equal(rad2grad(deg2rad(x)));
    expect(grad2rad(x)).to.equal(deg2rad(grad2deg(x)));
    expect(rad2deg(x)).to.equal(grad2deg(rad2grad(x)));
```

## License

Please see the `LICENSE` file for license information.
