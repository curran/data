+-----------------+-------------------+
| DanishWelfare   | R Documentation   |
+-----------------+-------------------+

Danish Welfare Study Data
-------------------------

Description
~~~~~~~~~~~

Data from the Danish Welfare Study.

Usage
~~~~~

::

    data("DanishWelfare")

Format
~~~~~~

A data frame with 180 observations and 5 variables.

Freq
    frequency.

Alcohol
    factor indicating daily alcohol consumption: less than 1 unit (<1),
    1-2 units (1-2) or more than 2 units (>2). 1 unit is approximately 1
    bottle of beer or 4cl 40% alcohol.

Income
    factor indicating income group in 1000 DKK (0-50, 50-100, 100-150,
    >150).

Status
    factor indicating marriage status (Widow, Married, Unmarried).

Urban
    factor indicating urbanization: Copenhagen (Copenhagen), Suburbian
    Copenhagen (SubCopenhagen), three largest cities (LargeCity), other
    cities (City), countryside (Country).

Source
~~~~~~

E. B. Andersen (1991), The Statistical Analysis of Categorical Data,
page 205.

References
~~~~~~~~~~

E. B. Andersen (1991), *The Statistical Analysis of Categorical Data*.
2nd edition. Springer-Verlag, Berlin.

Examples
~~~~~~~~

::

    data("DanishWelfare")
    ftable(xtabs(Freq ~ ., data = DanishWelfare))

