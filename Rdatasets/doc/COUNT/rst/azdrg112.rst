+------------+-------------------+
| azdrg112   | R Documentation   |
+------------+-------------------+

azdrg112
--------

Description
~~~~~~~~~~~

The data set relates to the hospital length of stay for patients having
a CABG or PTCA (typel) heart procedure. The data comes from the 1995
Arizona Medicare data for DRG (Diagnostic Related Group) 112. Other
predictors include gender(1=female) and age75 (1-age 75+). Type is
labeled as 1=emergency or urgent admission; 0= elective. Length of stay
(los) ranges from 1 to 53 days.

Usage
~~~~~

::

    data(azdrg112)

Format
~~~~~~

A data frame with 1,798 observations on the following 4 variables.

``los``
    hospital length of stay: 1-53 days

``gender``
    1=male; 0=female

``type1``
    1=emergency/urgent admission; 0=elective admission

``age75``
    1=age>75; 0=age<=75

Details
~~~~~~~

azdrg112 is saved as a data frame. Count models typically use los as
response variable. 0 counts are not included

Source
~~~~~~

DRG 112 data from the 1995 Arizona Medicare (MedPar) State files

References
~~~~~~~~~~

Hilbe, Joseph M (2007, 2011), Negative Binomial Regression, Cambridge
University Press

Examples
~~~~~~~~

::

    data(azdrg112)
    glmazp <- glm(los ~ type1 + gender + age75, family=poisson, data=azdrg112)
    summary(glmazp)
    exp(coef(glmazp))
    library(MASS)
    glmaznb <- glm.nb(los ~ type1 + gender + age75, data=azdrg112)
    summary(glmaznb)
    exp(coef(glmaznb))

