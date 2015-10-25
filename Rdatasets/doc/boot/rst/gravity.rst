+-----------+-------------------+
| gravity   | R Documentation   |
+-----------+-------------------+

Acceleration Due to Gravity
---------------------------

Description
~~~~~~~~~~~

The ``gravity`` data frame has 81 rows and 2 columns.

The ``grav`` data set has 26 rows and 2 columns.

Between May 1934 and July 1935, the National Bureau of Standards in
Washington D.C. conducted a series of experiments to estimate the
acceleration due to gravity, *g*, at Washington. Each experiment
produced a number of replicate estimates of *g* using the same
methodology. Although the basic method remained the same for all
experiments, that of the reversible pendulum, there were changes in
configuration.

The ``gravity`` data frame contains the data from all eight experiments.
The ``grav`` data frame contains the data from the experiments 7 and 8.
The data are expressed as deviations from 980.000 in centimetres per
second squared.

Usage
~~~~~

::

    gravity

Format
~~~~~~

This data frame contains the following columns:

``g``
    The deviation of the estimate from 980.000 centimetres per second
    squared.

``series``
    A factor describing from which experiment the estimate was derived.

Source
~~~~~~

The data were obtained from

Cressie, N. (1982) Playing safe with misweighted means. *Journal of the
American Statistical Association*, **77**, 754–759.

References
~~~~~~~~~~

Davison, A.C. and Hinkley, D.V. (1997) *Bootstrap Methods and Their
Application*. Cambridge University Press.
