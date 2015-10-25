+----------+-------------------+
| motors   | R Documentation   |
+----------+-------------------+

Accelerated Life Testing of Motorettes
--------------------------------------

Description
~~~~~~~~~~~

The ``motors`` data frame has 40 rows and 3 columns. It describes an
accelerated life test at each of four temperatures of 10 motorettes, and
has rather discrete times.

Usage
~~~~~

::

    motors

Format
~~~~~~

This data frame contains the following columns:

``temp``
    the temperature (degrees C) of the test.

``time``
    the time in hours to failure or censoring at 8064 hours (= 336
    days).

``cens``
    an indicator variable for death.

Source
~~~~~~

Kalbfleisch, J. D. and Prentice, R. L. (1980) *The Statistical Analysis
of Failure Time Data.* New York: Wiley.

taken from

Nelson, W. D. and Hahn, G. J. (1972) Linear regression of a regression
relationship from censored data. Part 1 – simple methods and their
application. *Technometrics*, **14**, 247–276.

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (2002) *Modern Applied Statistics with
S.* Fourth edition. Springer.

Examples
~~~~~~~~

::

    library(survival)
    plot(survfit(Surv(time, cens) ~ factor(temp), motors), conf.int = FALSE)
    # fit Weibull model
    motor.wei <- survreg(Surv(time, cens) ~ temp, motors)
    summary(motor.wei)
    # and predict at 130C
    unlist(predict(motor.wei, data.frame(temp=130), se.fit = TRUE))

    motor.cox <- coxph(Surv(time, cens) ~ temp, motors)
    summary(motor.cox)
    # predict at temperature 200
    plot(survfit(motor.cox, newdata = data.frame(temp=200),
         conf.type = "log-log"))
    summary( survfit(motor.cox, newdata = data.frame(temp=130)) )

