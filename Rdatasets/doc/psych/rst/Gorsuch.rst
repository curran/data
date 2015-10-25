+-----------+-------------------+
| Gorsuch   | R Documentation   |
+-----------+-------------------+

Example data set from Gorsuch (1997) for an example factor extension.
---------------------------------------------------------------------

Description
~~~~~~~~~~~

Gorsuch (1997) suggests an alternative to the classic Dwyer (1937)
factor extension technique. This data set is taken from that article.
Useful for comparing ``link{fa.extension}`` with and without the
correct=TRUE option.

Usage
~~~~~

::

    data(Gorsuch)

Details
~~~~~~~

Gorsuc (1997) suggested an alternative model for factor extension. His
method is appropriate for the case of repeated variables. This is
handled in ``link{fa.extension}`` with correct=FALSE

Source
~~~~~~

Richard L. Gorsuch (1997) New Procedure for Extension Analysis in
Exploratory Factor Analysis. Educational and Psychological Measurement,
57, 725-740.

References
~~~~~~~~~~

Dwyer, Paul S. (1937), The determination of the factor loadings of a
given test from the known factor loadings of other tests. Psychometrika,
3, 173-178

Examples
~~~~~~~~

::

    data(Gorsuch)

    Ro <- Gorsuch[1:6,1:6]
    Roe <- Gorsuch[1:6,7:10]
    fo <- fa(Ro,2,rotate="none")
    fa.extension(Roe,fo,correct=FALSE)

