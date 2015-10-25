+-----------+-------------------+
| pneumon   | R Documentation   |
+-----------+-------------------+

data from Section 1.13
----------------------

Description
~~~~~~~~~~~

The ``pneumon`` data frame has 3470 rows and 15 columns.

Format
~~~~~~

This data frame contains the following columns:

chldage
    Age child had pneumonia, months

hospital
    Indicator for hospitalization for pneumonia (1=yes, 0=no)

mthage
    Age of the mother, years

urban
    Urban environment for mother (1=yes, 0=no)

alcohol
    Alcohol use by mother during pregnancy (1=yes, 0=no)

smoke
    Cigarette use by mother during pregnancy (1=yes, 0=no)

region
    Region of the coutry (1=northeast, 2=north central, 3=south, 4=west)

poverty
    Mother at poverty level (1=yes, 0=no)

bweight
    Normal birthweight (>5.5 lbs.) (1=yes, 0=no)

race
    Race of the mother (1=white, 2=black, 3=other)

education
    Education of the mother, years of school

nsibs
    Number of siblings of the child

wmonth
    Month the child was weaned

sfmonth
    Month the child on solid food

agepn
    Age child in the hospital for pneumonia, months

Source
~~~~~~

Klein and Moeschberger (1997) *Survival Analysis Techniques for Censored
and truncated data*, Springer. *National Longitudinal Survey of Youth
Handbook* The Ohio State University, 1995.

Examples
~~~~~~~~

::

    data(pneumon)

