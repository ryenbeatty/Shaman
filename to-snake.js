'use strict';

const R = require('ramda');

module.exports = s => R.map(
  el => el.toLowerCase(),
  s.replace(/ /g, '-')
).join('');
