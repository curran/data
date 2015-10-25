+--------------+-------------------+
| azcabgptca   | R Documentation   |
+--------------+-------------------+

azcabgptca
----------

Description
~~~~~~~~~~~

Random subset of the 1991 Arizona Medicare data for patients
hospitalized subsequent to undergoing a CABG (DRGs 106, 107) or PTCA
(DRG 112) cardiovascular procedure.

Usage
~~~~~

::

    data(azcabgptca)

Format
~~~~~~

A data frame with 1959 observations on the following 6 variables.

``died``
    systolic blood pressure of subject

``procedure``
    1=CABG; 0=PTCA

``gender``
    1=male; 0=female

``age``
    age of subject

``los``
    hospital length of stay

``type``
    1=emerg/urgent; 0=elective

Details
~~~~~~~

azcabgptca is saved as a data frame.

Source
~~~~~~

Hilbe, Negative Binomial Regression, 2nd ed, Cambridge Univ Press

References
~~~~~~~~~~

Hilbe, Joseph M (2014), Modeling Count Data, Cambridge University Press

Examples
~~~~~~~~

::


    data(azcabgptca); attach(azcabgptca)
    table(los); table(procedure, type); table(los, procedure)
    summary(los)
    summary(c91a <- glm(los ~ procedure+ type, family=poisson, data=azcabgptca))
    modelfit(c91a)
    summary(c91b <- glm(los ~ procedure+ type, family=quasipoisson, data=azcabgptca))
    modelfit(c91b)
    library(sandwich)
    sqrt(diag(vcovHC(c91a, type="HC0")))

