This data is about gun sales. It was featured in the article [What Drives Gun Sales: Terrorism,
Obama and Calls for Restrictions](http://www.nytimes.com/interactive/2015/12/10/us/gun-sales-terrorism-obama-restrictions.html?_r=0) and processed for seasonal adjustment by the NYT Graphics team.

The original source of this data is [The US Firearms Industry - Production and Supply by Jurgen Brauer](http://www.smallarmssurvey.org/fileadmin/docs/F-Working-papers/SAS-WP14-US-Firearms-Industry.pdf). This data was processed to adjust for seasonality, which revealed spikes otherwise hidden in the data.

This dataset was downloaded with the following command:

```
curl -O http://graphics8.nytimes.com/newsgraphics/2015/12/07/gun-sales/7120a9d57d2d14acc27f3f40eefc69d3ee793b80/all-data.csv
```

The URL was found by inspecting network traffic within the page.
