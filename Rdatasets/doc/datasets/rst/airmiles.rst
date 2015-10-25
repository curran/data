+------------+-------------------+
| airmiles   | R Documentation   |
+------------+-------------------+

Passenger Miles on Commercial US Airlines, 1937–1960
----------------------------------------------------

Description
~~~~~~~~~~~

The revenue passenger miles flown by commercial airlines in the United
States for each year from 1937 to 1960.

Usage
~~~~~

::

    airmiles

Format
~~~~~~

A time series of 24 observations; yearly, 1937–1960.

Source
~~~~~~

F.A.A. Statistical Handbook of Aviation.

References
~~~~~~~~~~

Brown, R. G. (1963) *Smoothing, Forecasting and Prediction of Discrete
Time Series*. Prentice-Hall.

Examples
~~~~~~~~

::

    require(graphics)
    plot(airmiles, main = "airmiles data",
         xlab = "Passenger-miles flown by U.S. commercial airlines", col = 4)

