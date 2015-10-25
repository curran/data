+----------+-------------------+
| precip   | R Documentation   |
+----------+-------------------+

Annual Precipitation in US Cities
---------------------------------

Description
~~~~~~~~~~~

The average amount of precipitation (rainfall) in inches for each of 70
United States (and Puerto Rico) cities.

Usage
~~~~~

::

    precip

Format
~~~~~~

A named vector of length 70.

Source
~~~~~~

Statistical Abstracts of the United States, 1975.

References
~~~~~~~~~~

McNeil, D. R. (1977) *Interactive Data Analysis*. New York: Wiley.

Examples
~~~~~~~~

::

    require(graphics)
    dotchart(precip[order(precip)], main = "precip data")
    title(sub = "Average annual precipitation (in.)")

