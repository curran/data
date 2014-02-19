// This script converts the raw CSV data file into an AMD module,
// including all cause of death categories with indentation removed,
// which can be loaded cross-domain using require.js.
//
// By Curran Kelleher 2/19/2014
//
// first run 'npm install d3 underscore'
// then run this script with 'node csvToJS.js'

var d3 = require('d3'),
    _ = require('underscore'),
    fs = require('fs'),
    pivot = require('./pivot'),
    getIndentationLevel = require('./hierarchy/getIndentationLevel'),
    inputFile = './mortality_underyling_cause_by_years.csv',
    outputFile = './mortality_full.js';

fs.readFile(inputFile, 'utf8', function (err, data) {
  var rawData = d3.csv.parse(data),
      unindentedData = unindentCauses(rawData),
      data = pivot(unindentedData),
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

// Removes indentation from the 'Cause' field for each entry.
function unindentCauses(rawData) {
  rawData.forEach(function(entry){
    entry.Cause = unindent(entry.Cause);
  });
  return rawData;
}

function unindent(str){
  return str.substr(getIndentationLevel(str));
}
