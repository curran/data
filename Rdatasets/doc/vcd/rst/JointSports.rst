+---------------+-------------------+
| JointSports   | R Documentation   |
+---------------+-------------------+

Opinions About Joint Sports
---------------------------

Description
~~~~~~~~~~~

Data from a Danish study in 1983 and 1985 about sports activities and
the opinion about joint sports with the other gender among 16–19 year
old high school students.

Usage
~~~~~

::

    data("JointSports")

Format
~~~~~~

A data frame with 40 observations and 5 variables.

Freq
    frequency.

opinion
    factor indicating opinion about sports joint with the other gender
    (very good, good, indifferent, bad, very bad).

year
    factor indicating year of study (1983, 1985).

grade
    factor indicating school grade (1st, 3rd).

gender
    factor indicating gender (Boy, Girl).

Source
~~~~~~

E. B. Andersen (1991), The Statistical Analysis of Categorical Data,
page 210.

References
~~~~~~~~~~

E. B. Andersen (1991), *The Statistical Analysis of Categorical Data*.
2nd edition. Springer-Verlag, Berlin.

Examples
~~~~~~~~

::

    library(MASS)
    data("JointSports")
    tab <- xtabs(Freq ~ gender + opinion + grade + year, data = JointSports)
    doubledecker(opinion ~ gender + year + grade, data = tab)
    loglm(~ opinion* (gender + grade+ year) + gender*year*grade, data = tab)

