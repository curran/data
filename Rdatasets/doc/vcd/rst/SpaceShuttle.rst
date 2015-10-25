+----------------+-------------------+
| SpaceShuttle   | R Documentation   |
+----------------+-------------------+

Space Shuttle O-ring Failures
-----------------------------

Description
~~~~~~~~~~~

Data from Dalal et al. (1989) about O-ring failures in the NASA space
shuttle program. The damage index comes from a discussion of the data by
Tufte (1997).

Usage
~~~~~

::

    data("SpaceShuttle")

Format
~~~~~~

A data frame with 24 observations and 6 variables.

FlightNumber
    Number of space shuttle flight.

Temperature
    temperature during start (in degrees F).

Pressure
    pressure.

Fail
    did any O-ring failures occur? (no, yes).

nFailures
    how many (of six) 0-rings failed?.

Damage
    damage index.

Source
~~~~~~

Michael Friendly (2000), Visualizing Categorical Data:
`http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/orings.sas <http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/orings.sas>`__

References
~~~~~~~~~~

S. Dalal, E. B. Fowlkes, B. Hoadly (1989), Risk analysis of the space
shuttle: Pre-Challenger prediction of failure, *Journal of the American
Statistical Association*, **84**, 945–957.

E. R. Tufte (1997), *Visual Explanations: Images and Quantities,
Evidence and Narrative*. Graphics Press, Cheshire, CT.

M. Friendly (2000), *Visualizing Categorical Data*. SAS Institute, Cary,
NC.

Examples
~~~~~~~~

::

    data("SpaceShuttle")
    plot(nFailures/6 ~ Temperature, data = SpaceShuttle,
         xlim = c(30, 81), ylim = c(0,1),
         main = "NASA Space Shuttle O-Ring Failures",
         ylab = "Estimated failure probability",
         pch = 19, col = 4)
    fm <- glm(cbind(nFailures, 6 - nFailures) ~ Temperature,
              data = SpaceShuttle,
              family = binomial)
    lines(30 : 81,
          predict(fm, data.frame(Temperature = 30 : 81), type = "re"),
          lwd = 2)
    abline(v = 31, lty = 3)

