+------------+-------------------+
| kootenay   | R Documentation   |
+------------+-------------------+

Waterflow Measurements of Kootenay River in Libby and Newgate
-------------------------------------------------------------

Description
~~~~~~~~~~~

The original data set is the waterflow in January of the Kootenay river,
measured at two locations, namely, Libby (Montana) and Newgate (British
Columbia) for 13 consecutive years, 1931–1943.

The data set is of mostly interest because it has been used as example
in innumerous didactical situations about robust regression. To this
end, one number (in observation 4) has been modified from the original
data from originally 44.9 to 15.7 (here).

Usage
~~~~~

::

    data(kootenay)

Format
~~~~~~

A data frame with 13 observations on the following 2 variables.

``Libby``
    a numeric vector

``Newgate``
    a numeric vector

Details
~~~~~~~

The original (unmodified) version of the data is easily obtainable as
``kootenay0`` from the examples; other modified versions of the data
sets are also used in different places, see the examples below.

Source
~~~~~~

Original Data, p.58f of Ezekiel and Fox (1959), *Methods of Correlation
and Regression Analysis*. Wiley, N.Y.

References
~~~~~~~~~~

Hampel, F., Ronchetti, E., Rousseeuw, P. and Stahel, W. (1986) *Robust
Statistics: The Approach Based on Influence Functions*; Wiley, N.Y.

Rousseeuw, P. J. and Leroy, A. M. (1987) *Robust Regression & Outlier
Detection*, Wiley, N. Y.

Examples
~~~~~~~~

::

    data(kootenay)
    plot(kootenay, main = "'kootenay' data")
    points(kootenay[4,], col = 2, cex =2, pch = 3)

    abline(lm   (Newgate ~ Libby, data = kootenay), col = "pink")
    abline(lmrob(Newgate ~ Libby, data = kootenay), col = "blue")

    ## The original version of Ezekiel & Fox:
    kootenay0 <- kootenay
    kootenay0[4, "Newgate"] <- 44.9
    plot(kootenay0, main = "'kootenay0': the original data")
    abline(lm   (Newgate ~ Libby, data = kootenay0), col = "pink")
    abline(lmrob(Newgate ~ Libby, data = kootenay0), col = "blue")

    ## The version with "milder" outlier -- Hampel et al., p.310
    kootenay2 <- kootenay0
    kootenay2[4, "Libby"] <- 20.0 # instead of 77.6
    plot(kootenay2, main = "The 'kootenay2' data",
         xlim = range(kootenay[,"Libby"]))
    points(kootenay2[4,], col = 2, cex =2, pch = 3)
    abline(lm   (Newgate ~ Libby, data = kootenay2), col = "pink")
    abline(lmrob(Newgate ~ Libby, data = kootenay2), col = "blue")

