# Use CURL to execute the SPARQL query against DBPedia
# that returns a listing of all cities with 100 properties,
# storing the results in data.csv
curl --url http://dbpedia.org/sparql --data-urlencode query@data-sparql.txt -d format=text/csv -o data.csv
