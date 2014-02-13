// This script converts the raw CSV data file into an AMD module,
// which can be loaded cross-domain using require.js.
//
// By Curran Kelleher 2/13/2014
//
// first run 'npm install d3 underscore'
// then run this script with 'node csvToJS.js'

var d3 = require('d3'),
    _ = require('underscore'),
    fs = require('fs'),
    inputFile = './mortality_underyling_cause_by_years_simplified.csv',
    outputFile = './mortality.js';

fs.readFile(inputFile, 'utf8', function (err, data) {
  var rawData = d3.csv.parse(data),
      data = pivot(rawData),
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
})

// A dataset-specific function that pivots the table
// such that each entry in the resulting data set is a
// single year.
function pivot(rawData) {
  var minYear = 1981,
      maxYear = 2010,
      years = _.range(minYear, maxYear + 1),
      entriesByCause = {},
      causes,
      data;

  // Index entries by cause.
  rawData.forEach(function (entry) {
    entriesByCause[entry.Cause] = entry;
  });

  // Compute the list of causes from the index.
  causes = _.keys(entriesByCause);

  // Combine causes for each year.
  data = _.map(years, function (year) {
    var yearEntry = {year: year};
    causes.forEach(function (cause) {
      yearEntry[cause] = entriesByCause[cause][year];
    });
    return yearEntry;
  });
  return data;
}
