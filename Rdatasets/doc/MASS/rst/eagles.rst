+----------+-------------------+
| eagles   | R Documentation   |
+----------+-------------------+

Foraging Ecology of Bald Eagles
-------------------------------

Description
~~~~~~~~~~~

Knight and Skagen collected during a field study on the foraging
behaviour of wintering Bald Eagles in Washington State, USA data
concerning 160 attempts by one (pirating) Bald Eagle to steal a chum
salmon from another (feeding) Bald Eagle.

Usage
~~~~~

::

    eagles

Format
~~~~~~

The ``eagles`` data frame has 8 rows and 5 columns.

``y``
    Number of successful attempts.

``n``
    Total number of attempts.

``P``
    Size of pirating eagle (``L`` = large, ``S`` = small).

``A``
    Age of pirating eagle (``I`` = immature, ``A`` = adult).

``V``
    Size of victim eagle (``L`` = large, ``S`` = small).

Source
~~~~~~

Knight, R. L. and Skagen, S. K. (1988) Agonistic asymmetries and the
foraging ecology of Bald Eagles. *Ecology* **69**, 1188–1194.

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (1999) *Modern Applied Statistics with
S-PLUS.* Third Edition. Springer.

Examples
~~~~~~~~

::

    eagles.glm <- glm(cbind(y, n - y) ~ P*A + V, data = eagles,
                      family = binomial)
    dropterm(eagles.glm)
    prof <- profile(eagles.glm)
    plot(prof)
    pairs(prof)

