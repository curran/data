+-----------+-------------------+
| pension   | R Documentation   |
+-----------+-------------------+

Pension Funds Data
------------------

Description
~~~~~~~~~~~

The total 1981 premium income of pension funds of Dutch firms, for 18
Professional Branches, from de Wit (1982).

Usage
~~~~~

::

    data(pension)

Format
~~~~~~

A data frame with 18 observations on the following 2 variables.

``Income``
    Premium Income (in millions of guilders)

``Reserves``
    Premium Reserves (in millions of guilders)

Source
~~~~~~

P. J. Rousseeuw and A. M. Leroy (1987) *Robust Regression and Outlier
Detection*; Wiley, p.76, table 13.

Examples
~~~~~~~~

::

    data(pension)
    plot(pension)

    summary(lm.p  <-    lm(Reserves ~., data=pension))
    summary(lmR.p <- lmrob(Reserves ~., data=pension))
    summary(lts.p <- ltsReg(Reserves ~., data=pension))
    abline( lm.p)
    abline(lmR.p, col=2)
    abline(lts.p, col=2, lty=2)

    ## MM: "the" solution is much simpler:
    plot(pension, log = "xy")
    lm.lp  <-    lm(log(Reserves) ~ log(Income), data=pension)
    lmR.lp <- lmrob(log(Reserves) ~ log(Income), data=pension)
    plot(log(Reserves) ~ log(Income), data=pension)
    ## no difference between LS and robust:
    abline( lm.lp)
    abline(lmR.lp, col=2)

