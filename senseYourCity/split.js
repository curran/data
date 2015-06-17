// This script generates the content of the "days" directory,
// by splitting up "week.csv" into days.
var fs = require('fs');
var d3 = require('d3');
var toCSV = require('../util/toCSV');
var csv = fs.readFileSync('month.csv', 'utf8');
var data = d3.csv.parse(csv);

// Filter by city.
data = data.filter(function (d) {
  return d.city === "San Francisco";
});

// Only include 2 rows.
data = data.map(function (d) {
  return {
    timestamp: d.timestamp,
    temperature: d.temperature
  };
});

var days = d3.nest()
  .key(function (d){
    return new Date(d.timestamp).getDate();
  })
  .entries(data);

var i = 1;
days.forEach(function (day){
  fs.writeFileSync('days/day' + (i++) + '.csv', toCSV(day.values));
});

