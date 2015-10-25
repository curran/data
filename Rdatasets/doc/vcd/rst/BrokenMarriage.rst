+------------------+-------------------+
| BrokenMarriage   | R Documentation   |
+------------------+-------------------+

Broken Marriage Data
--------------------

Description
~~~~~~~~~~~

Data from the Danish Welfare Study about broken marriages or permanent
relationships depending on gender and social rank.

Usage
~~~~~

::

    data("BrokenMarriage")

Format
~~~~~~

A data frame with 20 observations and 4 variables.

Freq
    frequency.

gender
    factor indicating gender (male, female).

rank
    factor indicating social rank (I, II, III, IV, V).

broken
    factor indicating whether the marriage or permanent relationship was
    broken (yes, no).

Source
~~~~~~

E. B. Andersen (1991), The Statistical Analysis of Categorical Data,
page 177.

References
~~~~~~~~~~

E. B. Andersen (1991), *The Statistical Analysis of Categorical Data*.
2nd edition. Springer-Verlag, Berlin.

Examples
~~~~~~~~

::

    data("BrokenMarriage")
    structable(~ ., data = BrokenMarriage)

