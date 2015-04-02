// This script transforms the original data file into a clean CSV file.
var fs = require('fs');

// This utility converts an array of objects to CSV.
var toCSV = require('./toCSV');

// Read the original data file.
var data = fs.readFileSync('auto-mpg.data', 'utf8');

// Split by newlines.
var lines = data.split('\n');

// Discard rows with missing data
lines = lines.filter(function(line){
  return line.length !== 0 && line.indexOf('?') === -1;
});

var origin = {
  1: 'USA',
  2: 'Germany',
  3: 'Japan'
};

var rows = lines.map(function(line){
  return {
    mpg:          +line.substring(0, 7),
    cylinders:    +line.substring(7, 11),
    displacement: +line.substring(11, 22),
    horsepower:   +line.substring(22, 33),
    weight:       +line.substring(33, 44),
    acceleration: +line.substring(44, 51),
    year:         +("19" + line.substring(51, 55)),
    origin:       origin[line.substring(55, 56)],
    name:         line.substring(57).replace(/"/g, "")
  }
});

fs.writeFileSync('auto-mpg.csv', toCSV(rows));
