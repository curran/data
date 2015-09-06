var fs = require('fs');
var sanitize = require('sanitize-filename');
var request = require('request');

var index = JSON.parse(fs.readFileSync('gapminderDataSetsIndex.json', 'utf8'));

//console.log(JSON.stringify(index, null, 2));

var downloadTasks = Object.keys(index).map(function (key){
  var entry = index[key];

  var csvDownloadUrl = "https://spreadsheets.google.com/pub?key=" + key + "&output=csv";

  var csvFileName = "";
  if(entry.category){
    csvFileName += entry.category + "__";
  }
  if(entry.subcategory){
    csvFileName += entry.subcategory + "__";
  }
  csvFileName += entry.indicatorName + ".csv";

  return {
    csvDownloadUrl: csvDownloadUrl,
    csvFileName: sanitize(csvFileName)
  };
});

//downloadTasks.splice(3);

var i = 0;
function downloadNext(){
  var entry = downloadTasks[i];
  i++;

  console.log(entry.csvDownloadUrl);
  var file = fs.createWriteStream("indicators/" + entry.csvFileName);

  request(entry.csvDownloadUrl, function (error, response, body) {
    setTimeout(function (){
      console.log("Fetched " + i + " of " + downloadTasks.length + " files");

      if(i < downloadTasks.length){
        downloadNext();
      } else {
        console.log("downloaded all files");
      }
    }, 500);
  }).pipe(file);
}

downloadNext();

//console.log(downloadTasks);
