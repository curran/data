+-------------+-------------------+
| education   | R Documentation   |
+-------------+-------------------+

Education Expenditure Data
--------------------------

Description
~~~~~~~~~~~

Education Expenditure Data, from Chatterjee and Price (1977, p.108).
This data set, representing the education expenditure variables in the
50 US states, providing an interesting example of heteroscedacity.

Usage
~~~~~

::

    data(education)

Format
~~~~~~

A data frame with 50 observations on the following 6 variables.

``State``
    State

``Region``
    Region (1=Northeastern, 2=North central, 3=Southern, 4=Western)

``X1``
    Number of residents per thousand residing in urban areas in 1970

``X2``
    Per capita personal income in 1973

``X3``
    Number of residents per thousand under 18 years of age in 1974

``Y``
    Per capita expenditure on public education in a state, projected for
    1975

Source
~~~~~~

P. J. Rousseeuw and A. M. Leroy (1987) *Robust Regression and Outlier
Detection*; Wiley, p.110, table 16.

Examples
~~~~~~~~

::

    data(education)
    education.x <- data.matrix(education[, 3:5])


    summary(lm.education <- lm(Y ~ Region + X1+X2+X3, data=education))


    ## See  example(lmrob.M.S) # for how robust regression is used

