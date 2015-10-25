+---------------+-------------------+
| WorldPhones   | R Documentation   |
+---------------+-------------------+

The World's Telephones
----------------------

Description
~~~~~~~~~~~

The number of telephones in various regions of the world (in thousands).

Usage
~~~~~

::

    WorldPhones

Format
~~~~~~

A matrix with 7 rows and 8 columns. The columns of the matrix give the
figures for a given region, and the rows the figures for a year.

The regions are: North America, Europe, Asia, South America, Oceania,
Africa, Central America.

The years are: 1951, 1956, 1957, 1958, 1959, 1960, 1961.

Source
~~~~~~

AT&T (1961) *The World's Telephones*.

References
~~~~~~~~~~

McNeil, D. R. (1977) *Interactive Data Analysis*. New York: Wiley.

Examples
~~~~~~~~

::

    require(graphics)
    matplot(rownames(WorldPhones), WorldPhones, type = "b", log = "y",
            xlab = "Year", ylab = "Number of telephones (1000's)")
    legend(1951.5, 80000, colnames(WorldPhones), col = 1:6, lty = 1:5,
           pch = rep(21, 7))
    title(main = "World phones data: log scale for response")

