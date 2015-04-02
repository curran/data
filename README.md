data
====

A collection of small public data sets for demonstration of visualization methods. These data sets are at various stages of preparation, some are just raw data, some are CSV files, and some are exposed as AMD modules. There is a vague goal of organizing these in a uniform way

Some of these data sets are exposed as [AMD modules](http://requirejs.org/docs/whyamd.html) that contain data formatted to [D3's data conventions](https://github.com/mbostock/d3/wiki/CSV). AMD modules are used rather than text files so that the data sets can be loaded cross-domain (circumventing the [same origin policy](http://en.wikipedia.org/wiki/Same-origin_policy)).

Here's some example code that loads a data set from this repository using [Require.js](http://requirejs.org/):

```javascript
var irisURL = 'http://curran.github.io/data/iris/iris.js';
require([irisURL], function(data){ console.log(data); });
```
[See it in JSBin](http://jsbin.com/ayanoy/2/edit)

Here's some example code that tests several data sets and prints some information about them:

```javascript
var dataDir = 'http://curran.github.io/data/';

function test(name, path) {
  require([dataDir + path], function (data) {
    console.log([
      "Got ", name, " data (", data.length, " rows)",
      " fields: ", _.keys(data[0])
    ].join(""));
  });
}

test("Child Mortality", "un/mdg/ChildrenUnderFiveMortalityRate.js");
test("Iris", "iris/iris.js");
test("Population", "un/population/populationEstimates.js");
test("GDP", "worldFactbook/GDPPerCapita.js");
```

[See it in JSBin](http://jsbin.com/maqarovovu/1/edit)

## Targets for import:

 * [Soul of the Community](http://streaming.stat.iastate.edu/dataexpo/2013/) (American Statistical Association)
 * [World Population Prospects](http://esa.un.org/wpp/Excel-Data/population.htm) (United Nations)
 * [Employment](http://www.bls.gov/data/) (Bureau of Labor Statistics)
 * [Healthy People](http://visualizing.org/datasets/healthy-people-2010) (Centers for Disease Control)
 * [GapMinder Data](http://www.gapminder.org/data/)
 * [NASA Satellite-Derived Environmental Indicators](http://sedac.ciesin.columbia.edu/data/collection/sdei)
 * [IMF Public Finances in Modern History Database](http://www.imf.org/external/np/fad/histdb/)

Many more out there!

If you have a small data set that is great for visualization, feel free to contribute it here.
