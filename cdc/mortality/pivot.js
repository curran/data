// This module provides a dataset-specific function that pivots the table
// such that each entry in the resulting data set is a single year.
//
// Curran Kelleher 2/19/2014

var _ = require('underscore');

function pivot(rawData) {
  var minYear = 1981,
      maxYear = 2010,
      years = _.range(minYear, maxYear + 1),
      entriesByCause = {},
      causes,
      data;

  // Index entries by cause.
  rawData.forEach(function (entry) {
    entriesByCause[entry.Cause] = entry;
  });

  // Compute the list of causes from the index.
  causes = _.keys(entriesByCause);

  // Combine causes for each year.
  data = _.map(years, function (year) {
    var yearEntry = {year: year};
    causes.forEach(function (cause) {
      yearEntry[cause] = entriesByCause[cause][year];
    });
    return yearEntry;
  });
  return data;
}
module.exports = pivot;
