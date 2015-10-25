+------------+-------------------+
| UKSoccer   | R Documentation   |
+------------+-------------------+

UK Soccer Scores
----------------

Description
~~~~~~~~~~~

Data from Lee (1997), on the goals scored by Home and Away teams in the
Premier Football League, 1995/6 season.

Usage
~~~~~

::

    data("UKSoccer")

Format
~~~~~~

A 2-dimensional array resulting from cross-tabulating the number of
goals scored in 380 games. The variables and their levels are as
follows:

+------+--------+----------------+
| No   | Name   | Levels         |
+------+--------+----------------+
| 1    | Home   | 0, 1, ..., 4   |
+------+--------+----------------+
| 2    | Away   | 0, 1, ..., 4   |
+------+--------+----------------+

Source
~~~~~~

M. Friendly (2000), Visualizing Categorical Data, page 27.

References
~~~~~~~~~~

A. J. Lee (1997), Modelling scores in the Premier League: Is Manchester
United really the best?, *Chance*, **10**\ (1), 15–19.

M. Friendly (2000), *Visualizing Categorical Data*. SAS Institute, Cary,
NC.

See Also
~~~~~~~~

``Bundesliga``

Examples
~~~~~~~~

::

    data("UKSoccer")
    mosaic(UKSoccer, gp = shading_max, main = "UK Soccer Scores")

