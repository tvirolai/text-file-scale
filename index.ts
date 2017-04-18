/* jshint node: true */

"use strict";

import * as fs from 'fs';
import { LineReader } from 'node-line-reader';

const tokenize = (line: string) => line.split(/[\s,\.:!\?]+/).filter(element => element.length > 0);

function readWords (reader: LineReader, lista: Array<string>) {
  reader.nextLine( (err, line) => {
    if (line === null) {
      return "moro";
    } else {
      readWords(reader, tokenize(line));
    }
  });
}

console.log(readWords(new LineReader("testi.txt"), []));
