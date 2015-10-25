+---------+-------------------+
| heart   | R Documentation   |
+---------+-------------------+

Heart Catherization Data
------------------------

Description
~~~~~~~~~~~

This data set was analyzed by Weisberg (1980) and Chambers et al.
(1983). A catheter is passed into a major vein or artery at the femoral
region and moved into the heart. The proper length of the introduced
catheter has to be guessed by the physician. The aim of the data set is
to describe the relation between the catheter length and the patient's
height (X1) and weight (X2).

This data sets is used to demonstrate the effects caused by
collinearity. The correlation between height and weight is so high that
either variable almost completely determines the other.

Usage
~~~~~

::

    data(heart)


Format
~~~~~~

A data frame with 12 observations on the following 3 variables.

``height``
    Patient's height in inches

``weight``
    Patient's weights in pounds

``clength``
    Y: Catheter Length (in centimeters)

Note
~~~~

There are other ``heart`` datasets in other **R** packages, notably
survival, hence considering using ``package = "robustbase"``, see
examples.

Source
~~~~~~

Weisberg (1980)

Chambers et al. (1983)

P. J. Rousseeuw and A. M. Leroy (1987) *Robust Regression and Outlier
Detection*; Wiley, p.103, table 13.

Examples
~~~~~~~~

::

    data(heart, package="robustbase")
    heart.x <- data.matrix(heart[, 1:2]) # the X-variables
    plot(heart.x)
    covMcd(heart.x)
    summary( lm.heart <-     lm(clength ~ . , data = heart))
    summary(lts.heart <- ltsReg(clength ~ . , data = heart))

