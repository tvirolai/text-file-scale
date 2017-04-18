/* jshint node: true */
"use strict";
exports.__esModule = true;
var node_line_reader_1 = require("node-line-reader");
var tokenize = function (line) { return line.split(/[\s,\.:!\?]+/).filter(function (element) { return element.length > 0; }); };
function readWords(reader, lista) {
    reader.nextLine(function (err, line) {
        if (line === null) {
            return "moro";
        }
        else {
            readWords(reader, tokenize(line));
        }
    });
}
console.log(readWords(new node_line_reader_1.LineReader("testi.txt"), []));
