+--------------+-------------------+
| Punishment   | R Documentation   |
+--------------+-------------------+

Corporal Punishment Data
------------------------

Description
~~~~~~~~~~~

Data from a study of the Gallup Institute in Denmark in 1979 about the
attitude of a random sample of 1,456 persons towards corporal punishment
of children.

Usage
~~~~~

::

    data("Punishment")

Format
~~~~~~

A data frame with 36 observations and 5 variables.

Freq
    frequency.

attitude
    factor indicating attitude: (no, moderate) punishment of children.

memory
    factor indicating whether the person had memories of corporal
    punishment as a child (yes, no).

education
    factor indicating highest level of education (elementary, secondary,
    high).

age
    factor indicating age group in years (15-24, 25-39, 40-).

Note
~~~~

Anderson (1991) erroneously indicates the total sum of respondents to be
783.

Source
~~~~~~

E. B. Andersen (1991), The Statistical Analysis of Categorical Data,
pages 207–208.

References
~~~~~~~~~~

E. B. Andersen (1991), *The Statistical Analysis of Categorical Data*.
2nd edition. Springer-Verlag, Berlin.

Examples
~~~~~~~~

::

    data("Punishment", package = "vcd")
    pun <- xtabs(Freq ~ memory + attitude + age + education, data = Punishment)

    ## model: ~ (memory + attitude) * age * education
    ## use maximum sum-of-squares test/shading
    cotabplot(~ memory + attitude | age + education, data = pun, panel = cotab_coindep,
      n = 5000, type = "assoc", test = "maxchisq", interpolate = 1:2)

