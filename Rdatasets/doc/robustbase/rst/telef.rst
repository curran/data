+---------+-------------------+
| telef   | R Documentation   |
+---------+-------------------+

Number of International Calls from Belgium
------------------------------------------

Description
~~~~~~~~~~~

Number of international calls from Belgium, taken from the Belgian
Statistical Survey, published by the Ministry of Economy.

Usage
~~~~~

::

    data(telef)

Format
~~~~~~

A data frame with 24 observations on the following 2 variables.

``Calls``
    Number of Calls (in tens of millions)

``Year``
    Year (1950 - 1973)

Source
~~~~~~

P. J. Rousseeuw and A. M. Leroy (1987) *Robust Regression and Outlier
Detection*; Wiley, page 26, table 2.

Examples
~~~~~~~~

::

    data(telef)
    summary(lm.telef <- lm(Year~., data=telef))

