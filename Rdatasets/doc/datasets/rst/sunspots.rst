+------------+-------------------+
| sunspots   | R Documentation   |
+------------+-------------------+

Monthly Sunspot Numbers, 1749–1983
----------------------------------

Description
~~~~~~~~~~~

Monthly mean relative sunspot numbers from 1749 to 1983. Collected at
Swiss Federal Observatory, Zurich until 1960, then Tokyo Astronomical
Observatory.

Usage
~~~~~

::

    sunspots

Format
~~~~~~

A time series of monthly data from 1749 to 1983.

Source
~~~~~~

Andrews, D. F. and Herzberg, A. M. (1985) *Data: A Collection of
Problems from Many Fields for the Student and Research Worker*. New
York: Springer-Verlag.

See Also
~~~~~~~~

``sunspot.month`` has a longer (and a bit different) series,
``sunspot.year`` is a much shorter one. See there for getting more
current sunspot numbers.

Examples
~~~~~~~~

::

    require(graphics)
    plot(sunspots, main = "sunspots data", xlab = "Year",
         ylab = "Monthly sunspot numbers")

