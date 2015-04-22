var fs = require('fs');
var d3 = require('d3');
var toCSV = require('./toCSV');
var tsv = fs.readFileSync('3883245/data.tsv', 'utf8');
var data = d3.tsv.parse(tsv);
fs.writeFileSync('AAPL.csv', toCSV(data));
