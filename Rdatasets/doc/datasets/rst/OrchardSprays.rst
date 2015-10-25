+-----------------+-------------------+
| OrchardSprays   | R Documentation   |
+-----------------+-------------------+

Potency of Orchard Sprays
-------------------------

Description
~~~~~~~~~~~

An experiment was conducted to assess the potency of various
constituents of orchard sprays in repelling honeybees, using a Latin
square design.

Usage
~~~~~

::

    OrchardSprays

Format
~~~~~~

A data frame with 64 observations on 4 variables.

+--------+-------------+-----------+------------------------+
| [,1]   | rowpos      | numeric   | Row of the design      |
+--------+-------------+-----------+------------------------+
| [,2]   | colpos      | numeric   | Column of the design   |
+--------+-------------+-----------+------------------------+
| [,3]   | treatment   | factor    | Treatment level        |
+--------+-------------+-----------+------------------------+
| [,4]   | decrease    | numeric   | Response               |
+--------+-------------+-----------+------------------------+

Details
~~~~~~~

Individual cells of dry comb were filled with measured amounts of lime
sulphur emulsion in sucrose solution. Seven different concentrations of
lime sulphur ranging from a concentration of 1/100 to 1/1,562,500 in
successive factors of 1/5 were used as well as a solution containing no
lime sulphur.

The responses for the different solutions were obtained by releasing 100
bees into the chamber for two hours, and then measuring the decrease in
volume of the solutions in the various cells.

An *8 x 8* Latin square design was used and the treatments were coded as
follows:

+-----+--------------------------------------+
| A   | highest level of lime sulphur        |
+-----+--------------------------------------+
| B   | next highest level of lime sulphur   |
+-----+--------------------------------------+
| .   |                                      |
+-----+--------------------------------------+
| .   |                                      |
+-----+--------------------------------------+
| .   |                                      |
+-----+--------------------------------------+
| G   | lowest level of lime sulphur         |
+-----+--------------------------------------+
| H   | no lime sulphur                      |
+-----+--------------------------------------+

Source
~~~~~~

Finney, D. J. (1947) *Probit Analysis*. Cambridge.

References
~~~~~~~~~~

McNeil, D. R. (1977) *Interactive Data Analysis*. New York: Wiley.

Examples
~~~~~~~~

::

    require(graphics)
    pairs(OrchardSprays, main = "OrchardSprays data")

