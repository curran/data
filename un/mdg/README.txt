This directory contains data extracted from the [United Nations Millenium Development Goals Indicators](http://mdgs.un.org/unsd/mdg/Data.aspx).

Example code:
```javascript
var indicator = 'ChildrenUnderFiveMortalityRate',
    url = 'http://curran.github.io/data/un/'+indicator+'.js';
require([url], function(data){ console.log(data); });
```
