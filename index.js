'use strict';
var fs = require('fs');
var R = require('ramda');

function toSnake(string) {
  if (typeof string !== 'string') return;
  var joined = string.replace(' ', '-');
  return R.map(function(el) {
    return el.toLowerCase();
  }, joined).join('');
};

module.exports = (input, opts) => {
	if (typeof input !== 'object') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

  var inputMerged = input.join(' ');
  var title = toSnake(inputMerged);

  var frontmatter = "---\r\ntitle: " + title + "\r\npath: /" + title + "\r\ndate: " + new Date(Date.now()) + "\r\n---";
  return fs.writeFile(title + '.md', frontmatter, function(done) {
    console.log('Done'); 
  })
};
