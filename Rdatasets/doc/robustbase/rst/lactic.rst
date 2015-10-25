+----------+-------------------+
| lactic   | R Documentation   |
+----------+-------------------+

Lactic Acid Concentration Measurement Data
------------------------------------------

Description
~~~~~~~~~~~

Data on the Calibration of an Instrument that Measures Lactic Acid
Concentration in Blood, from Afifi and Azen (1979) - comparing the true
concentration X with the measured value Y.

Usage
~~~~~

::

    data(lactic)

Format
~~~~~~

A data frame with 20 observations on the following 2 variables.

``X``
    True Concentration

``Y``
    Instrument

Source
~~~~~~

P. J. Rousseeuw and A. M. Leroy (1987) *Robust Regression and Outlier
Detection*; Wiley, p.62, table 10.

Examples
~~~~~~~~

::

    data(lactic)
    summary(lm.lactic <- lm(Y ~., data=lactic))

