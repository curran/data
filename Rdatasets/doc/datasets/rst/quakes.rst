+----------+-------------------+
| quakes   | R Documentation   |
+----------+-------------------+

Locations of Earthquakes off Fiji
---------------------------------

Description
~~~~~~~~~~~

The data set give the locations of 1000 seismic events of MB > 4.0. The
events occurred in a cube near Fiji since 1964.

Usage
~~~~~

::

    quakes

Format
~~~~~~

A data frame with 1000 observations on 5 variables.

+--------+------------+-----------+--------------------------------+
| [,1]   | lat        | numeric   | Latitude of event              |
+--------+------------+-----------+--------------------------------+
| [,2]   | long       | numeric   | Longitude                      |
+--------+------------+-----------+--------------------------------+
| [,3]   | depth      | numeric   | Depth (km)                     |
+--------+------------+-----------+--------------------------------+
| [,4]   | mag        | numeric   | Richter Magnitude              |
+--------+------------+-----------+--------------------------------+
| [,5]   | stations   | numeric   | Number of stations reporting   |
+--------+------------+-----------+--------------------------------+

Details
~~~~~~~

There are two clear planes of seismic activity. One is a major plate
junction; the other is the Tonga trench off New Zealand. These data
constitute a subsample from a larger dataset of containing 5000
observations.

Source
~~~~~~

This is one of the Harvard PRIM-H project data sets. They in turn
obtained it from Dr. John Woodhouse, Dept. of Geophysics, Harvard
University.

Examples
~~~~~~~~

::

    require(graphics)
    pairs(quakes, main = "Fiji Earthquakes, N = 1000", cex.main = 1.2, pch = ".")

