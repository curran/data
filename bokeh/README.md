This directory contains sample data from the [Bokeh Project](https://github.com/bokeh/bokeh). This data was fetched using the command

```bash
python -c "import bokeh.sampledata; bokeh.sampledata.download()"
```

Two large data sets were omitted:

 * US_Counties.csv - This was 10MB, and in the D3 world is better suited for topojson representation.
 * WPP2012_SA_DB03_POPULATION_QUINQUENNIAL.csv - 48MB. This is population data from the United Nations readily available elsewhere.
