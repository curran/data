# Use CURL to execute the SPARQL query against DBPedia,
# storing the results in properties.csv
curl --url http://dbpedia.org/sparql --data-urlencode query@properties-sparql.txt -d format=text/csv -o properties.csv
