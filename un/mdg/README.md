This directory contains data extracted from the [United Nations Millenium Development Goals Indicators](http://mdgs.un.org/unsd/mdg/Data.aspx).

Example code:
```javascript
var dir = 'http://curran.github.io/data/un/mdg/',
    indicator = 'ChildrenUnderFiveMortalityRate',
    url = dir+indicator+'.js';
    require([url], function(data){ console.log(data); });
```
[See it work in JSBin](http://jsbin.com/ayanoy/4/edit)
