'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chunk = require('lodash/chunk');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var chunk__default = /*#__PURE__*/_interopDefaultLegacy(chunk);

function helloWorld() {
  console.log('Hello World!');
  const r = chunk__default['default'](['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]
  console.log(r);
}

exports.helloWorld = helloWorld;
