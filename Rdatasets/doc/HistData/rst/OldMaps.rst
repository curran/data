+-----------+-------------------+
| OldMaps   | R Documentation   |
+-----------+-------------------+

Latitudes and Longitudes of 39 Points in 11 Old Maps
----------------------------------------------------

Description
~~~~~~~~~~~

The data set is concerned with the problem of aligning the coordinates
of points read from old maps (1688 - 1818) of the Great Lakes area. 39
easily identifiable points were selected in the Great Lakes area, and
their (lat, long) coordinates were recorded using a grid overlaid on
each of 11 old maps, and using linear interpolation.

It was conjectured that maps might be systematically in error in five
key ways: (a) constant error in latitude; (b)constant error in
longitude; (c) proportional error in latitude; (d)proportional error in
longitude; (e) angular error from a non-zero difference between true
North and the map's North.

One challenge from these data is to produce useful analyses and
graphical displays that relate to these characteristics or to other
aspects of the data.

Usage
~~~~~

::

    data(OldMaps)

Format
~~~~~~

A data frame with 468 observations on the following 6 variables, giving
the latitude and longitude of 39 points recorded from 12 sources (Actual
+ 11 maps).

``point``
    a numeric vector

``col``
    Column in the table a numeric vector

``name``
    Name of the map maker, using ``Actual`` for the true coordinates of
    the points. A factor with levels ``Actual`` ``Arrowsmith`` ``Belin``
    ``Cary`` ``Coronelli`` ``D'Anville} \code{Del'Isle`` ``Lattre``
    ``Melish`` ``Mitchell`` ``Popple``

``year``
    Year of the map

``lat``
    Latitude

``long``
    Longitude

Details
~~~~~~~

Some of the latitude and longitude values are inexplicably negative. It
is probable that this is an error in type settting, because the table
footnote says "\* denotes that interpolation accuracy is not good," yet
no "\*"s appear in the body of the table.

Source
~~~~~~

Andrews, D. F., and Herzberg, A. M. (1985). *Data: A Collection of
Problems from Many fields for the Student and Research Worker*. New
York: Springer, Table 10.1. The data were obtained from
`http://www.stat.duke.edu/courses/Spring01/sta114/data/Andrews/T10.1 <http://www.stat.duke.edu/courses/Spring01/sta114/data/Andrews/T10.1>`__.

Examples
~~~~~~~~

::

    data(OldMaps)
    ## maybe str(OldMaps) ; plot(OldMaps) ...

    with(OldMaps, plot(abs(long),abs(lat), pch=col, col=colors()[point]))

