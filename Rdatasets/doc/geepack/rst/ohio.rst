+--------+-------------------+
| ohio   | R Documentation   |
+--------+-------------------+

Ohio Children Wheeze Status
---------------------------

Description
~~~~~~~~~~~

The ``ohio`` data frame has 2148 rows and 4 columns. The dataset is a
subset of the six-city study, a longitudinal study of the health effects
of air pollution.

Usage
~~~~~

::

    data(ohio)

Format
~~~~~~

This data frame contains the following columns:

resp
    an indicator of wheeze status (1=yes, 0=no)

id
    a numeric vector for subject id

age
    a numeric vector of age, 0 is 9 years old

smoke
    an indicator of maternal smoking at the first year of the study

References
~~~~~~~~~~

Fitzmaurice, G.M. and Laird, N.M. (1993) A likelihood-based method for
analyzing longitudinal binary responses, *Biometrika* **80**: 141–151.

Examples
~~~~~~~~

::

    data(ohio)
    fit <- geese(resp ~ age + smoke + age:smoke, id=id, data=ohio,
                 family=binomial, corstr="exch", scale.fix=TRUE)
    summary(fit)
    fit.ar1 <- geese(resp ~ age + smoke + age:smoke, id=id, data=ohio,
                     family=binomial, corstr="ar1", scale.fix=TRUE)
    summary(fit.ar1)

