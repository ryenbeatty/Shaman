'use strict';

const fs = require('fs');
const toSnake = require('./to-snake');

module.exports = input => {
  const title = toSnake(input.join(' '));
  const file = title + '.md';

  const frontmatter = `---
title: ${input.join(' ')}
date: ${new Date(Date.now())}
path: title
---`;

  return fs.writeFile(file, frontmatter, () => {
    console.log('Created ' + file);
  });
};
