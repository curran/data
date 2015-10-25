+---------+-------------------+
| mdvis   | R Documentation   |
+---------+-------------------+

mdvis
-----

Description
~~~~~~~~~~~

Data from a subset of the German Socio-Economic Panel (SOEP). The subset
was created by Rabe-Hesketh and Skrondal (2005). Only working women are
included in these data. Beginning in 1997, German health reform in part
entailed a 200 co-payment as well as limits in provider reimbursement.
Patients were surveyed for the one year panel (1996) prior to and the
one year panel (1998) after reform to assess whether the number of
physician visits by patients declined - which was the goal of reform
legislation. The response, or variable to be explained by the model, is
numvisit, which indicates the number of patient visits to a physician's
office during a three month period.

Usage
~~~~~

::

    data(mdvis)

Format
~~~~~~

A data frame with 2,227 observations on the following 13 variables.

``numvisit``
    visits to MD office 3mo prior

``reform``
    1=interview yr post-reform: 1998;0=pre-reform:1996

``badh``
    1=bad health; 0 = not bad health

``age``
    Age(yrs 20-60)

``educ``
    education(1:7-10;2=10.5-12;3=HSgrad+)

``educ1``
    educ1= 7-10 years

``educ2``
    educ2= 10.5-12 years

``educ3``
    educ3= post secondary or high school

``agegrp``
    age: 1=20-39; 2=40-49; 3=50-60

``age1``
    age 20-39

``age2``
    age 40-49

``age3``
    age 50-60

``loginc``
    log(household income in DM)

Details
~~~~~~~

mdvis is saved as a data frame. Count models typically use docvis as
response variable. 0 counts are included

Source
~~~~~~

German Socio-Economic Panel (SOEP), 1995 pre-reform; 1998 post reform.
Created by Rabe-Hesketh and Skrondal (2005).

References
~~~~~~~~~~

Hilbe, Joseph M (2007, 2011), Negative Binomial Regression, Cambridge
University Press Hilbe, Joseph M (2009), Logistic Regression Models,
Chapman & Hall/CRC Rabe-Hesketh, S. and A. Skrondal (2005). Multilevel
and Longitudinal Modeling Using Stata, College Station: Stata Press.

Examples
~~~~~~~~

::

    data(mdvis)
    glmmdp <- glm(numvisit ~ reform + factor(educ) + factor(agegrp), family=poisson, data=mdvis)
    summary(glmmdp)
    exp(coef(glmmdp))
    library(MASS)
    glmmdnb <- glm.nb(numvisit ~ reform + factor(educ) + factor(agegrp), data=mdvis)
    summary(glmmdnb)
    exp(coef(glmmdnb))

