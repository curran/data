+------------+-------------------+
| Harman.8   | R Documentation   |
+------------+-------------------+

Correlations of eight physical variables (from Harman, 1966)
------------------------------------------------------------

Description
~~~~~~~~~~~

A classic data set from Harman (1976) reporting the correlations of
eight physical variables. Used by Harman for demonstrations of factor
analysis (both principal axis and minimum residual).

Usage
~~~~~

::

    data(Harman.8)

Format
~~~~~~

The format is: num [1:8, 1:8] 1 0.846 0.805 0.859 0.473 0.398 0.301
0.382 0.846 1 ... - attr(\*, "dimnames")=List of 2 ..$ : chr [1:8]
"Height" "Arm span" "Length of forearm" "Length of lower leg" ... ..$ :
chr [1:8] "V1" "V2" "V3" "V4" ...

Details
~~~~~~~

The Eight Physical Variables problem is taken from Harman (1976) and
represents the correlations between eight physical variables for 305
girls. The two correlated clusters represent four measures of
"lankiness" and then four measures of "stockiness". The original data
were selected from 17 variables reported in an unpublished dissertation
by Mullen (1939).

Variable 6 ("Bitrochanteric diamter") is the distance between the outer
points of the hips.

The row names match the original Harman paper, the column names have
been abbreviated.

The ``fa`` solution for principal axes (fm="pa") matches the reported
minres solution, while the fm="minres" does not.

For those interested in teaching examples using various body
measurements, see the body data set in the gclus package.

There are several other Harman examples in the psych package as well as
in the dataseta and and GPArotation packages. The Harman 24 mental tests
problem is in the basic datasets package at Harman74.cor.

Source
~~~~~~

H. Harman and W.Jones. (1966) Factor analysis by minimizing residuals
(minres). Psychometrika, 31(3):351-368.

References
~~~~~~~~~~

Harman, Harry Horace (1976) Modern factor analysis, 3d ed., rev,
University of Chicago Press. Chicago.

Harman, Harry Horace and Jones, W. (1966) Factor analysis by minimizing
residuals (minres). Psychometrika, 31(3):351-368.

See Also
~~~~~~~~

``Harman``, ``Harman.political`` and ``Harman74.cor``

Examples
~~~~~~~~

::

    data(Harman.8)
    cor.plot(Harman.8)
    fa(Harman.8,2,rotate="none")  #the minres solution
    fa(Harman.8,2,rotate="none",fm="pa") #the principal axis solution

