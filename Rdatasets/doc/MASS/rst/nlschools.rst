+-------------+-------------------+
| nlschools   | R Documentation   |
+-------------+-------------------+

Eighth-Grade Pupils in the Netherlands
--------------------------------------

Description
~~~~~~~~~~~

Snijders and Bosker (1999) use as a running example a study of 2287
eighth-grade pupils (aged about 11) in 132 classes in 131 schools in the
Netherlands. Only the variables used in our examples are supplied.

Usage
~~~~~

::

    nlschools

Format
~~~~~~

This data frame contains 2287 rows and the following columns:

``lang``
    language test score.

``IQ``
    verbal IQ.

``class``
    class ID.

``GS``
    class size: number of eighth-grade pupils recorded in the class
    (there may be others: see ``COMB``, and some may have been omitted
    with missing values).

``SES``
    social-economic status of pupil's family.

``COMB``
    were the pupils taught in a multi-grade class (``0/1``)? Classes
    which contained pupils from grades 7 and 8 are coded ``1``, but only
    eighth-graders were tested.

Source
~~~~~~

Snijders, T. A. B. and Bosker, R. J. (1999) *Multilevel Analysis. An
Introduction to Basic and Advanced Multilevel Modelling.* London: Sage.

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (2002) *Modern Applied Statistics with
S.* Fourth edition. Springer.

Examples
~~~~~~~~

::


    nl1 <- within(nlschools, {
    IQave <- tapply(IQ, class, mean)[as.character(class)]
    IQ <- IQ - IQave
    })
    cen <- c("IQ", "IQave", "SES")
    nl1[cen] <- scale(nl1[cen], center = TRUE, scale = FALSE)

    nl.lme <- nlme::lme(lang ~ IQ*COMB + IQave + SES,
                        random = ~ IQ | class, data = nl1)
    summary(nl.lme)

