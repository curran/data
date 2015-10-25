+----------+-------------------+
| rwm5yr   | R Documentation   |
+----------+-------------------+

rwm5yr
------

Description
~~~~~~~~~~~

German health registry for the years 1984-1988. Health information for
years immediately prior to health reform.

Usage
~~~~~

::

    data(rwm5yr)

Format
~~~~~~

A data frame with 19,609 observations on the following 17 variables.

``id``
    patient ID (1=7028)

``docvis``
    number of visits to doctor during year (0-121)

``hospvis``
    number of days in hospital during year (0-51)

``year``
    year; (categorical: 1984, 1985, 1986, 1987, 1988)

``edlevel``
    educational level (categorical: 1-4)

``age``
    age: 25-64

``outwork``
    out of work=1; 0=working

``female``
    female=1; 0=male

``married``
    married=1; 0=not married

``kids``
    have children=1; no children=0

``hhninc``
    household yearly income in marks (in Marks)

``educ``
    years of formal education (7-18)

``self``
    self-employed=1; not self employed=0

``edlevel1``
    (1/0) not high school graduate

``edlevel2``
    (1/0) high school graduate

``edlevel3``
    (1/0) university/college

``edlevel4``
    (1/0) graduate school

Details
~~~~~~~

rwm5yr is saved as a data frame. Count models typically use docvis as
response variable. 0 counts are included

Source
~~~~~~

German Health Reform Registry, years pre-reform 1984-1988, in Hilbe and
Greene (2007)

References
~~~~~~~~~~

Hilbe, Joseph M (2014), Modeling Count Data, Cambridge University Press
Hilbe, Joseph M (2011), Negative Binomial Regression, Cambridge
University Press Hilbe, J. and W. Greene (2008). Count Response
Regression Models, in ed. C.R. Rao, J.P Miller, and D.C. Rao,
Epidemiology and Medical Statistics, Elsevier Handbook of Statistics
Series. London, UK: Elsevier.

Examples
~~~~~~~~

::

    library(MASS)
    data(rwm5yr)

    glmrp <- glm(docvis ~ outwork + female + age + factor(edlevel), family=poisson, data=rwm5yr)
    summary(glmrp)
    exp(coef(glmrp))

    ## Not run: 
    library(msme)
    nb2 <- nbinomial(docvis ~ outwork + female + age + factor(edlevel), data=rwm5yr)
    summary(nb2)
    exp(coef(nb2)) 

    glmrnb <- glm.nb(docvis ~ outwork + female + age + factor(edlevel), data=rwm5yr)
    summary(glmrnb)
    exp(coef(glmrnb))

    ## End(Not run)

