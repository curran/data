+------------+-------------------+
| delivery   | R Documentation   |
+------------+-------------------+

Delivery Time Data
------------------

Description
~~~~~~~~~~~

Delivery Time Data, from Montgomery and Peck (1982). The aim is to
explain the time required to service a vending machine (Y) by means of
the number of products stocked (X1) and the distance walked by the route
driver (X2).

Usage
~~~~~

::

    data(delivery)

Format
~~~~~~

A data frame with 25 observations on the following 3 variables.

``n.prod``
    Number of Products

``distance``
    Distance

``delTime``
    Delivery time

Source
~~~~~~

Montgomery and Peck (1982, p.116)

References
~~~~~~~~~~

P. J. Rousseeuw and A. M. Leroy (1987) *Robust Regression and Outlier
Detection*; Wiley, page 155, table 23.

Examples
~~~~~~~~

::

    data(delivery)
    summary(lm.deli <- lm(delTime ~ ., data = delivery))

    delivery.x <- as.matrix(delivery[, 1:2])
    c_deli <- covMcd(delivery.x)
    c_deli

