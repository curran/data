+----------+-------------------+
| plasma   | R Documentation   |
+----------+-------------------+

Blood Screening Data
--------------------

Description
~~~~~~~~~~~

The erythrocyte sedimentation rate and measurements of two plasma
proteins (fibrinogen and globulin).

Usage
~~~~~

::

    data("plasma")

Format
~~~~~~

A data frame with 32 observations on the following 3 variables.

``fibrinogen``
    the fibrinogen level in the blood.

``globulin``
    the globulin level in the blood.

``ESR``
    the erythrocyte sedimentation rate, either less or greater 20 mm /
    hour.

Details
~~~~~~~

The erythrocyte sedimentation rate (ESR) is the rate at which red blood
cells (erythrocytes) settle out of suspension in blood plasma, when
measured under standard conditions. If the ESR increases when the level
of certain proteins in the blood plasma rise in association with
conditions such as rheumatic diseases, chronic infections and malignant
diseases, its determination might be useful in screening blood samples
taken form people suspected to being suffering from one of the
conditions mentioned. The absolute value of the ESR is not of great
importance rather it is whether it is less than 20mm/hr since lower
values indicate a healthy individual.

The question of interest is whether there is any association between the
probability of an ESR reading greater than 20mm/hr and the levels of the
two plasma proteins. If there is not then the determination of ESR would
not be useful for diagnostic purposes.

Source
~~~~~~

D. Collett and A. A. Jemain (1985), Residuals, outliers and influential
observations in regression analysis. *Sains Malaysiana*, **4**, 493–511.

Examples
~~~~~~~~

::


      data("plasma", package = "HSAUR")
      layout(matrix(1:2, ncol = 2))
      boxplot(fibrinogen ~ ESR, data = plasma, varwidth = TRUE)
      boxplot(globulin ~ ESR, data = plasma, varwidth = TRUE)

