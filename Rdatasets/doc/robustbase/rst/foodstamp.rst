+-------------+-------------------+
| foodstamp   | R Documentation   |
+-------------+-------------------+

Food Stamp Program Participation
--------------------------------

Description
~~~~~~~~~~~

This data consists of 150 randomly selected persons from a survey with
information on over 2000 elderly US citizens, where the response,
indicates participation in the U.S. Food Stamp Program.

Usage
~~~~~

::

    data(foodstamp)

Format
~~~~~~

A data frame with 150 observations on the following 4 variables.

``participation``
    participation in U.S. Food Stamp Program; yes = 1, no = 0

``tenancy``
    tenancy, indicating home ownership; yes = 1, no = 0

``suppl.income``
    supplemental income, indicating whether some form of supplemental
    security income is received; yes = 1, no = 0

``income``
    monthly income (in US dollars)

Source
~~~~~~

Data description and first analysis: Stefanski et al.(1986) who indicate
Rizek(1978) as original source of the larger study.

Electronic version from CRAN package catdata.

References
~~~~~~~~~~

Rizek, R. L. (1978) The 1977-78 Nationwide Food Consumption Survey.
*Family Econ. Rev.*, Fall, 3–7.

Stefanski, L. A., Carroll, R. J. and Ruppert, D. (1986) Optimally
bounded score functions for generalized linear models with applications
to logistic regression. *Biometrika* **73**, 413–424.

Künsch, H. R., Stefanski, L. A., Carroll, R. J. (1989) Conditionally
unbiased bounded-influence estimation in general regression models, with
applications to generalized linear models. *J. American Statistical
Association* **84**, 460–466.

Examples
~~~~~~~~

::

    data(foodstamp)

    (T123 <- xtabs(~ participation+ tenancy+ suppl.income, data=foodstamp))
    summary(T123) ## ==> the binary var's are clearly not independent

    foodSt <- within(foodstamp, {
       logInc <- log(1 + income)
       rm(income)
    })

    m1 <- glm(participation ~ ., family=binomial, data=foodSt)
    summary(m1)
    rm1 <- glmrob(participation ~ ., family=binomial, data=foodSt)
    summary(rm1)
    ## Now use robust weights.on.x :
    rm2 <- glmrob(participation ~ ., family=binomial, data=foodSt,
                  weights.on.x = "robCov")
    summary(rm2)## aha, now the weights are different:
    which( weights(rm2, type="robust") < 0.5)

