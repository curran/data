+---------------+-------------------+
| NonResponse   | R Documentation   |
+---------------+-------------------+

Non-Response Survey Data
------------------------

Description
~~~~~~~~~~~

Data about non-response for a Danish survey in 1965.

Usage
~~~~~

::

    data("NonResponse")

Format
~~~~~~

A data frame with 12 observations and 4 variables.

Freq
    frequency.

residence
    factor indicating whether residence was in Copenhagen, in a city
    outside Copenhagen or at the countryside (Copenhagen, City,
    Country).

response
    factor indicating whether a response was given (yes, no).

gender
    factor indicating gender (male, female).

Source
~~~~~~

E. B. Andersen (1991), The Statistical Analysis of Categorical Data,
Table 5.17.

References
~~~~~~~~~~

E. B. Andersen (1991), *The Statistical Analysis of Categorical Data*.
2nd edition. Springer-Verlag, Berlin.

Examples
~~~~~~~~

::

    data("NonResponse")
    structable(~ ., data = NonResponse)

