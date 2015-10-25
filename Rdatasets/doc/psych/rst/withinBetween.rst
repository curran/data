+-----------------+-------------------+
| withinBetween   | R Documentation   |
+-----------------+-------------------+

An example of the distinction between within group and between group correlations
---------------------------------------------------------------------------------

Description
~~~~~~~~~~~

A demonstration that a correlation may be decomposed to a within group
correlation and a between group correlations and these two correlations
are independent. Between group correlations are sometimes called
ecological correlations, the decomposition into within and between group
correlations is a basic concept in multilevel modeling. This data set
shows the composite correlations between 9 variables, representing 16
cases with four groups.

Usage
~~~~~

::

    data(withinBetween)

Format
~~~~~~

A data frame with 16 observations on the following 10 variables.

``Group``
    An example grouping factor.

``V1``
    A column of 16 observations

``V2``
    A column of 16 observations

``V3``
    A column of 16 observations

``V4``
    A column of 16 observations

``V5``
    A column of 16 observations

``V6``
    A column of 16 observations

``V7``
    A column of 16 observations

``V8``
    A column of 16 observations

``V9``
    A column of 16 observations

Details
~~~~~~~

Correlations between individuals who belong to different natural groups
(based upon e.g., ethnicity, age, gender, college major,or country)
reflect an unknown mixture of the pooled correlation within each group
as well as the correlation of the means of these groups. These two
correlations are independent and do not allow inferences from one level
(the group) to the other level (the individual). This data set shows
this independence. The within group correlations between 9 variables are
set to be 1, 0, and -1 while those between groups are also set to be 1,
0, -1. These two sets of correlations are crossed such that V1, V4, and
V7 have within group correlations of 1, as do V2, V5 and V8, and V3, V6
and V9. V1 has a within group correlation of 0 with V2, V5, and V8, and
a -1 within group correlation with V3, V6 and V9. V1, V2, and V3 share a
between group correlation of 1, as do V4, V5 and V6, and V7, V8 and V9.
The first group has a 0 between group correlation with the second and a
-1 with the third group.

``statsBy`` can decompose the observed correlation in the between and
within correlations. ``sim.multilevel`` can produce similar data.

Source
~~~~~~

The data were created for this example

References
~~~~~~~~~~

P. D. Bliese. Multilevel modeling in R (2.3) a brief introduction to R,
the multilevel package and the nlme package, 2009.

Pedhazur, E.J. (1997) Multiple regression in behavioral research:
explanation and prediction. Harcourt Brace.

Revelle, W. An introduction to psychometric theory with applications in
R (in prep) Springer. Draft chapters available at
`http://personality-project.org/r/book/ <http://personality-project.org/r/book/>`__

See Also
~~~~~~~~

``statsBy``, ``describeBy``, and ``sim.multilevel``

Examples
~~~~~~~~

::

    data(withinBetween)
    pairs.panels(withinBetween,bg=c("red","blue","white","black")[withinBetween[,1]],
         pch=21,ellipses=FALSE)
    stats <- statsBy(withinBetween,'Group')
    print(stats,short=FALSE)

