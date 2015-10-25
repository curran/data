+-----------+-------------------+
| islands   | R Documentation   |
+-----------+-------------------+

Areas of the World's Major Landmasses
-------------------------------------

Description
~~~~~~~~~~~

The areas in thousands of square miles of the landmasses which exceed
10,000 square miles.

Usage
~~~~~

::

    islands

Format
~~~~~~

A named vector of length 48.

Source
~~~~~~

The World Almanac and Book of Facts, 1975, page 406.

References
~~~~~~~~~~

McNeil, D. R. (1977) *Interactive Data Analysis*. Wiley.

Examples
~~~~~~~~

::

    require(graphics)
    dotchart(log(islands, 10),
       main = "islands data: log10(area) (log10(sq. miles))")
    dotchart(log(islands[order(islands)], 10),
       main = "islands data: log10(area) (log10(sq. miles))")

