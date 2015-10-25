+------------+-------------------+
| menarche   | R Documentation   |
+------------+-------------------+

Age of Menarche in Warsaw
-------------------------

Description
~~~~~~~~~~~

Proportions of female children at various ages during adolescence who
have reached menarche.

Usage
~~~~~

::

    menarche

Format
~~~~~~

This data frame contains the following columns:

``Age``
    Average age of the group. (The groups are reasonably age
    homogeneous.)

``Total``
    Total number of children in the group.

``Menarche``
    Number who have reached menarche.

Source
~~~~~~

Milicer, H. and Szczotka, F. (1966) Age at Menarche in Warsaw girls in
1965. *Human Biology* **38**, 199–203.

| The data are also given in
|  Aranda-Ordaz, F.J. (1981) On two families of transformations to
additivity for binary response data. *Biometrika* **68**, 357–363.

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (2002) *Modern Applied Statistics with
S.* Fourth edition. Springer.

Examples
~~~~~~~~

::

    mprob <- glm(cbind(Menarche, Total - Menarche) ~ Age,
                 binomial(link = probit), data = menarche)

