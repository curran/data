// Run this Node.js script to create an AMD module from a CSV file.
var d3 = require('d3'),
    _ = require('underscore'),
    fs = require('fs'),
    name = 'ChildrenUnderFiveMortalityRate';

fs.readFile('./'+name+'.csv', 'utf8', function (err, data) {
  var keysToOmit = ['SeriesCode', 'MDG', 'Series', 'Footnotes',
                    'Type', '2012', '2013'], // 2012 and 2013 have no data
      data = _.map(d3.csv.parse(data), function(d){
        return _.omit(d, keysToOmit);
      }),
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
