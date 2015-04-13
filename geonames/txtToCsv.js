// This script extracts (name, latitude, longitude, population) from the file
// cities15000.txt and outputs a CSV file.
//
// Curran Kelleher April 2015
var inFile = 'cities15000.txt', outFile = 'cities15000.csv';
var fs = require('fs');
var data = fs.readFileSync(inFile, 'utf8');
var toCSV = require('./toCSV');

// Parse the original data file to extract fields of interest.
var lines = data.trim().split('\n');
var table = lines.map(function(line){

  // The input data is tab delimited.
  var row = line.split('\t');

  // For information on columns, see
  // http://download.geonames.org/export/dump/
  return {
    name: row[1],
    latitude: row[4],
    longitude: row[5],
    population: row[14]
  };
});

// To make it interesting, sort by descending population.
table.sort(function(a, b){
  return a.population < b.population ? -1 : 1;
});

// Log the number of cities.
console.log(table.length);

// Output the CSV file.
fs.writeFileSync(outFile, toCSV(table));
