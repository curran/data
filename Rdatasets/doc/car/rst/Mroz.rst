+--------+-------------------+
| Mroz   | R Documentation   |
+--------+-------------------+

U.S. Women's Labor-Force Participation
--------------------------------------

Description
~~~~~~~~~~~

The ``Mroz`` data frame has 753 rows and 8 columns. The observations,
from the Panel Study of Income Dynamics (PSID), are married women.

Usage
~~~~~

::

    Mroz

Format
~~~~~~

This data frame contains the following columns:

lfp
    labor-force participation; a factor with levels: ``no``; ``yes``.

k5
    number of children 5 years old or younger.

k618
    number of children 6 to 18 years old.

age
    in years.

wc
    wife's college attendance; a factor with levels: ``no``; ``yes``.

hc
    husband's college attendance; a factor with levels: ``no``; ``yes``.

lwg
    log expected wage rate; for women in the labor force, the actual
    wage rate; for women not in the labor force, an imputed value based
    on the regression of ``lwg`` on the other variables.

inc
    family income exclusive of wife's income.

Source
~~~~~~

Mroz, T. A. (1987) The sensitivity of an empirical model of married
women's hours of work to economic and statistical assumptions.
*Econometrica* **55**, 765–799.

References
~~~~~~~~~~

Fox, J. (2008) *Applied Regression Analysis and Generalized Linear
Models*, Second Edition. Sage.

Fox, J. (2000) *Multiple and Generalized Nonparametric Regression.*
Sage.

Fox, J. and Weisberg, S. (2011) *An R Companion to Applied Regression*,
Second Edition, Sage.

Long. J. S. (1997) *Regression Models for Categorical and Limited
Dependent Variables.* Sage.
