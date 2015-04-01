var inFile = 'raw.xml', outFile = 'laptopsPerCountry.csv';
var fs = require('fs');
var parseString = require('xml2js').parseString;
var data = fs.readFileSync(inFile, 'utf8');
var toCSV = require('./toCSV');

parseString(data, function(err, result){
  var entries = result.map.points[0].item;
  var table = entries.map(function(entry){
    return {
      country: entry.name,
      count: entry.laptop_count
    };
  });
  fs.writeFileSync(outFile, toCSV(table));
});
