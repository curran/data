module.exports = function toCSV(data){
  var columns = Object.keys(data[0]);
  return [columns.join(",")].concat(data.map(function(d){
    return columns.map(function(column){
      var value = d[column];
      if(value.indexOf(",") === -1){
        return value;
      } else {
        return '"' + value + '"';
      }
    }).join(",");
  })).join("\n");
}
