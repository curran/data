+------------+-------------------+
| starsCYG   | R Documentation   |
+------------+-------------------+

Hertzsprung-Russell Diagram Data of Star Cluster CYG OB1
--------------------------------------------------------

Description
~~~~~~~~~~~

Data for the Hertzsprung-Russell Diagram of the Star Cluster CYG OB1,
which contains 47 stars in the direction of Cygnus, from C.Doom. The
first variable is the logarithm of the effective temperature at the
surface of the star (Te) and the second one is the logarithm of its
light intencity (*L/L\_0*).

| In the Hertzsprung-Russell diagram, which is the scatterplot of these
data points, where the log temperature is plotted from left to right,
two groups of points are seen:
|  the majority which tend to follow a steep band and four stars in the
upper corner. In the astronomy the 43 stars are said to lie on the main
sequence and the four remaining stars are called “giants” (the points
11, 20, 30, 34).

Usage
~~~~~

::

    data(starsCYG)

Format
~~~~~~

A data frame with 47 observations on the following 2 variables

``log.Te``
    Logarithm of the effective temperature at the surface of the star
    (Te).

``log.light``
    Logarithm of its light intencity (*L/L\_0*)

Source
~~~~~~

P. J. Rousseeuw and A. M. Leroy (1987) *Robust Regression and Outlier
Detection*; Wiley, p.27, table 3.

Examples
~~~~~~~~

::

    data(starsCYG)
    plot(starsCYG)
    cst <- covMcd(starsCYG)
    lm.stars <- lm(log.light ~ log.Te, data = starsCYG)
    summary(lm.stars)
    plot(lm.stars)
    lts.stars <- ltsReg(log.light ~ log.Te, data = starsCYG)
    plot(lts.stars)

