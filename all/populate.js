var fs = require('fs');
var dataSets = [
  "cdc/mortality/mortality_underyling_cause_by_years.csv",
  "cdc/mortality/mortality_underyling_cause_by_years_original.csv",
  "cdc/mortality/mortality_underyling_cause_by_years_simplified.csv",
  "cdc/vitalStats/mothersUnder20.csv",
  "cdc/vitalStats/mothersUnder20_original.csv",
  "d3Examples/AAPL.csv",
  "data.gov.in/GDPofIndiaAndMajorSectorsOfEconomy/datafile.csv",
  "data.gov.in/infantMortalityRate/Infant_Mortality_Rate_1.csv",
  "dspl/countries.csv",
  "faostat/africaUndernourishment/africaUndernourishment.csv",
  "geonames/cities100000.csv",
  "geonames/cities1000000.csv",
  "geonames/cities10000000.csv",
  "geonames/cities15000.csv",
  "geonames/cities500000.csv",
  "iris/iris.csv",
  "jsLibraries/jsLibs.csv",
  "olpc/laptopsPerCountry.csv",
  "olpc/laptopsPerCountryWithLatLon.csv",
  "pew/religion/religionByCountry.csv",
  "senseYourCity/all.csv",
  "senseYourCity/day.csv",
  "senseYourCity/month.csv",
  "senseYourCity/week.csv",
  "statCounter/browser-ww-monthly-200807-201504.csv",
  "statCounter/currentBrowserMarketShares.csv",
  "statCounter/currentBrowserMarketSharesTop6.csv",
  "superstoreSales/superstoreSales.csv",
  "uci_ml/adult/data.csv",
  "uci_ml/adult/schema.csv",
  "uci_ml/auto-mpg/auto-mpg.csv",
  "un/mdg/ChildrenUnderFiveMortalityRate.csv",
  "un/population/populationEstimates.csv",
  "worldFactbook/GDPPerCapita.csv",
  "usgs/centennial/earthquakes.csv",
  "usgs/centennial/earthquakes_larger_than_7_magnitude.csv",
  "usgs/centennial/earthquakes_largest.csv",
  "usgs/centennial/earthquakes_largest_20.csv",
  "integrated/population_vs_gdp.csv"
];

dataSets.forEach(function(dataSetPath){
  var csv = fs.readFileSync("../" + dataSetPath, 'utf8');
  var dataSetName = dataSetPath.replace(/\//g, "_");
  console.log(dataSetName);
  fs.writeFileSync(dataSetName, csv);
});

// This script converts the raw CSV data file into an AMD module,
// which can be loaded cross-domain using require.js.
//
// By Curran Kelleher 2/24/2014
//
// first run 'npm install d3 underscore'
// then run this script with 'node csvToJS.js'

//var d3 = require('d3'),
//    fs = require('fs'),
//    inputFile = './religionByCountry.csv',
//    outputFile = './religionByCountry.js';
//
//fs.readFile(inputFile, 'utf8', function (err, data) {
//  var data = d3.csv.parse(data),
//      script = [
//        'define([], function(){ return ',
//        JSON.stringify(data),
//        ';});'
//      ].join('');
//
//  fs.writeFile(outputFile, script, function(err) {
//    if(err) {
//      console.log(err);
//    } else {
//      console.log("Wrote '" + outputFile + "'!");
//    }
//  }); 
//});
