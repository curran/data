+------------+-------------------+
| salinity   | R Documentation   |
+------------+-------------------+

Water Salinity and River Discharge
----------------------------------

Description
~~~~~~~~~~~

The ``salinity`` data frame has 28 rows and 4 columns.

Biweekly averages of the water salinity and river discharge in Pamlico
Sound, North Carolina were recorded between the years 1972 and 1977. The
data in this set consists only of those measurements in March, April and
May.

Usage
~~~~~

::

    salinity

Format
~~~~~~

This data frame contains the following columns:

``sal``
    The average salinity of the water over two weeks.

``lag``
    The average salinity of the water lagged two weeks. Since only
    spring is used, the value of ``lag`` is not always equal to the
    previous value of ``sal``.

``trend``
    A factor indicating in which of the 6 biweekly periods between March
    and May, the observations were taken. The levels of the factor are
    from 0 to 5 with 0 being the first two weeks in March.

``dis``
    The amount of river discharge during the two weeks for which ``sal``
    is the average salinity.

Source
~~~~~~

The data were obtained from

Ruppert, D. and Carroll, R.J. (1980) Trimmed least squares estimation in
the linear model. *Journal of the American Statistical Association*,
**75**, 828–838.

References
~~~~~~~~~~

Davison, A.C. and Hinkley, D.V. (1997) *Bootstrap Methods and Their
Application*. Cambridge University Press.
