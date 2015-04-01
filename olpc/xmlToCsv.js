var inFile = 'raw.xml', outFile = 'laptopsPerCountry.csv';
var fs = require('fs');
var parseString = require('xml2js').parseString;
var data = fs.readFileSync(inFile, 'utf8');

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

function toCSV(data){
  var columns = Object.keys(data[0]);
  return [columns.join(",")].concat(data.map(function(d){
    return columns.map(function(column){
      return d[column];
    }).join(",");
  })).join("\n");
}
