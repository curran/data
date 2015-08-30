var fs = require('fs');
var d3 = require('d3');
var toCSV = require('./toCSV');
var csv = fs.readFileSync('MDG_Export_20150806_191011983.csv', 'utf8');
var data = d3.csv.parse(csv);

console.log("Original number of rows: " + data.length);

data = data.filter(function (d){
  return d.MDG === "Y";
});

console.log("Rows with MDG indicators only: " + data.length);

var indicatorsSet = {};
var countriesSet = {};
data.forEach(function (d){
  indicatorsSet[d.Series] = true;
  countriesSet[d.Country] = true;
});

var indicators = Object.keys(indicatorsSet);
var countries = Object.keys(countriesSet);
var years = d3.range(1990, 2016);

console.log(indicators);
console.log(countries);

var dataOut = [];

function key(year, country, indicator){
  return [year, country, indicator].join("|");
}

var index = {};

data.forEach(function(d){
  var country = d.Country;
  var indicator = d.Series;
  years.forEach(function(year){
    index[key(year, country, indicator)] = d[year];
  });
});

countries.forEach(function (country){
  years.forEach(function (year){
    var row = {
      Country: country,
      Year: year
    };
    indicators.forEach(function(indicator){
      row[indicator] = index[key(year, country, indicator)];
    });
    dataOut.push(row);
  });
});

// TODO pivot the table where years become row values and indicators become rows.

//console.log(JSON.stringify(data, null, 2));
//console.log(JSON.stringify(dataOut, null, 2));
fs.writeFileSync("mdg.csv", toCSV(dataOut));
