var d3 = require("d3"),
    fs = require("fs"),
    inputFile = "UN_MigrantStockByOriginAndDestination_2015_cleaned.csv";

var hierarchy = JSON.parse(fs.readFileSync("../placeHierarchy/countryHierarchy.json"));
var countries = {};
var placeColumn = "Major area, region, country or area of destination";

function visit(node){
  if(node.children){
    node.children.forEach(visit);
  } else {
    countries[node.data.id] = true;
  }
}
visit(hierarchy);

fs.readFile(inputFile, "utf8", function (err, data) {
  var data = d3.csv.parse(data);
  var output = [];
  var origins = Object.keys(countries);

  //console.log(JSON.stringify(data[0], null, 2));
  //console.log(JSON.stringify(Object.keys(data[0]), null, 2));
  data.forEach(function (d){
    origins.forEach(function(origin){
      var destination = d[placeColumn];
      if(destination in countries){
        if(d[origin]){
          var count = parseFloat(d[origin].replace(/ /g, ""));
          if(count > 0){
            output.push({
              origin: origin,
              destination: destination,
              count: count
            });
          }
        }
      }
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
