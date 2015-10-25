+------------+-------------------+
| aircraft   | R Documentation   |
+------------+-------------------+

Aircraft Data
-------------

Description
~~~~~~~~~~~

Aircraft Data, deals with 23 single-engine aircraft built over the years
1947-1979, from Office of Naval Research. The dependent variable is cost
(in units of \\$100,000) and the explanatory variables are aspect ratio,
lift-to-drag ratio, weight of plane (in pounds) and maximal thrust.

Usage
~~~~~

::

    data(aircraft)

Format
~~~~~~

A data frame with 23 observations on the following 5 variables.

``X1``
    Aspect Ratio

``X2``
    Lift-to-Drag Ratio

``X3``
    Weight

``X4``
    Thrust

``Y``
    Cost

Source
~~~~~~

P. J. Rousseeuw and A. M. Leroy (1987) *Robust Regression and Outlier
Detection*; Wiley, page 154, table 22.

Examples
~~~~~~~~

::

    data(aircraft)
    summary( lm.airc <-        lm(Y ~ ., data = aircraft))
    summary(rlm.airc <- MASS::rlm(Y ~ ., data = aircraft))

    aircraft.x <- data.matrix(aircraft[,1:4])
    c_air <- covMcd(aircraft.x)
    c_air

