+---------+-------------------+
| bfeed   | R Documentation   |
+---------+-------------------+

data from Section 1.14
----------------------

Description
~~~~~~~~~~~

The ``bfeed`` data frame has 927 rows and 10 columns.

Format
~~~~~~

This data frame contains the following columns:

duration
    Duration of breast feeding, weeks

delta
    Indicator of completed breast feeding (1=yes, 0=no)

race
    Race of mother (1=white, 2=black, 3=other)

poverty
    Mother in poverty (1=yes, 0=no)

smoke
    Mother smoked at birth of child (1=yes, 0=no)

alcohol
    Mother used alcohol at birth of child (1=yes, 0=no)

agemth
    Age of mother at birth of child

ybirth
    Year of birth

yschool
    Education level of mother (years of school)

pc3mth
    Prenatal care after 3rd month (1=yes, 0=no)

Source
~~~~~~

Klein and Moeschberger (1997) *Survival Analysis Techniques for Censored
and truncated data*, Springer. *National Longitudinal Survey of Youth
Handbook* The Ohio State University, 1995.

Examples
~~~~~~~~

::

    data(bfeed)

