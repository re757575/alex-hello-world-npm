'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _ = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

// import chunk from 'lodash/chunk'

function helloWorld() {
  console.log('Hello World!');
  const r = ___default['default'].chunk(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]
  console.log(r);
}

exports.helloWorld = helloWorld;
