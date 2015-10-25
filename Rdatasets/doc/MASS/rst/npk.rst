+-------+-------------------+
| npk   | R Documentation   |
+-------+-------------------+

Classical N, P, K Factorial Experiment
--------------------------------------

Description
~~~~~~~~~~~

A classical N, P, K (nitrogen, phosphate, potassium) factorial
experiment on the growth of peas conducted on 6 blocks. Each half of a
fractional factorial design confounding the NPK interaction was used on
3 of the plots.

Usage
~~~~~

::

    npk

Format
~~~~~~

The ``npk`` data frame has 24 rows and 5 columns:

``block``
    which block (label 1 to 6).

``N``
    indicator (0/1) for the application of nitrogen.

``P``
    indicator (0/1) for the application of phosphate.

``K``
    indicator (0/1) for the application of potassium.

``yield``
    Yield of peas, in pounds/plot (the plots were (1/70) acre).

Note
~~~~

This dataset is also contained in **R** 3.0.2 and later.

Source
~~~~~~

Imperial College, London, M.Sc. exercise sheet.

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (2002) *Modern Applied Statistics with
S.* Fourth edition. Springer.

Examples
~~~~~~~~

::

    options(contrasts = c("contr.sum", "contr.poly"))
    npk.aov <- aov(yield ~ block + N*P*K, npk)
    npk.aov
    summary(npk.aov)
    alias(npk.aov)
    coef(npk.aov)
    options(contrasts = c("contr.treatment", "contr.poly"))
    npk.aov1 <- aov(yield ~ block + N + K, data = npk)
    summary.lm(npk.aov1)
    se.contrast(npk.aov1, list(N=="0", N=="1"), data = npk)
    model.tables(npk.aov1, type = "means", se = TRUE)

