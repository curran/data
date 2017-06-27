var d3 = require('d3'),
    fs = require('fs'),
    inputFile = 'populationEstimates2015MediumVariant.csv';


fs.readFile(inputFile, 'utf8', function (err, data) {
  var data = d3.csvParse(data);
  var years = d3.range(2015, 2100);
  var countryField = "Major area, region, country or area *";

  // Pivot the data so "year" is a column.
  var populationByCountryByYear = [];
  var commas = /,/g;
  data.forEach(function (d){
    years.forEach(function (year){
      populationByCountryByYear.push({
        country: d[countryField],
        year: year,
        population: +(d[year].replace(commas, "")) * 1000
      });
    });
  });

  // Exclude world population, include countries only.
  populationByCountryByYear = populationByCountryByYear
    .filter(function (d){
      return d.country !== "WORLD";
    });
  writeTable("populationByCountryByYear.csv", populationByCountryByYear);

  // Filter by 2017
  populationByCountry2017 = populationByCountryByYear
    .filter(function (d){
      return d.year === 2017;
    })
    .map(function (d){
      return {
        country: d.country,
        population: d.population
      };
    });
  writeTable("populationByCountry2017.csv", populationByCountry2017);
});

function writeTable(fileName, data){
  fs.writeFile(fileName, toCSV(data), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Wrote '" + fileName + "'!");
    }
  }); 
}

function toCSV(data){
  var columns = Object.keys(data[0]);
  return [columns.join(",")].concat(data.map(function(d){
    return columns.map(function(column){
      return d[column];
    }).join(",");
  })).join("\n");
}
