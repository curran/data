+-----------+-------------------+
| volcano   | R Documentation   |
+-----------+-------------------+

Topographic Information on Auckland's Maunga Whau Volcano
---------------------------------------------------------

Description
~~~~~~~~~~~

Maunga Whau (Mt Eden) is one of about 50 volcanos in the Auckland
volcanic field. This data set gives topographic information for Maunga
Whau on a 10m by 10m grid.

Usage
~~~~~

::

    volcano

Format
~~~~~~

A matrix with 87 rows and 61 columns, rows corresponding to grid lines
running east to west and columns to grid lines running south to north.

Source
~~~~~~

Digitized from a topographic map by Ross Ihaka. These data should not be
regarded as accurate.

See Also
~~~~~~~~

``filled.contour`` for a nice plot.

Examples
~~~~~~~~

::

    require(grDevices); require(graphics)
    filled.contour(volcano, color.palette = terrain.colors, asp = 1)
    title(main = "volcano data: filled contour map")

