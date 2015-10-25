+-----------+-------------------+
| poisons   | R Documentation   |
+-----------+-------------------+

Animal Survival Times
---------------------

Description
~~~~~~~~~~~

The ``poisons`` data frame has 48 rows and 3 columns.

The data form a 3x4 factorial experiment, the factors being three
poisons and four treatments. Each combination of the two factors was
used for four animals, the allocation to animals having been completely
randomized.

Usage
~~~~~

::

    poisons

Format
~~~~~~

This data frame contains the following columns:

``time``
    The survival time of the animal in units of 10 hours.

``poison``
    A factor with levels ``1``, ``2`` and ``3`` giving the type of
    poison used.

``treat``
    A factor with levels ``A``, ``B``, ``C`` and ``D`` giving the
    treatment.

Source
~~~~~~

The data were obtained from

Box, G.E.P. and Cox, D.R. (1964) An analysis of transformations (with
Discussion). *Journal of the Royal Statistical Society, B*, **26**,
211–252.

References
~~~~~~~~~~

Davison, A.C. and Hinkley, D.V. (1997) *Bootstrap Methods and Their
Application*. Cambridge University Press.
