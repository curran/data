data
====

A collection of public data sets (just getting started, nothing here yet).

The vision is that this repository can serve data files to interactive visualizations through GitHub Pages. The data sets are exposed as [AMD modules](http://requirejs.org/docs/whyamd.html) that contain data formatted to [D3's data conventions](https://github.com/mbostock/d3/wiki/CSV).

Here's some example code that loads some data from this repo using [Require.js](http://requirejs.org/):

```javascript
var irisURL = 'http://curran.github.io/data/iris/iris.js';
require([irisURL], function(data){ console.log(data); });
```

## Data Sets

 * [Fisher's Iris Data](iris)
 * United Nations
   * [Millenium Development Goals](un/mdg)
   * [Population](un/population)

## Targets for import:

 * [Soul of the Community](http://streaming.stat.iastate.edu/dataexpo/2013/) (American Statistical Association)
 * [World Population Prospects](http://esa.un.org/wpp/Excel-Data/population.htm) (United Nations)
 * [Employment](http://www.bls.gov/data/) (Bureau of Labor Statistics)
 * [Healthy People](http://visualizing.org/datasets/healthy-people-2010) (Centers for Disease Control)
