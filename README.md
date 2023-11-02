| CI / CD | Status |
| ------- | ------ |
| NPM | [![npm version](https://badge.fury.io/js/validate.svg)](https://badge.fury.io/js/validate) |
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/npm-pkg-validate/branches/master.svg)](https://sineverba.semaphoreci.com/projects/npm-pkg-validate) |
| Circle CI | [![CircleCI](https://circleci.com/gh/sineverba/npm-pkg-validate.svg?style=svg)](https://circleci.com/gh/sineverba/npm-pkg-validate) |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-validate/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-validate?branch=master) |
| SonarCloud | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=npm-pkg-validate&metric=alert_status)](https://sonarcloud.io/dashboard?id=npm-pkg-validate) |

`validate` validates a string. If string is valid, return true.

Useful in forms.

For the moment, it validates only email. In a future, I would add others controls (e.g. lenght, required, etc etc),

## Installation
`npm install @sineverba/validate`

## Usage

```js
import { validate } from "@sineverba/validate";

console.log(validate("info@example.com")); // It prints true
console.log(validate("infoexample.com")); // It prints false
```

## Tests

`npm run test` for simple test

`npm run coverage` for coverage
