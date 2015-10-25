+---------+-------------------+
| ships   | R Documentation   |
+---------+-------------------+

ships
-----

Description
~~~~~~~~~~~

Data set used in McCullagh & Nelder (1989), Hardin & Hilbe (2003), and
other sources. The data contains values on the number of reported
accidents for ships belonging to a company over a given time period.
When a ship was constructed is also recorded.

Usage
~~~~~

::

    data(ships)

Format
~~~~~~

A data frame with 40 observations on the following 7 variables.

``accident``
    number of shipping accidents

``op``
    1=ship operated 1975-1979;0=1965-74

``co.65.69``
    ship was in construction 1965-1969 (1/0)

``co.70.74``
    ship was in construction 1970-1974 (1/0)

``co.75.79``
    ship was in construction 1975-1979 (1/0)

``service``
    months in service

``ship``
    ship identification : 1-5

Details
~~~~~~~

ships is saved as a data frame. Count models use accident as the
response variable, with log(service) as the offset. ship can be used as
a panel identifier.

Source
~~~~~~

McCullagh and Nelder, 1989.

References
~~~~~~~~~~

Hilbe, Joseph M (2007, 2011), Negative Binomial Regression, Cambridge
University Press Hilbe, Joseph M (2009), Logistic Regression Models,
Chapman & Hall/CRC Hardin, JW and JM Hilbe (2001, 2007), Generalized
Linear Models and Extensions, Stata Press McCullagh, P.A, and J. Nelder
(1989), Generalized Linear Models, Chapman & Hall

Examples
~~~~~~~~

::

    data(ships)
    glmshp <- glm(accident ~ op + co.70.74 + co.75.79 + offset(log(service)),
                  family=poisson, data=ships)
    summary(glmshp)
    exp(coef(glmshp))
    library(MASS)
    glmshnb <- glm.nb(accident ~ op + co.70.74 + co.75.79 + offset(log(service)),
                       data=ships)
    summary(glmshnb)
    exp(coef(glmshnb))
    ## Not run: 
    library(gee)
    shipgee <- gee(accident ~ op + co.70.74 + co.75.79 + offset(log(service)),
                  data=ships, family=poisson, corstr="exchangeable", id=ship)
    summary(shipgee)

    ## End(Not run)

