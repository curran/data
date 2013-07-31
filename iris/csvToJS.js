// Run this Node.js script to create the module `iris.js`
// from the file `iris.csv`. The resulting `iris.js` module
// can then be loaded cross-domain using Require.js.
var d3 = require('d3'),
    fs = require('fs');
fs.readFile('./iris.csv', 'utf8', function (err, data) {
  var data = d3.csv.parse(data),
      script = [
        'define([], function(){ return ',
        JSON.stringify(data),
        ';});'
      ].join('');
  fs.writeFile('./iris.js', script, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Wrote 'iris.js'!");
    }
  }); 
})
