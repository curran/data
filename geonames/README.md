This data is from [GeoNames](http://www.geonames.org/export/), and contains (name, latitude, longitude, population) for 23460 cities around the world. This only includes cities with more than 15,000 people.

The original data file can be fetched with the following shell commands:

```
curl -O http://download.geonames.org/export/dump/cities15000.zip
unzip cities15000.zip
```

Then run txtToCsv.js to generate the CSV file.

```
node txtToCsv.js
```

This generates cities15000.csv.
