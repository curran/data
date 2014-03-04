// This script transforms the CSV file into a nicely structured JSON document.
//
// Curran Kelleher 3/3/2014
var d3 = require('d3'),
    _ = require('underscore'),
    fs = require('fs'),
    inFile = './populationEstimates.csv',
    outFile = './populationEstimates_cleaned.json',
    spaceRegex = / /g,
    regionKey = 'Major area, region, country or area';

function parsePopulation(populationStr) {
  return parseInt(populationStr.replace(spaceRegex, ''), 10) * 1000;
}

function process(data) {
  var years = _.range(1950, 2010 + 1).map(function(year){
        return year.toString();
      }),
      irrelevantKeys = _.union(years, ['Index', 'Variant', 'Notes', 'Country code']),
      fields = _.difference(_.keys(data[0]), irrelevantKeys),
      entries = [];

  data.forEach(function(originalEntry){
    years.forEach(function(year){
      entries.push({
        region: originalEntry[regionKey],
        year: year,
        population: parsePopulation(originalEntry[year])
      });
    });
  });
  return entries;
}


fs.readFile(inFile, 'utf8', function (err, data) {

  var inData = d3.csv.parse(data),
      outData = process(inData),
      json = JSON.stringify(outData);
      
  fs.writeFile(outFile, json, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Wrote '" + outFile + "'!");
    }
  }); 
})
