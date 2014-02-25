// This script converts the raw CSV data file into an AMD module,
// which can be loaded cross-domain using require.js.
//
// By Curran Kelleher 2/24/2014
//
// first run 'npm install d3 underscore'
// then run this script with 'node csvToJS.js'

var d3 = require('d3'),
    fs = require('fs'),
    inputFile = './religionByCountry.csv',
    outputFile = './religionByCountry.js';

fs.readFile(inputFile, 'utf8', function (err, data) {
  var data = d3.csv.parse(data),
      script = [
        'define([], function(){ return ',
        JSON.stringify(data),
        ';});'
      ].join('');

  fs.writeFile(outputFile, script, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Wrote '" + outputFile + "'!");
    }
  }); 
});
