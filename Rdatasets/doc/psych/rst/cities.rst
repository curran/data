+----------+-------------------+
| cities   | R Documentation   |
+----------+-------------------+

Distances between 11 US cities
------------------------------

Description
~~~~~~~~~~~

Airline distances between 11 US cities may be used as an example for
multidimensional scaling or cluster analysis.

Usage
~~~~~

::

    data(cities)

Format
~~~~~~

A data frame with 11 observations on the following 11 variables.

``ATL``
    Atlana, Georgia

``BOS``
    Boston, Massachusetts

``ORD``
    Chicago, Illinois

``DCA``
    Washington, District of Columbia

``DEN``
    Denver, Colorado

``LAX``
    Los Angeles, California

``MIA``
    Miami, Florida

``JFK``
    New York, New York

``SEA``
    Seattle, Washington

``SFO``
    San Francisco, California

``MSY``
    New Orleans, Lousianna

Details
~~~~~~~

An 11 x11 matrix of distances between major US airports. This is a
useful demonstration of multiple dimensional scaling.

city.location is a dataframe of longitude and latitude for those cities.

Note that the 2 dimensional MDS solution does not perfectly capture the
data from these city distances. Boston, New York and Washington, D.C.
are located slightly too far west, and Seattle and LA are slightly too
far south.

Source
~~~~~~

`http://www.timeanddate.com/worldclock/distance.html <http://www.timeanddate.com/worldclock/distance.html>`__

Examples
~~~~~~~~

::


    data(cities)
    city.location[,1] <- -city.location[,1]
    #not run
    #an overlay map can be added if the package maps is available
    #
    #
    #libary(maps)
    #map("usa")
    #title("MultiDimensional Scaling of US cities")
    #points(city.location)

    plot(city.location, xlab="Dimension 1", ylab="Dimension 2",
       main ="Multidimensional scaling of US cities")
    city.loc <- cmdscale(cities, k=2) #ask for a 2 dimensional solution  round(city.loc,0) 
    city.loc <- -city.loc 
     city.loc <- rescale(city.loc,apply(city.location,2,mean),apply(city.location,2,sd))
    points(city.loc,type="n") 
    text(city.loc,labels=names(cities))

