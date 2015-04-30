var fs = require('fs');
var d3 = require('d3');
var toCSV = require('../util/toCSV');
var csv = fs.readFileSync('week.csv', 'utf8');
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

fs.writeFileSync('week_temperature_sf.csv', toCSV(data));
