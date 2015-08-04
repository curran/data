This data set contains house numbers in Montreal by (latitude, longitude).

The command used to fetch the data is as follows:

```
curl "http://overpass-api.de/api/interpreter?data=%5Bout:csv(::lat,%20::lon,%20'addr:housenumber')%5D;area%20%5B'name'='Montr%C3%A9al%20(06)'%5D-%3E.a;out%20body%20qt;(node(area.a)%5B'addr:housenumber'~'.'%5D;);out%20body;" > houseNumbers.csv
```

The non-URL-encoded [OverpassQL](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL) query string is this:

```
[out:csv(::lat, ::lon, 'addr:housenumber')];
area ['name'='Montréal (06)']->.a;
out body qt;
(node(area.a)['addr:housenumber'~'.'];);
out body;
```

This is derived from the great blog post [House Numbers on the Island of Montreal](http://nicolas.kruchten.com/content/2015/04/mtl_housenumbers/) by [@nicolaskruchten](https://twitter.com/nicolaskruchten).
