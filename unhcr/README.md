This is the data presented in [http://data.unhcr.org/dataviz/](http://data.unhcr.org/dataviz/).

![](refugees.png)

The data file was extracted from the site using the following command:

```
curl -O http://data.unhcr.org/dataviz/data.js
```

The following modifications were made in order the make the data valid JSON:

 * remove `var = ` and trailing whitespace
 * replace ' with "
