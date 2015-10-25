+----------------+-------------------+
| VisualAcuity   | R Documentation   |
+----------------+-------------------+

Visual Acuity in Left and Right Eyes
------------------------------------

Description
~~~~~~~~~~~

Data from Kendall & Stuart (1961) on unaided vision among 3,242 men and
7,477 women, all aged 30-39 and employed in the U.K. Royal Ordnance
factories 1943-1946.

Usage
~~~~~

::

    data("VisualAcuity")

Format
~~~~~~

A data frame with 32 observations and 4 variables.

Freq
    frequency of visual acuity measurements.

right
    visual acuity on right eye.

left
    visual acuity on left eye.

gender
    factor indicating gender of patient.

Source
~~~~~~

M. Friendly (2000), Visualizing Categorical Data:
`http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/vision.sas <http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/vision.sas>`__

References
~~~~~~~~~~

M. G. Kendall & A. Stuart (1961), *The Advanced Theory of Statistics*,
Vol. 2. Griffin, London.

M. Friendly (2000), *Visualizing Categorical Data*. SAS Institute, Cary,
NC.

Examples
~~~~~~~~

::

    data("VisualAcuity")
    structable(~ gender + left + right, data = VisualAcuity)

