+----------+-------------------+
| nhtemp   | R Documentation   |
+----------+-------------------+

Average Yearly Temperatures in New Haven
----------------------------------------

Description
~~~~~~~~~~~

The mean annual temperature in degrees Fahrenheit in New Haven,
Connecticut, from 1912 to 1971.

Usage
~~~~~

::

    nhtemp

Format
~~~~~~

A time series of 60 observations.

Source
~~~~~~

Vaux, J. E. and Brinker, N. B. (1972) *Cycles*, **1972**, 117–121.

References
~~~~~~~~~~

McNeil, D. R. (1977) *Interactive Data Analysis*. New York: Wiley.

Examples
~~~~~~~~

::

    require(stats); require(graphics)
    plot(nhtemp, main = "nhtemp data",
      ylab = "Mean annual temperature in New Haven, CT (deg. F)")

