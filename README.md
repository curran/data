data
====

A collection of public data sets (just getting started, nothing here yet).

The vision is that this repository can serve data files to interactive visualizations through GitHub Pages. The data sets are exposed as [AMD modules](http://requirejs.org/docs/whyamd.html) that contain data formatted to [D3's data conventions](https://github.com/mbostock/d3/wiki/CSV).

Here's some example code that loads some data from this repo using [Require.js](http://requirejs.org/):

```javascript
var irisURL = 'http://curran.github.io/data/iris/iris.js';
require([irisURL], function(data){ console.log(data); });
```
[See it work in JSBin](http://jsbin.com/ayanoy/2/edit)!

## Data Sets

Here's some example code that gets all the data sets and prints some information about them ([run it](http://curran.github.io/evalIDE/#var%20dataDir%20%3D%20'http%3A%2F%2Fcurran.github.io%2Fdata%2F'%3B%0A%0Afunction%20test(name%2C%20path)%20%7B%0A%20%20require(%5BdataDir%20%2B%20path%5D%2C%20function%20(data)%20%7B%0A%20%20%20%20console.log(%5B%0A%20%20%20%20%20%20%22Got%20%22%2C%20name%2C%20%22%20data%20(%22%2C%20data.length%2C%20%22%20rows)%22%2C%0A%20%20%20%20%20%20%22%20fields%3A%20%22%2C%20_.keys(data%5B0%5D)%0A%20%20%20%20%5D.join(%22%22))%3B%0A%20%20%7D)%3B%0A%7D%0A%0Atest(%22Child%20Mortality%22%2C%20%22un%2Fmdg%2FChildrenUnderFiveMortalityRate.js%22)%3B%0Atest(%22Iris%22%2C%20%22iris%2Firis.js%22)%3B%0Atest(%22Population%22%2C%20%22un%2Fpopulation%2FpopulationEstimates.js%22)%3B%0A)):

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

 * [Fisher's Iris Data](iris)
 * United Nations
   * [Millenium Development Goals](un/mdg)
   * [Population](un/population)

## Targets for import:

 * [Soul of the Community](http://streaming.stat.iastate.edu/dataexpo/2013/) (American Statistical Association)
 * [World Population Prospects](http://esa.un.org/wpp/Excel-Data/population.htm) (United Nations)
 * [Employment](http://www.bls.gov/data/) (Bureau of Labor Statistics)
 * [Healthy People](http://visualizing.org/datasets/healthy-people-2010) (Centers for Disease Control)
