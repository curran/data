+-------------------+-------------------+
| JobSatisfaction   | R Documentation   |
+-------------------+-------------------+

Job Satisfaction Data
---------------------

Description
~~~~~~~~~~~

Data from Petersen (1968) about the job satisfaction of 715 blue collar
workers, selected from Danish Industry in 1968.

Usage
~~~~~

::

    data("JobSatisfaction")

Format
~~~~~~

A data frame with 8 observations and 4 variables.

Freq
    frequency.

management
    factor indicating quality of management (bad, good).

supervisor
    factor indicating supervisor's job satisfaction (low, high).

own
    factor indicating worker's own job satisfaction (low, high).

Source
~~~~~~

E. B. Andersen (1991), The Statistical Analysis of Categorical Data,
Table 5.4.

References
~~~~~~~~~~

E. B. Andersen (1991), *The Statistical Analysis of Categorical Data*.
2nd edition. Springer-Verlag, Berlin.

E. Petersen (1968), *Job Satisfaction in Denmark*. (In Danish).
Mentalhygiejnisk Forlag, Copenhagen.

Examples
~~~~~~~~

::

    data("JobSatisfaction")
    structable(~ ., data = JobSatisfaction)

    mantelhaen.test(xtabs(Freq ~ own + supervisor + management,
                          data = JobSatisfaction))

