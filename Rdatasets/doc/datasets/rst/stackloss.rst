+-------------+-------------------+
| stackloss   | R Documentation   |
+-------------+-------------------+

Brownlee's Stack Loss Plant Data
--------------------------------

Description
~~~~~~~~~~~

Operational data of a plant for the oxidation of ammonia to nitric acid.

Usage
~~~~~

::

    stackloss

    stack.x
    stack.loss

Format
~~~~~~

``stackloss`` is a data frame with 21 observations on 4 variables.

[,1]

``Air Flow``

Flow of cooling air

[,2]

``Water Temp``

Cooling Water Inlet Temperature

[,3]

``Acid Conc.``

Concentration of acid [per 1000, minus 500]

[,4]

``stack.loss``

Stack loss

For compatibility with S-PLUS, the data sets ``stack.x``, a matrix with
the first three (independent) variables of the data frame, and
``stack.loss``, the numeric vector giving the fourth (dependent)
variable, are provided as well.

Details
~~~~~~~

“Obtained from 21 days of operation of a plant for the oxidation of
ammonia (NH*3*) to nitric acid (HNO*3*). The nitric oxides produced are
absorbed in a countercurrent absorption tower”. (Brownlee, cited by
Dodge, slightly reformatted by MM.)

``Air Flow`` represents the rate of operation of the plant.
``Water Temp`` is the temperature of cooling water circulated through
coils in the absorption tower. ``Acid Conc.`` is the concentration of
the acid circulating, minus 50, times 10: that is, 89 corresponds to
58.9 per cent acid. ``stack.loss`` (the dependent variable) is 10 times
the percentage of the ingoing ammonia to the plant that escapes from the
absorption column unabsorbed; that is, an (inverse) measure of the
over-all efficiency of the plant.

Source
~~~~~~

Brownlee, K. A. (1960, 2nd ed. 1965) *Statistical Theory and Methodology
in Science and Engineering*. New York: Wiley. pp. 491–500.

References
~~~~~~~~~~

Becker, R. A., Chambers, J. M. and Wilks, A. R. (1988) *The New S
Language*. Wadsworth & Brooks/Cole.

Dodge, Y. (1996) The guinea pig of multiple regression. In: *Robust
Statistics, Data Analysis, and Computer Intensive Methods; In Honor of
Peter Huber's 60th Birthday*, 1996, *Lecture Notes in Statistics*
**109**, Springer-Verlag, New York.

Examples
~~~~~~~~

::

    require(stats)
    summary(lm.stack <- lm(stack.loss ~ stack.x))

