+--------+-------------------+
| wood   | R Documentation   |
+--------+-------------------+

Modified Data on Wood Specific Gravity
--------------------------------------

Description
~~~~~~~~~~~

The original data are from Draper and Smith (1966) and were used to
determine the influence of anatomical factors on wood specific gravity,
with five explanatory variables and an intercept. These data were
contaminated by replacing a few observations with outliers.

Usage
~~~~~

::

    data(wood)

Format
~~~~~~

A data frame with 20 observations on the following 6 variables.

x1, x2, x3, x4, x5
    explanatory “anatomical” wood variables.

y
    wood specific gravity, the target variable.

Source
~~~~~~

Draper and Smith (1966, p.227)

Peter J. Rousseeuw and Annick M. Leroy (1987) *Robust Regression and
Outlier Detection* Wiley, p.243, table 8.

Examples
~~~~~~~~

::

    data(wood)
    plot(wood)
    summary( lm.wood <-        lm(y ~ ., data = wood))
    summary(rlm.wood <- MASS::rlm(y ~ ., data = wood))
    summary(lts.wood <-    ltsReg(y ~ ., data = wood))

    wood.x <- as.matrix(wood)[,1:5]
    c_wood <- covMcd(wood.x)
    c_wood

