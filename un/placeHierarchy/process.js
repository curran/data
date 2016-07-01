var d3 = require("d3"),
    fs = require("fs"),
    inputFile = "Annex.csv";

// Leaf nodes are 'Country or area'
// Mid-level nodes are 'Region'
// High-level nodes are 'Major area'
// Root node is "WORLD"

fs.readFile(inputFile, "utf8", function (err, data) {
  var data = d3.csv.parse(data);

  var nodes = {};

  function link(child, parent){
    var node = (parent in nodes) ? nodes[parent] : (nodes[parent] = {});
    node[child] = true;
  }

  data.forEach(function (d){
    link(d["Country or area"], d["Region"]);
    
    if(d["Region"] !== d["Major area"]){
      link(d["Region"], d["Major area"]);
    }

    link(d["Major area"], "WORLD");
  });

  function connect(parent){
    var node = {
      data: {
        id: parent
      }
    };
    if(parent in nodes){
      node.children = Object.keys(nodes[parent]).map(function (child){
        return connect(child);
      });
    }
    return node;
  }

  var tree = connect("WORLD");
  var jsonStr = JSON.stringify(tree, null, 2);
  var fileName = "countryHierarchy.json";

  fs.writeFile(fileName, jsonStr, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Wrote '" + fileName + "'!");
    }
  }); 
});


//function writeTable(fileName, data){
//  fs.writeFile(fileName, toCSV(data), function(err) {
//    if(err) {
//      console.log(err);
//    } else {
//      console.log("Wrote '" + fileName + "'!");
//    }
//  }); 
//}
