+----------+-------------------+
| loomis   | R Documentation   |
+----------+-------------------+

loomis
------

Description
~~~~~~~~~~~

Data are taken from Loomis (2003). The study relates to a survey taken
on reported frequency of visits to national parks during the year. The
survey was taken at park sites, thus incurring possible effects of
endogenous stratification.

Usage
~~~~~

::

    data(loomis)

Format
~~~~~~

A data frame with 410 observations on the following 11 variables.

``anvisits``
    number of annual visits to park

``gender``
    1=male;0=female

``income``
    income in US dollars per year, categorical: 4 levels

``income1``
    <=$25000

``income2``
    >$25000 - $55000

``income3``
    >$55000 - $95000

``income4``
    >$95000

``travel``
    travel time, categorical: 3 levels

``travel1``
    <.25 hrs

``travel2``
    >=.25 - <4 hrs

``travel3``
    >=4 hrs

Details
~~~~~~~

loomis is saved as a data frame. Count models typically use anvisits as
response variable. 0 counts are included

Source
~~~~~~

from Loomis (2003)

References
~~~~~~~~~~

Hilbe, Joseph M (2007, 2011), Negative Binomial Regression, Cambridge
University Press Loomis, J. B. (2003). Travel cost demand model based
river recreation benefit estimates with on-site and household surveys:
Comparative results and a correction procedure, Water Resources
Research, 39(4): 1105

Examples
~~~~~~~~

::

    data(loomis)
    glmlmp <- glm(anvisits ~ gender + factor(income) + factor(travel), family=poisson, data=loomis)
    summary(glmlmp)
    exp(coef(glmlmp))
    library(MASS)
    glmlmnb <- glm.nb(anvisits ~ gender + factor(income) + factor(travel), data=loomis)
    summary(glmlmnb)
    exp(coef(glmlmnb))

