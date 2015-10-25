+---------+-------------------+
| uspop   | R Documentation   |
+---------+-------------------+

Populations Recorded by the US Census
-------------------------------------

Description
~~~~~~~~~~~

This data set gives the population of the United States (in millions) as
recorded by the decennial census for the period 1790–1970.

Usage
~~~~~

::

    uspop

Format
~~~~~~

A time series of 19 values.

Source
~~~~~~

McNeil, D. R. (1977) *Interactive Data Analysis*. New York: Wiley.

Examples
~~~~~~~~

::

    require(graphics)
    plot(uspop, log = "y", main = "uspop data", xlab = "Year",
         ylab = "U.S. Population (millions)")

