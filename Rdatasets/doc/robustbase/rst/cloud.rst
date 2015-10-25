+---------+-------------------+
| cloud   | R Documentation   |
+---------+-------------------+

Cloud point of a Liquid
-----------------------

Description
~~~~~~~~~~~

This data set contains the measurements concerning the cloud point of a
Liquid, from Draper and Smith (1969). The cloud point is a measure of
the degree of crystallization in a stock.

Usage
~~~~~

::

    data(cloud)

Format
~~~~~~

A data frame with 19 observations on the following 2 variables.

``Percentage``
    Percentage of I-8

``CloudPoint``
    Cloud point

Source
~~~~~~

P. J. Rousseeuw and A. M. Leroy (1987) *Robust Regression and Outlier
Detection*; Wiley, p.96, table 10.

Examples
~~~~~~~~

::

    data(cloud)
    summary(lm.cloud <- lm(CloudPoint ~., data=cloud))

