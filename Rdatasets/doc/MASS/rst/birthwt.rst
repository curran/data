+-----------+-------------------+
| birthwt   | R Documentation   |
+-----------+-------------------+

Risk Factors Associated with Low Infant Birth Weight
----------------------------------------------------

Description
~~~~~~~~~~~

The ``birthwt`` data frame has 189 rows and 10 columns. The data were
collected at Baystate Medical Center, Springfield, Mass during 1986.

Usage
~~~~~

::

    birthwt

Format
~~~~~~

This data frame contains the following columns:

``low``
    indicator of birth weight less than 2.5 kg.

``age``
    mother's age in years.

``lwt``
    mother's weight in pounds at last menstrual period.

``race``
    mother's race (``1`` = white, ``2`` = black, ``3`` = other).

``smoke``
    smoking status during pregnancy.

``ptl``
    number of previous premature labours.

``ht``
    history of hypertension.

``ui``
    presence of uterine irritability.

``ftv``
    number of physician visits during the first trimester.

``bwt``
    birth weight in grams.

Source
~~~~~~

Hosmer, D.W. and Lemeshow, S. (1989) *Applied Logistic Regression.* New
York: Wiley

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (2002) *Modern Applied Statistics with
S.* Fourth edition. Springer.

Examples
~~~~~~~~

::

    bwt <- with(birthwt, {
    race <- factor(race, labels = c("white", "black", "other"))
    ptd <- factor(ptl > 0)
    ftv <- factor(ftv)
    levels(ftv)[-(1:2)] <- "2+"
    data.frame(low = factor(low), age, lwt, race, smoke = (smoke > 0),
               ptd, ht = (ht > 0), ui = (ui > 0), ftv)
    })
    options(contrasts = c("contr.treatment", "contr.poly"))
    glm(low ~ ., binomial, bwt)

