+------------+-------------------+
| Harman.5   | R Documentation   |
+------------+-------------------+

5 socio-economic variables from Harman (1967)
---------------------------------------------

Description
~~~~~~~~~~~

Harman (1967) uses 5 socio-economic variables for demonstrations of
principal components and factor analysis. This example is used in the
SAS manual for Proc Factor as well.

Usage
~~~~~

::

    data(Harman.5)

Format
~~~~~~

A data frame with 12 observations on the following 5 variables.

``population``
    a numeric vector

``schooling``
    a numeric vector

``employment``
    a numeric vector

``professional``
    a numeric vector

``housevalue``
    a numeric vector

Details
~~~~~~~

Harman reports that the data "were taken (not entirely arbitrarily) from
a study of the Los Angeles Standard Metropolitan Statistical Area. The
twelve individuals are used in the examples are census tracts." (p 13).

Source
~~~~~~

Harman, Harry Horace (1967), Modern factor analysis. Chicago, University
of Chicago Press.

References
~~~~~~~~~~

SAS users manual, chapter 26: pages 1123-1192

Examples
~~~~~~~~

::

    data(Harman.5)
    pc2 <- principal(Harman.5,2,scores=TRUE)
    pc2$residual
    biplot(pc2,main="Biplot of the Harman 5 socio-demographic variables")

