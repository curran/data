+----------+-------------------+
| medpar   | R Documentation   |
+----------+-------------------+

medpar
------

Description
~~~~~~~~~~~

The US national Medicare inpatient hospital database is referred to as
the Medpar data, which is prepared yearly from hospital filing records.
Medpar files for each state are also prepared. The full Medpar data
consists of 115 variables. The national Medpar has some 14 million
records, with one record for each hospilitiztion. The data in the medpar
file comes from 1991 Medicare files for the state of Arizona. The data
are limited to only one diagnostic group (DRG 112). Patient data have
been randomly selected from the original data.

Usage
~~~~~

::

    data(medpar)

Format
~~~~~~

A data frame with 1495 observations on the following 10 variables.

``los``
    length of hospital stay

``hmo``
    Patient belongs to a Health Maintenance Organization, binary

``white``
    Patient identifies themselves as Caucasian, binary

``died``
    Patient died, binary

``age80``
    Patient age 80 and over, binary

``type``
    Type of admission, categorical

``type1``
    Elective admission, binary

``type2``
    Urgent admission,binary

``type3``
    Elective admission, binary

``provnum``
    Provider ID

Details
~~~~~~~

medpar is saved as a data frame. Count models use los as response
variable. 0 counts are structurally excluded

Source
~~~~~~

1991 National Medpar data, National Health Economics & Research Co.

References
~~~~~~~~~~

Hilbe, Joseph M (2014), Modeling Count Data, Cambridge University Press
Hilbe, Joseph M (2007, 2011), Negative Binomial Regression, Cambridge
University Press Hilbe, Joseph M (2009), Logistic Regression Models,
Chapman & Hall/CRC first used in Hardin, JW and JM Hilbe (2001, 2007),
Generalized Linear Models and Extensions, Stata Press

Examples
~~~~~~~~

::

    library(MASS)
    library(msme)
    data(medpar)
    glmp <- glm(los ~ hmo + white + factor(type), family=poisson, data=medpar)
    summary(glmp)
    exp(coef(glmp))
    nb2 <- nbinomial(los ~ hmo + white + factor(type), data=medpar)
    summary(nb2)
    exp(coef(nb2))
    glmnb <- glm.nb(los ~ hmo + white + factor(type), data=medpar)
    summary(glmnb)
    exp(coef(glmnb))

