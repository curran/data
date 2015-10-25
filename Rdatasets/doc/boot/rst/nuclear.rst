+-----------+-------------------+
| nuclear   | R Documentation   |
+-----------+-------------------+

Nuclear Power Station Construction Data
---------------------------------------

Description
~~~~~~~~~~~

The ``nuclear`` data frame has 32 rows and 11 columns.

The data relate to the construction of 32 light water reactor (LWR)
plants constructed in the U.S.A in the late 1960's and early 1970's. The
data was collected with the aim of predicting the cost of construction
of further LWR plants. 6 of the power plants had partial turnkey
guarantees and it is possible that, for these plants, some
manufacturers' subsidies may be hidden in the quoted capital costs.

Usage
~~~~~

::

    nuclear

Format
~~~~~~

This data frame contains the following columns:

``cost``
    The capital cost of construction in millions of dollars adjusted to
    1976 base.

``date``
    The date on which the construction permit was issued. The data are
    measured in years since January 1 1990 to the nearest month.

``t1``
    The time between application for and issue of the construction
    permit.

``t2``
    The time between issue of operating license and construction permit.

``cap``
    The net capacity of the power plant (MWe).

``pr``
    A binary variable where ``1`` indicates the prior existence of a LWR
    plant at the same site.

``ne``
    A binary variable where ``1`` indicates that the plant was
    constructed in the north-east region of the U.S.A.

``ct``
    A binary variable where ``1`` indicates the use of a cooling tower
    in the plant.

``bw``
    A binary variable where ``1`` indicates that the nuclear steam
    supply system was manufactured by Babcock-Wilcox.

``cum.n``
    The cumulative number of power plants constructed by each
    architect-engineer.

``pt``
    A binary variable where ``1`` indicates those plants with partial
    turnkey guarantees.

Source
~~~~~~

The data were obtained from

Cox, D.R. and Snell, E.J. (1981) *Applied Statistics: Principles and
Examples*. Chapman and Hall.

References
~~~~~~~~~~

Davison, A.C. and Hinkley, D.V. (1997) *Bootstrap Methods and Their
Application*. Cambridge University Press.
