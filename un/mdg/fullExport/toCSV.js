function quote(value){
  return '"' + value + '"';
}
module.exports = function toCSV(data){
  var columns = Object.keys(data[0]);
  return [columns.map(quote).join(",")].concat(data.map(function(d){
    return columns.map(function(column){
      var value = d[column];
      if(typeof value === "string"){
        return quote(value);
      } else {
        return value
      }
    }).join(",");
  })).join("\n");
}
