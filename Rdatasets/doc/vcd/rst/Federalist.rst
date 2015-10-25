+--------------+-------------------+
| Federalist   | R Documentation   |
+--------------+-------------------+

‘May’ in Federalist Papers
--------------------------

Description
~~~~~~~~~~~

Data from Mosteller & Wallace (1984) investigating the use of certain
keywords (‘may’ in this data set) to identify the author of 12 disputed
‘Federalist Papers’ by Alexander Hamilton, John Jay and James Madison.

Usage
~~~~~

::

    data("Federalist")

Format
~~~~~~

A 1-way table giving the number of occurrences of ‘may’ in 262 blocks of
text. The variable and its levels are

No

Name

Levels

1

nMay

0, 1, ..., 6

Source
~~~~~~

Michael Friendly (2000), Visualizing Categorical Data, page 19.

References
~~~~~~~~~~

F. Mosteller & D. L. Wallace (1984), *Applied Bayesian and Classical
Inference: The Case of the Federalist Papers*. Springer-Verlag, New
York, NY.

M. Friendly (2000), *Visualizing Categorical Data*. SAS Institute, Cary,
NC.

Examples
~~~~~~~~

::

    data("Federalist")
    gf <- goodfit(Federalist, type = "nbinomial")
    summary(gf)
    plot(gf)

