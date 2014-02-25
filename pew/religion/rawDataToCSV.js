
// This script converts the text data file into a valid CSV file.
//
// By Curran Kelleher 2/24/2014

var fs = require('fs'),
    inputFile = './rawData.txt',
    outputFile = './religionByCountry.csv',
    firstRow = '"Country","Christian","Muslim","Unaffiliated","Hindu","Buddhist","Folk Religions","Other Religions","Jewish"';

fs.readFile(inputFile, 'utf8', function (err, data) {
  var lines = data.split('\n'),
      rows = lines.map(function(line){

        // Each line is tab-delimited, so split by tabs.
        return line.split('\t').map(function(entry, i){

          // Remove the commas delimiting thousands from all the
          // numeric fields (field i == 0 is the country).
          if(i !== 0) {
            entry = entry.replace(/,/g,'');
          }

          // Put quotes around each entry to make it valid CSV.
          return '"' + entry + '"';

        // Join entries for a row into a single line
        // by adding commas between each entry.
        }).join(',');
      }),
      csv = firstRow + '\n' + rows.join('\n');

  fs.writeFile(outputFile, csv, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Wrote '" + outputFile + "'!");
    }
  }); 
});
