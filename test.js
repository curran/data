var fs = require("fs");
var dsvDataset = require("dsv-dataset");
var assert = require("assert");

function load(dataSource, dataSet){
  var path = dataSource + "/" + dataSet + "/" + dataSet;
  return {
    dsvString: fs.readFileSync(path + ".csv", "utf8"),
    metadata: JSON.parse(fs.readFileSync(path + ".json", "utf8"))
  };
}

describe("data", function () {

  it("should parse to strings if types not specified", function() {
    var dataset = load("uci_ml", "iris");

    dataset = dsvDataset.parse(dataset);

    assert.equal(dataset.data.length, 150);
    assert.equal(typeof dataset.data[0].sepal_length, "number");
    assert.equal(typeof dataset.data[0].class, "string");
  });
});
//cdc
//d3Examples
//data.gov.in
//dbpedia
//dspl
//faostat
//geonames
//integrated
//iris
//jsLibraries
//migrants
//nsf
//olpc
//package.json
//pew
//senseYourCity
//statCounter
//superstoreSales
//uci_ml
//un
//usgs
//util
//w3schools
//worldFactbook
