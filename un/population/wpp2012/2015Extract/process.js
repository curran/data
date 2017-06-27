var d3 = require('d3'),
    fs = require('fs'),
    inputFile = 'rawExtract.csv';


fs.readFile(inputFile, 'utf8', function (err, data) {
  var data = d3.csv.parse(data);
  var years = d3.range(1950, 2016);
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

  // Include only world population by year.
  var worldPopulationByYear = populationByCountryByYear
    .filter(function (d){
      return d.country === "WORLD";
    })
    .map(function (d){
      return {
        year: d.year,
        population: d.population
      };
    });
  writeTable("worldPopulationByYear.csv", worldPopulationByYear);

  // Include a single number, the world population in 2015.
  var worldPopulation2015 = worldPopulationByYear
    .filter(function (d){
      return d.year === 2015;
    })
    .map(function (d){
      return { population: d.population };
    });
  writeTable("worldPopulation2015.csv", worldPopulation2015);

  // Exclude world population, include countries only.
  populationByCountryByYear = populationByCountryByYear
    .filter(function (d){
      return d.country !== "WORLD";
    });
  writeTable("populationByCountryByYear.csv", populationByCountryByYear);

  // Filter by 2015
  populationByCountry2015 = populationByCountryByYear
    .filter(function (d){
      return d.year === 2015;
    })
    .map(function (d){
      return {
        country: d.country,
        population: d.population
      };
    });
  writeTable("populationByCountry2015.csv", populationByCountry2015);
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
