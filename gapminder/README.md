This data is from [http://www.gapminder.org/data/](http://www.gapminder.org/data/).

The data behind GapMinder is stored in Google Spreadsheets, which is not convenient to navigate if you are trying to build your own visualizations of the data. This directory contains all of the GapMinder data tables as CSV files, so you can easily navigate and use the data sets outside of the GapMinder visualization tool. The tables reside in the `indicators` directory, which is populated by the script `fetchCSV.js`, which uses Node.js to traverse the data set index and download all the files.

The file `gapminderDataSetsIndex.json` contains the list of Gapminder data sets. This can be fetched with the command

```
curl http://www.gapminder.org/wp-content/themes/gapminder/cronJobs/json.js?ver=1.5 -o gapminderDataSetsIndex.json
```

On the Gapminder site, the file [gapminder_indicators.js](http://www.gapminder.org/wp-content/themes/gapminder/javascript/gapminder/gapminder_indicators.js?ver=1.4) builds the table. This code uses the ID used as the dataset key in the index file to construct a Google Spreadsheets download link.

For example, the data set id `rEMA-cbNPaOtpDyxTcwugnw` will correspond to this Excel spreadsheet download link:

```
http://spreadsheets.google.com/pub?key=rEMA-cbNPaOtpDyxTcwugnw&output=xls
```

Conveniently, `xls` can be changed to `csv` to export a CSV file instead, like this:

```
http://spreadsheets.google.com/pub?key=rEMA-cbNPaOtpDyxTcwugnw&output=csv
```

These pieces can be combined together to build a script that downloads all of the Gapminder data sets as CSV files.
