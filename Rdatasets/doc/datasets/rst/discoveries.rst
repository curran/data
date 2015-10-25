+---------------+-------------------+
| discoveries   | R Documentation   |
+---------------+-------------------+

Yearly Numbers of Important Discoveries
---------------------------------------

Description
~~~~~~~~~~~

The numbers of “great” inventions and scientific discoveries in each
year from 1860 to 1959.

Usage
~~~~~

::

    discoveries

Format
~~~~~~

A time series of 100 values.

Source
~~~~~~

The World Almanac and Book of Facts, 1975 Edition, pages 315–318.

References
~~~~~~~~~~

McNeil, D. R. (1977) *Interactive Data Analysis*. Wiley.

Examples
~~~~~~~~

::

    require(graphics)
    plot(discoveries, ylab = "Number of important discoveries",
         las = 1)
    title(main = "discoveries data set")

