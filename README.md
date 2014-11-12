data
====

A collection of public data sets (just getting started, not much here yet).

This repository contains data files for interactive visualizations. The data sets are exposed as [AMD modules](http://requirejs.org/docs/whyamd.html) that contain data formatted to [D3's data conventions](https://github.com/mbostock/d3/wiki/CSV). AMD modules are used rather than text files so that the data sets can be loaded cross-domain (circumventing the [same origin policy](http://en.wikipedia.org/wiki/Same-origin_policy)).

Here's some example code that loads a data set from this repository using [Require.js](http://requirejs.org/):

```javascript
var irisURL = 'http://curran.github.io/data/iris/iris.js';
require([irisURL], function(data){ console.log(data); });
```
[See it work in JSBin](http://jsbin.com/ayanoy/2/edit)!

It is also possible to set up an error handler in the case that the URL does not load, like this:

```javascript
var irisURL = 'http://curran.github.io/data/iris/iris.js';
require([irisURL], function(data){
  // If we are here,
  // the data loaded successfully.
  console.log(data);
}, function(err){
  // If we are here,
  // the data failed to load.
  console.log(err);
});
```
[See it work in JSBin](http://jsbin.com/ayanoy/8/edit)!

## Data Sets

Listing of data sets:
 * [Fisher's Iris Data](iris)
 * [NSF Bachelors Degrees Statistics](nsf/bachelorsDegrees)
 * United Nations
   * [Millenium Development Goals](un/mdg)
   * [Population](un/population)
 * [CIA World Factbook](worldFactbook)
 * Centers for Disease Control
   * [Causes of Death](cdc/mortality)
   * [Teen Mothers](cdc/vitalStats)

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

## Targets for import:

 * [Soul of the Community](http://streaming.stat.iastate.edu/dataexpo/2013/) (American Statistical Association)
 * [World Population Prospects](http://esa.un.org/wpp/Excel-Data/population.htm) (United Nations)
 * [Employment](http://www.bls.gov/data/) (Bureau of Labor Statistics)
 * [Healthy People](http://visualizing.org/datasets/healthy-people-2010) (Centers for Disease Control)
 * [GapMinder Data](http://www.gapminder.org/data/)
 * [NASA Satellite-Derived Environmental Indicators](http://sedac.ciesin.columbia.edu/data/collection/sdei)
 * [IMF Public Finances in Modern History Database](http://www.imf.org/external/np/fad/histdb/)
