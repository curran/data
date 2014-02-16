// This script extracts the hierarchy of causes of disease from the file
// `mortality_underyling_cause_by_years.csv` and outputs an AMD module
// containing the tree in the JSON format expected by D3.js
//
// See also:
// https://github.com/mbostock/d3/wiki/Tree-Layout
//
// By Curran Kelleher 2/15/2014
//
// first run 'npm install d3 underscore'
// then run this script with 'node csvToJS.js'

var d3 = require('d3'),
    _ = require('underscore'),
    fs = require('fs'),
    parseHierarchy = require('./parseHierarchy'),
    inputFile = '../mortality_underyling_cause_by_years.csv',
    outputFile = './hierarchy.js';

fs.readFile(inputFile, 'utf8', function (err, data) {
  var rawData = d3.csv.parse(data),
      indentedList = _.pluck(rawData, 'Cause'),
      data = parseHierarchy(indentedList),
      script = [
        'define([], function(){ return ',
        JSON.stringify(data),
        ';});'
      ].join('');
  //console.log( JSON.stringify(data,null,2));
  fs.writeFile(outputFile, script, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Wrote '" + outputFile + "'!");
    }
  }); 
})
