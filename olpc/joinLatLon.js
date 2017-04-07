// This script reads laptopsPerCountry.csv and ../dspl/countries.csv,
// then outputs laptopsPerCountryWithLatLon.csv, which is a join of those two tables.

var fs = require('fs');
var d3 = require('d3');
var toCSV = require('./toCSV');

var laptopsPerCountryCSV = fs.readFileSync('laptopsPerCountry.csv', 'utf8');
var countriesCSV = fs.readFileSync('countries.csv', 'utf8');


var laptopsPerCountry = d3.csvParse(laptopsPerCountryCSV);
var countries = d3.csvParse(countriesCSV);

// This will print names that do not match.
//var counts = {};
//countries.forEach(function(d){ counts[d.country] = true;});
//laptopsPerCountry.forEach(function(d){ 
//  if(!counts[d.country]){
//    console.log(d.country);
//  }
//});

var laptopsPerCountryWithLatLon = join(laptopsPerCountry, countries, function(a, b){
  return a.country === b.country;
});

fs.writeFileSync('laptopsPerCountryWithLatLon.csv', toCSV(laptopsPerCountryWithLatLon));

// Naiive N^2 join algorithm, fine for small data sets like this.
function join(tableA, tableB, predicate){
  var result = [];
  tableA.forEach(function(a){
    tableB.forEach(function(b){
      if(predicate(a, b)){
        result.push(extend(a, b));
      }
    });
  });
  return result;
}
function extend(a, b){
  for(property in b){
    a[property] = b[property];
  }
  return a;
}
