/* jshint node: true */

"use strict";

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('test.txt')
});

const tokenize = (line) => line.split(/[\s,\.:!\?]+/).filter(element => element.length > 0);

const wordFilter = {
  words: {},
  process(word) {
    if (!(word in this.words)) {
      this.words[word] = 1;
    } else {
      this.words[word]++;
    }
    return word;
  }
}

rl.on('line', line => {
  let data = tokenize(line);
  data.forEach( word => console.log(wordFilter.process(word)))
});
