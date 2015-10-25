+---------+-------------------+
| beav2   | R Documentation   |
+---------+-------------------+

Body Temperature Series of Beaver 2
-----------------------------------

Description
~~~~~~~~~~~

Reynolds (1994) describes a small part of a study of the long-term
temperature dynamics of beaver *Castor canadensis* in north-central
Wisconsin. Body temperature was measured by telemetry every 10 minutes
for four females, but data from a one period of less than a day for each
of two animals is used there.

Usage
~~~~~

::

    beav2

Format
~~~~~~

The ``beav2`` data frame has 100 rows and 4 columns. This data frame
contains the following columns:

``day``
    Day of observation (in days since the beginning of 1990), November
    3–4.

``time``
    Time of observation, in the form ``0330`` for 3.30am.

``temp``
    Measured body temperature in degrees Celsius.

``activ``
    Indicator of activity outside the retreat.

Source
~~~~~~

P. S. Reynolds (1994) Time-series analyses of beaver body temperatures.
Chapter 11 of Lange, N., Ryan, L., Billard, L., Brillinger, D.,
Conquest, L. and Greenhouse, J. eds (1994) *Case Studies in Biometry.*
New York: John Wiley and Sons.

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (2002) *Modern Applied Statistics with
S.* Fourth edition. Springer.

See Also
~~~~~~~~

``beav1``

Examples
~~~~~~~~

::

    attach(beav2)
    beav2$hours <- 24*(day-307) + trunc(time/100) + (time%%100)/60
    plot(beav2$hours, beav2$temp, type = "l", xlab = "time",
       ylab = "temperature", main = "Beaver 2")
    usr <- par("usr"); usr[3:4] <- c(-0.2, 8); par(usr = usr)
    lines(beav2$hours, beav2$activ, type = "s", lty = 2)

    temp <- ts(temp, start = 8+2/3, frequency = 6)
    activ <- ts(activ, start = 8+2/3, frequency = 6)
    acf(temp[activ == 0]); acf(temp[activ == 1]) # also look at PACFs
    ar(temp[activ == 0]); ar(temp[activ == 1])

    arima(temp, order = c(1,0,0), xreg = activ)
    dreg <- cbind(sin = sin(2*pi*beav2$hours/24), cos = cos(2*pi*beav2$hours/24))
    arima(temp, order = c(1,0,0), xreg = cbind(active=activ, dreg))

    library(nlme) # for gls and corAR1
    beav2.gls <- gls(temp ~ activ, data = beav2, corr = corAR1(0.8),
                     method = "ML")
    summary(beav2.gls)
    summary(update(beav2.gls, subset = 6:100))
    detach("beav2"); rm(temp, activ)

