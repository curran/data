var fs = require('fs');
var toCSV = require('./toCSV');
var json = fs.readFileSync('./ipo-data.json', 'utf8');
var data = JSON.parse(json);
fs.writeFileSync('ipo-data.csv', toCSV(data));
