+----------+-------------------+
| cubits   | R Documentation   |
+----------+-------------------+

Galton's example of the relationship between height and 'cubit' or forearm length
---------------------------------------------------------------------------------

Description
~~~~~~~~~~~

Francis Galton introduced the 'co-relation' in 1888 with a paper
discussing how to measure the relationship between two variables. His
primary example was the relationship between height and forearm length.
The data table (cubits) is taken from Galton (1888). Unfortunately,
there seem to be some errors in the original data table in that the
marginal totals do not match the table.

The data frame, ``heights``, is converted from this table.

Usage
~~~~~

::

    data(cubits)

Format
~~~~~~

A data frame with 9 observations on the following 8 variables.

``16.5``
    Cubit length < 16.5

``16.75``
    16.5 <= Cubit length < 17.0

``17.25``
    17.0 <= Cubit length < 17.5

``17.75``
    17.5 <= Cubit length < 18.0

``18.25``
    18.0 <= Cubit length < 18.5

``18.75``
    18.5 <= Cubit length < 19.0

``19.25``
    19.0 <= Cubit length < 19.5

``19.75``
    19.5 <= Cubit length

Details
~~~~~~~

Sir Francis Galton (1888) published the first demonstration of the
correlation coefficient. The regression (or reversion to mediocrity) of
the height to the length of the left forearm (a cubit) was found to .8.
There seem to be some errors in the table as published in that the row
sums do not agree with the actual row sums. These data are used to
create a matrix using ``table2matrix`` for demonstrations of analysis
and displays of the data.

Source
~~~~~~

Galton (1888)

References
~~~~~~~~~~

Galton, Francis (1888) Co-relations and their measurement. Proceedings
of the Royal Society. London Series,45,135-145,

See Also
~~~~~~~~

``table2matrix``, ``table2df``, ``ellipses``, ``heights``,
``peas``,\ ``galton``

Examples
~~~~~~~~

::

    data(cubits)
    cubits
    heights <- table2df(cubits,labs = c("height","cubit"))
    ellipses(heights,n=1,main="Galton's co-relation data set")
    ellipses(jitter(heights$height,3),jitter(heights$cubit,3),pch=".",
         main="Galton's co-relation data set",xlab="height",
         ylab="Forearm (cubit)") #add in some noise to see the points
    pairs.panels(heights,jiggle=TRUE,main="Galton's cubits data set")

