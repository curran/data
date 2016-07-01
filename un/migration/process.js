var d3 = require("d3"),
    fs = require("fs"),
    inputFile = "UN_MigrantStockByOriginAndDestination_2015_cleaned.csv";

// All other columns besides these are treated as "origin" values.
var columnsToExclude = [
  "Sort order",
  "Place",
  "Notes",
  "Country code",
  "Type of data (a)",
  "Total",
  "Other North",
  "Other South"
];

fs.readFile(inputFile, "utf8", function (err, data) {
  var data = d3.csv.parse(data);
  var output = [];
  var origins = Object.keys(data[0])
    .filter(function (column){
      return columnsToExclude.indexOf(column) === -1;
    });

  //console.log(JSON.stringify(data[0], null, 2));
  //console.log(JSON.stringify(Object.keys(data[0]), null, 2));
  data.forEach(function (d){
    origins.forEach(function(origin){
      output.push({
        origin: origin,
        destination: d.Place,
        count: d[origin].replace(/ /g, "")
      });
    });
  });
  writeTable("migration.csv", output);
});

function writeTable(fileName, data){
  fs.writeFile(fileName, toCSV(data), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Wrote '" + fileName + "'!");
    }
  }); 
}

function toCSV(data){
  var columns = Object.keys(data[0]);
  return [columns.join(",")].concat(data.map(function(d){
    return columns.map(function(column){
      return d[column];
    }).join(",");
  })).join("\n");
}
