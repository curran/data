+----------+-------------------+
| freeny   | R Documentation   |
+----------+-------------------+

Freeny's Revenue Data
---------------------

Description
~~~~~~~~~~~

Freeny's data on quarterly revenue and explanatory variables.

Usage
~~~~~

::

    freeny
    freeny.x
    freeny.y

Format
~~~~~~

There are three ‘freeny’ data sets.

``freeny.y`` is a time series with 39 observations on quarterly revenue
from (1962,2Q) to (1971,4Q).

``freeny.x`` is a matrix of explanatory variables. The columns are
``freeny.y`` lagged 1 quarter, price index, income level, and market
potential.

Finally, ``freeny`` is a data frame with variables ``y``,
``lag.quarterly.revenue``, ``price.index``, ``income.level``, and
``market.potential`` obtained from the above two data objects.

Source
~~~~~~

A. E. Freeny (1977) *A Portable Linear Regression Package with Test
Programs*. Bell Laboratories memorandum.

References
~~~~~~~~~~

Becker, R. A., Chambers, J. M. and Wilks, A. R. (1988) *The New S
Language*. Wadsworth & Brooks/Cole.

Examples
~~~~~~~~

::

    require(stats); require(graphics)
    summary(freeny)
    pairs(freeny, main = "freeny data")
    # gives warning: freeny$y has class "ts"

    summary(fm1 <- lm(y ~ ., data = freeny))
    opar <- par(mfrow = c(2, 2), oma = c(0, 0, 1.1, 0),
                mar = c(4.1, 4.1, 2.1, 1.1))
    plot(fm1)
    par(opar)

