+-----------+-------------------+
| longley   | R Documentation   |
+-----------+-------------------+

Longley's Economic Regression Data
----------------------------------

Description
~~~~~~~~~~~

A macroeconomic data set which provides a well-known example for a
highly collinear regression.

Usage
~~~~~

::

    longley

Format
~~~~~~

A data frame with 7 economical variables, observed yearly from 1947 to
1962 (*n=16*).

GNP.deflator:
    GNP implicit price deflator (*1954=100*)

GNP:
    Gross National Product.

Unemployed:
    number of unemployed.

Armed.Forces:
    number of people in the armed forces.

Population:
    ‘noninstitutionalized’ population *≥* 14 years of age.

Year:
    the year (time).

Employed:
    number of people employed.

The regression ``lm(Employed ~ .)`` is known to be highly collinear.

Source
~~~~~~

J. W. Longley (1967) An appraisal of least-squares programs from the
point of view of the user. *Journal of the American Statistical
Association* **62**, 819–841.

References
~~~~~~~~~~

Becker, R. A., Chambers, J. M. and Wilks, A. R. (1988) *The New S
Language*. Wadsworth & Brooks/Cole.

Examples
~~~~~~~~

::

    require(stats); require(graphics)
    ## give the data set in the form it is used in S-PLUS:
    longley.x <- data.matrix(longley[, 1:6])
    longley.y <- longley[, "Employed"]
    pairs(longley, main = "longley data")
    summary(fm1 <- lm(Employed ~ ., data = longley))
    opar <- par(mfrow = c(2, 2), oma = c(0, 0, 1.1, 0),
                mar = c(4.1, 4.1, 2.1, 1.1))
    plot(fm1)
    par(opar)

