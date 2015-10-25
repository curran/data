+-----------+-------------------+
| drughiv   | R Documentation   |
+-----------+-------------------+

data from Exercise 7.6, p222
----------------------------

Description
~~~~~~~~~~~

The ``drughiv`` data frame has 34 rows and 3 columns.

Format
~~~~~~

This data frame contains the following columns:

drug
    Drug combination (1=AZT + zalcitabine, 2=AZT + zalcitabine +
    saquinavir)

time
    Time after drug administration to CD4 count at a specified level,
    days

delta
    Indicator of CD4 count reaching specified level (1=yes, 0=no)

Source
~~~~~~

Klein and Moeschberger (1997) *Survival Analysis Techniques for Censored
and truncated data*, Springer.

Examples
~~~~~~~~

::

    data(drughiv)

