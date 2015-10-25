+------------+-------------------+
| phosphor   | R Documentation   |
+------------+-------------------+

Phosphorus Content Data
-----------------------

Description
~~~~~~~~~~~

This dataset investigates the effect from inorganic and organic
Phosphorus in the soil upon the phosphorus content of the corn grown in
this soil, from Prescott (1975).

Usage
~~~~~

::

    data(phosphor)

Format
~~~~~~

A data frame with 18 observations on the following 3 variables.

``inorg``
    Inorganic soil Phosphorus

``organic``
    Organic soil Phosphorus

``plant``
    Plant Phosphorus content

Source
~~~~~~

P. J. Rousseeuw and A. M. Leroy (1987) *Robust Regression and Outlier
Detection.* Wiley, p.156, table 24.

Examples
~~~~~~~~

::

    data(phosphor)
    plot(phosphor)
    summary(lm.phosphor <- lm(plant ~ ., data = phosphor))
    summary(lts.phosphor <- ltsReg(plant ~ ., data = phosphor))

    phosphor.x <- data.matrix(phosphor[, 1:2])
    cPh <- covMcd(phosphor.x)
    plot(cPh, "dd")

