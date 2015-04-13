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

This generates tables filtered by a lower population bound. For example, cities15000.csv contains only cities with greater than 15,000 people, and cities100000.csv contains only cities with greater than 100,000 people.

```
cities15000.csv: 23412 rows
cities100000.csv: 4272 rows
cities500000.csv: 788 rows
cities1000000.csv: 355 rows
cities10000000.csv: 16 rows
```
