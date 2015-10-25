+-----------+-------------------+
| coleman   | R Documentation   |
+-----------+-------------------+

Coleman Data Set
----------------

Description
~~~~~~~~~~~

Contains information on 20 Schools from the Mid-Atlantic and New England
States, drawn from a population studied by Coleman et al. (1966).
Mosteller and Tukey (1977) analyze this sample consisting of
measurements on six different variables, one of which will be treated as
a responce.

Usage
~~~~~

::

    data(coleman)

Format
~~~~~~

A data frame with 20 observations on the following 6 variables.

``salaryP``
    staff salaries per pupil

``fatherWc``
    percent of white-collar fathers

``sstatus``
    socioeconomic status composite deviation: means for family size,
    family intactness, father's education, mother's education, and home
    items

``teacherSc``
    mean teacher's verbal test score

``motherLev``
    mean mother's educational level, one unit is equal to two school
    years

``Y``
    verbal mean test score (y, all sixth graders)

Author(s)
~~~~~~~~~

Valentin Todorov

Source
~~~~~~

P. J. Rousseeuw and A. M. Leroy (1987) *Robust Regression and Outlier
Detection* Wiley, p.79, table 2.

Examples
~~~~~~~~

::

    data(coleman)
    pairs(coleman)
    summary( lm.coleman <-     lm(Y ~ . , data = coleman))
    summary(lts.coleman <- ltsReg(Y ~ . , data = coleman))

    coleman.x <- data.matrix(coleman[, 1:6])
    (Cc <- covMcd(coleman.x))

