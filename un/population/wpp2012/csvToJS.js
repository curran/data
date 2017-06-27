// Run this Node.js script to create an AMD module from a CSV file.
var d3 = require('d3'),
    _ = require('underscore'),
    fs = require('fs'),
    name = 'populationEstimates2015MediumVariant';

fs.readFile('./'+name+'.csv', 'utf8', function (err, data) {
  var data = d3.csv.parse(data),
      script = [
        'define([], function(){ return ',
        JSON.stringify(data),
        ';});'
      ].join('');
  fs.writeFile('./'+name+'.js', script, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Wrote '"+name+".js'!");
    }
  }); 
})
