+---------------+-------------------+
| ToothGrowth   | R Documentation   |
+---------------+-------------------+

The Effect of Vitamin C on Tooth Growth in Guinea Pigs
------------------------------------------------------

Description
~~~~~~~~~~~

The response is the length of odontoblasts (teeth) in each of 10 guinea
pigs at each of three dose levels of Vitamin C (0.5, 1, and 2 mg) with
each of two delivery methods (orange juice or ascorbic acid).

Usage
~~~~~

::

    ToothGrowth

Format
~~~~~~

A data frame with 60 observations on 3 variables.

+--------+--------+-----------+-------------------------------+
| [,1]   | len    | numeric   | Tooth length                  |
+--------+--------+-----------+-------------------------------+
| [,2]   | supp   | factor    | Supplement type (VC or OJ).   |
+--------+--------+-----------+-------------------------------+
| [,3]   | dose   | numeric   | Dose in milligrams.           |
+--------+--------+-----------+-------------------------------+

Source
~~~~~~

C. I. Bliss (1952) *The Statistics of Bioassay*. Academic Press.

References
~~~~~~~~~~

McNeil, D. R. (1977) *Interactive Data Analysis*. New York: Wiley.

Examples
~~~~~~~~

::

    require(graphics)
    coplot(len ~ dose | supp, data = ToothGrowth, panel = panel.smooth,
           xlab = "ToothGrowth data: length vs dose, given type of supplement")

