var d3 = require('d3'),
    fs = require('fs'),
    inputFile = '../religionByCountry.csv',
    outputFile = 'religionByCountryTop5.csv';

fs.readFile(inputFile, 'utf8', function (err, data) {
  var data = d3.csv.parse(data);

  //"Country",
  var religions = [
    "Christian",
    "Muslim",
    "Unaffiliated",
    "Hindu",
    "Buddhist",
    "Folk Religions",
    "Other Religions",
    "Jewish"
  ];
  data.forEach(function (d){
    var total = 0;
    religions.forEach(function (religion){
      if(d[religion] === "< 10000"){
        d[religion] = 0;
      } else {
        d[religion] = +d[religion];
      }
      total += d[religion];
    });
    d.total = total;
  });

  data = data.filter(function (d){
    return d.total > 180000000;
  });
  data.sort(function (a, b){
    return b.total - a.total;
  });

  // Pivot the data so "religion" is a column.
  var newData = [];
  data.forEach(function (d){
    religions.forEach(function (religion){
      newData.push({
        country: d.Country,
        religion: religion,
        population: d[religion]
      });
    });
  });

  var output = toCSV(newData);

  fs.writeFile(outputFile, output, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Wrote '" + outputFile + "'!");
    }
  }); 
});

function toCSV(data){
  var columns = Object.keys(data[0]);
  return [columns.join(",")].concat(data.map(function(d){
    return columns.map(function(column){
      return d[column];
    }).join(",");
  })).join("\n");
}
