+-------------+-------------------+
| SiegelsEx   | R Documentation   |
+-------------+-------------------+

Siegel's Exact Fit Example Data
-------------------------------

Description
~~~~~~~~~~~

A small counterexample data set devised by Andrew Siegel. Six (out of
nine) data points lie on the line *y = 0* such that some robust
regression estimators exhibit the “\ *exact fit*\ ” property.

Usage
~~~~~

::

    data(SiegelsEx)

Format
~~~~~~

A data frame with 9 observations on the following 2 variables.

``x``
    a numeric vector

``y``
    a numeric vector

Source
~~~~~~

Emerson and Hoaglin (1983, p.139)

References
~~~~~~~~~~

Peter J. Rousseeuw and Annick M. Leroy (1987) *Robust Regression and
Outlier Detection* Wiley, p.60–61

Examples
~~~~~~~~

::

    data(SiegelsEx)
    plot(SiegelsEx, main = "Siegel's example for 'exact fit'")
    abline(          lm(y ~ x, data = SiegelsEx))
    abline(MASS::lqs(y ~ x, data = SiegelsEx, method = "lms"), col = 2)
    legend("topright", leg = c("lm", "LMS"), col=1:2, lwd=1, inset = 1/20)

