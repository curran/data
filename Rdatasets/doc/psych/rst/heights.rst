+-----------+-------------------+
| heights   | R Documentation   |
+-----------+-------------------+

A data.frame of the Galton (1888) height and cubit data set.
------------------------------------------------------------

Description
~~~~~~~~~~~

Francis Galton introduced the 'co-relation' in 1888 with a paper
discussing how to measure the relationship between two variables. His
primary example was the relationship between height and forearm length.
The data table (``cubits``) is taken from Galton (1888). Unfortunately,
there seem to be some errors in the original data table in that the
marginal totals do not match the table.

The data frame, ``heights``, is converted from this table using
``table2df``.

Usage
~~~~~

::

    data(heights)

Format
~~~~~~

A data frame with 348 observations on the following 2 variables.

``height``
    Height in inches

``cubit``
    Forearm length in inches

Details
~~~~~~~

Sir Francis Galton (1888) published the first demonstration of the
correlation coefficient. The regression (or reversion to mediocrity) of
the height to the length of the left forearm (a cubit) was found to .8.
The original table ``cubits`` is taken from Galton (1888). There seem to
be some errors in the table as published in that the row sums do not
agree with the actual row sums. These data are used to create a matrix
using ``table2matrix`` for demonstrations of analysis and displays of
the data.

Source
~~~~~~

Galton (1888)

References
~~~~~~~~~~

Galton, Francis (1888) Co-relations and their measurement. Proceedings
of the Royal Society. London Series,45,135-145,

See Also
~~~~~~~~

``table2matrix``, ``table2df``, ``cubits``, ``ellipses``, ``galton``

Examples
~~~~~~~~

::

    data(heights)
    ellipses(heights,n=1,main="Galton's co-relation data set")

