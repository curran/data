[![Beerpay](http://test.beerpay.io/curran/data/badge.svg?style=flat-square)](http://test.beerpay.io/curran/data)
data
====

A collection of public data sets for testing out visualization methods. These data sets are at various stages of preparation, some are just raw data, some are CSV files, and some are exposed as AMD modules. This collection is messy, but with some digging you may find hidden gems.

## Targets for import:

 * [Soul of the Community](http://streaming.stat.iastate.edu/dataexpo/2013/) (American Statistical Association)
 * [World Population Prospects](http://esa.un.org/wpp/Excel-Data/population.htm) (United Nations)
 * [Employment](http://www.bls.gov/data/) (Bureau of Labor Statistics)
 * [Healthy People](http://visualizing.org/datasets/healthy-people-2010) (Centers for Disease Control)
 * [GapMinder Data](http://www.gapminder.org/data/)
 * [NASA Satellite-Derived Environmental Indicators](http://sedac.ciesin.columbia.edu/data/collection/sdei)
 * [IMF Public Finances in Modern History Database](http://www.imf.org/external/np/fad/histdb/)
 * [Executions in the US by type over time](http://www.deathpenaltyinfo.org/views-executions)
 * [Datasets used in the book, An Introduction to Categorical Data Analysis](http://lib.stat.cmu.edu/datasets/agresti)
 * [Energy Information Administration Open Data](http://www.eia.gov/beta/api/)
 * [Data sets from Five Thirty Eight](https://github.com/fivethirtyeight/data)
 * [Data sets in the Infovis Wiki](http://www.infovis-wiki.net/index.php?title=Data_Libraries)

Here's a listing of data sets with more detail. Columns will be marked in terms of their type for visualization, including:

*   Q = Quantitative, continuously varying numeric columns

*   T = Temporal, a timestamp

*   O = Ordered, distinct categories with a natural order (e.g. Low, Medium, High)
*   N = Nominal, distinct categories with no natural order (e.g. Ethnicity)

*   G = Geospatial identifiers (e.g. Country, City)

[UCI Machine Learning Repository - Adult](https://www.google.com/url?q=https%3A%2F%2Farchive.ics.uci.edu%2Fml%2Fdatasets%2FAdult&sa=D&sntz=1&usg=AFQjCNFwLJllpmdZIOWlRLLkk_9ZSNZKqQ) (3.8 MB)

This data set demonstrates a mix of quantitative, ordinal, and nominal columns. To analyze this data set using visualization, it would be useful to aggregate the data on the fly before visualization.

*   age: Q
*   workclass: N
*   education: O
*   education-num: Q
*   marital-status: N
*   occupation: N
*   relationship: N
*   race: N
*   sex: N
*   capital-gain: Q
*   capital-loss: Q
*   hours-per-week: Q
*   native-country: N

[Data Canvas Sense Your City](http://www.google.com/url?q=http%3A%2F%2Fmap.datacanvas.org%2F%23!%2Fdata&sa=D&sntz=1&usg=AFQjCNEedbSdH_mZV_v12HBhxd7Ul-NiMQ) (237MB or Real-time API)

This data set contains measures collected by DIY sensor kits across several major cities ["San Francisco", "Bangalore", "Boston", "Geneva", "Rio de Janeiro", "Shanghai", "Singapore"]. There is a [visualization competition](http://www.google.com/url?q=http%3A%2F%2Fdatacanvas.org%2Fsense-your-city%2F&sa=D&sntz=1&usg=AFQjCNHcWeFkvA6wD_oRnamXreEj450Bkg) for this data set, submissions due March 20.

*   city: G
*   timestamp: T
*   temperature: Q
*   light: Q
*   airquality: Q
*   sound: Q
*   humidity: Q
*   dust: Q

[Medical Store Geospatial Challenge](http://www.google.com/url?q=http%3A%2F%2Fdatabits.io%2Fchallenges%2Fmedical-store-geospatial-challenge&sa=D&sntz=1&usg=AFQjCNHB2oK5X8YZBVhgSRfNo2X6BJuMdg) (< 100KB)

This is a data set is small, but comes with a set of real-world questions about the data. This is also a competition, with submissions due April 25.

*   Referrers - Each row corresponds to information on a particular client referral source.

*   referrer_code: N
*   visit_count: Q
*   city -- referrer city
*   postal_code_referrer: G
*   (latitude, longitude): G

*   Clients - Each row corresponds to a client visit to the store

*   client_id: N
*   referrer_code: N
*   city -- referrer city
*   postal_code_referrer: G
*   (latitude, longitude): G
*   initial_visit_date: T
*   product_count: Q

[UCI Machine Learning Repository - Individual household electric power consumption](https://www.google.com/url?q=https%3A%2F%2Farchive.ics.uci.edu%2Fml%2Fdatasets%2FIndividual%2Bhousehold%2Belectric%2Bpower%2Bconsumption&sa=D&sntz=1&usg=AFQjCNFBoiSE5f5cpTXGFOOBD6GQfvC2Bw) (20 MB)

This data set would be a great candidate to show multi-scale temporal aggregation.

*   timestamp: T
*   global_active_power: Q
*   global_reactive_power: Q
*   voltage: Q
*   global_intensity: Q

[BrightKite User Check-ins](http://www.google.com/url?q=http%3A%2F%2Fsnap.stanford.edu%2Fdata%2Floc-brightkite.html&sa=D&sntz=1&usg=AFQjCNHyanzkA0OtOKyz0iT_ceGMUjnF6A) (57.2 MB)

This data set would be a useful example for multi-scale aggregation in both space and time. This has been used as the motivating example for several Big Data visualization systems based on data cubes ([imMens: Real‐time Visual Querying of Big Data](https://www.google.com/url?q=https%3A%2F%2Fidl.cs.washington.edu%2Ffiles%2F2013-imMens-EuroVis.pdf&sa=D&sntz=1&usg=AFQjCNH5qDFCuBGeAKXLiTYUXK5SJZI1VQ), [Nanocubes for real-time exploration of spatiotemporal datasets](http://www.google.com/url?q=http%3A%2F%2Fciteseerx.ist.psu.edu%2Fviewdoc%2Fdownload%3Fdoi%3D10.1.1.394.4736%26rep%3Drep1%26type%3Dpdf&sa=D&sntz=1&usg=AFQjCNG5VEnQssBSkU6xBjmUFo-pffWrYg)).

*   user-id: N
*   timestamp: T
*   (latitude, longitude): G

[ACLED (Armed Conflict Location and Event Data Project)](http://www.google.com/url?q=http%3A%2F%2Fwww.acleddata.com%2Fdata%2F&sa=D&sntz=1&usg=AFQjCNFV5lpcdVoD6nKJR-vXkKidw5XuPQ) (35MB)

This data set contains entries for each violent event in Africa from 1997 - 2014\. This data set would be a good candidate for visualization with a linked timeline and choropleth map, where selections in the timeline can drive the filtering of data shown on the map.

*   timestamp: T
*   (latitude, longitude): G
*   country: G
*   number of fatalities: Q

[Safecast](http://www.google.com/url?q=http%3A%2F%2Fblog.safecast.org%2Fdata%2F&sa=D&sntz=1&usg=AFQjCNHExG-991SfaAYOMkX_FMPGJFHpew) (3.2GB)

Grassroots sensor data about nuclear radiation in Japan

[Statistical Computing Statistical Graphics Data expo Airline on-time performance](http://www.google.com/url?q=http%3A%2F%2Fstat-computing.org%2Fdataexpo%2F2009%2F&sa=D&sntz=1&usg=AFQjCNGAAyzi1YJc-Xhkbtnw7bk8fY0MwA) (12GB)

A great data set for scalability testing. This is the data set used in the [Crossfilter Demo](http://www.google.com/url?q=http%3A%2F%2Fsquare.github.io%2Fcrossfilter%2F&sa=D&sntz=1&usg=AFQjCNH-caOpObkW654NYdXJxNYLmpkxCQ).

[The GDELT Data Set](http://www.google.com/url?q=http%3A%2F%2Fgdeltproject.org%2Fdata.html%23rawdatafiles&sa=D&sntz=1&usg=AFQjCNEpiEVGZcQX-U_ZZm8MlTL9oU6ZZg) (~100GB)

This would be a great data set for more extreme scalability testing. There is an [Open Source project for loading this data set into Spark on AWS.](https://www.google.com/url?q=https%3A%2F%2Fgithub.com%2Fvelvia%2Fspark-sql-gdelt&sa=D&sntz=1&usg=AFQjCNG766ALWSV8iNLjbQZd_CJnqK3spg)

[The Indian Census has lots of public data.](http://www.google.com/url?q=http%3A%2F%2Fwww.devinfo.org%2Findiacensus2011%2Flibraries%2Faspx%2FCatalog.aspx&sa=D&sntz=1&usg=AFQjCNFpZ93xLZHQvmkLq-4u38ymTPsDKw)

Best Buy has a [developer portal for querying their data via a Web API.](https://www.google.com/url?q=https%3A%2F%2Fdeveloper.bestbuy.com%2F&sa=D&sntz=1&usg=AFQjCNHeep1tEkODill37AcU-weTtkoDBw)
