#!/usr/bin/env node
'use strict';
const meow = require('meow');
const shaman = require('./');

const cli = meow(`
	Usage
	  $ shaman [input]

	Examples
	  $ shaman ponies
`);

shaman(cli.input);
