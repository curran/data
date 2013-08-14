var fs = require('fs'),
    inputPath = './GDPPerCapita.txt',
    outputPath = './GDPPerCapita.csv';

fs.readFile(inputPath, 'utf8', function (err, data) {
    var rows = data.split('\r'),
        i,
        row,
        values,
        country,
        gdp,
        csvRows = ['Country,GDP Per Capita'],
        csv;
    // - 1 because last row is just a newline
    for(i = 0; i < rows.length - 1; i++) {
        row = rows[i];
        values = row.split('\t');
        country = values[1];
        gdp = values[2]
        gdp = gdp.replace('$', '');
        gdp = gdp.trim();
        gdp = gdp.replace(',', '');
        csvRows.push('"' + country + '",' + gdp);
    }
    csv = csvRows.join('\n');
    fs.writeFile(outputPath, csv, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("Wrote '" + outputPath + "!");
        }
    }); 
});
