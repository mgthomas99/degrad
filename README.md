[circleci-shield-url]: https://img.shields.io/circleci/project/github/mgthomas99/degrad.svg
[circleci-url]: https://circleci.com/gh/mgthomas99/degrad
[codecov-shield-url]: https://img.shields.io/codecov/c/github/mgthomas99/degrad.svg
[codecov-url]: https://codecov.io/gh/mgthomas99/degrad
[license-shield-url]: https://img.shields.io/github/license/mgthomas99/degrad.svg
[license-url]: https://github.com/mgthomas99/degrad/blob/master/LICENSE

# degrad

[![CircleCI][circleci-shield-url]][circleci-url]
[![CodeCov][codecov-shield-url]][codecov-url]
[![license][license-shield-url]][license-url]

Angular unit conversion between degrees, radians, and gradians.

## Usage

### Install

```shell
    npm install degrad --save // -> Installs it via NPM
    yarn add degrad // -> Installs it via Yarn
```

### Build

`degrad` is built using Gulp, a task automation service. When building `degrad`,
you can either invoke Gulp directly via the `gulp` command, or allow NPM to take
care of invoking Gulp by executing `npm run build`. Both commands do exactly the
same task internally.

```shell
    npm run build // Build via NPM script
    gulp // Build via Gulp script
```

### Functions

`degrad` exposes a small library of functions for accurately converting between
angular units, specifically degrees, radians, and gradians.

## License

Please see the `LICENSE` file for license information.
