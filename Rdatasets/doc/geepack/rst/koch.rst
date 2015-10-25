+--------+-------------------+
| koch   | R Documentation   |
+--------+-------------------+

Ordinal Data from Koch
----------------------

Description
~~~~~~~~~~~

The ``koch`` data frame has 288 rows and 4 columns.

Usage
~~~~~

::

    data(koch)

Format
~~~~~~

This data frame contains the following columns:

trt
    a numeric vector

day
    a numeric vector

y
    an ordered factor with levels: ``1`` < ``2`` < ``3``

id
    a numeric vector

Examples
~~~~~~~~

::

    data(koch)
    fit <- ordgee(ordered(y) ~ trt + as.factor(day), id=id, data=koch, corstr="exch")
    summary(fit)

