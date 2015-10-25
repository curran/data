+--------------+-------------------+
| CoalMiners   | R Documentation   |
+--------------+-------------------+

Breathlessness and Wheeze in Coal Miners
----------------------------------------

Description
~~~~~~~~~~~

Data from Ashford & Sowden (1970) given by Agresti (1990) on the
association between two pulmonary conditions, breathlessness and wheeze,
in a large sample of coal miners who were smokers with no radiological
evidence of pneumoconlosis, aged between 20–64 when examined. This data
is frequently used as an example of fitting models for bivariate, binary
responses.

Usage
~~~~~

::

    data("CoalMiners")

Format
~~~~~~

A 3-dimensional table of size 2 x 2 x 9 resulting from cross-tabulating
variables for 18,282 coal miners. The variables and their levels are as
follows:

+------+------------------+-----------------------------------+
| No   | Name             | Levels                            |
+------+------------------+-----------------------------------+
| 1    | Breathlessness   | B, NoB                            |
+------+------------------+-----------------------------------+
| 2    | Wheeze           | W, NoW                            |
+------+------------------+-----------------------------------+
| 3    | Age              | 20-24, 25-29, 30-34, ..., 60-64   |
+------+------------------+-----------------------------------+

Details
~~~~~~~

In an earlier version of this data set, the first group, aged 20-24, was
inadvertently omitted from this data table and the breathlessness
variable was called wheeze and vice versa.

Source
~~~~~~

Michael Friendly (2000), Visualizing Categorical Data, pages 82–83,
319–322.

References
~~~~~~~~~~

A. Agresti (1990), *Categorical Data Analysis*. Wiley-Interscience, New
York, Table 7.11, p. 237

J. R. Ashford and R. D. Sowdon (1970), Multivariate probit analysis,
*Biometrics*, **26**, 535–546.

M. Friendly (2000), *Visualizing Categorical Data*. SAS Institute, Cary,
NC.

Examples
~~~~~~~~

::

    data("CoalMiners")

    ftable(CoalMiners, row.vars = 3)

    ## Fourfold display, both margins equated
    fourfold(CoalMiners[,,2:9], mfcol = c(2,4))

    ## Fourfold display, strata equated
    fourfold(CoalMiners[,,2:9], std = "ind.max", mfcol = c(2,4))


    ## Log Odds Ratio Plot
    summary(l <- oddsratio(CoalMiners[,,2:9]))
    age <- seq(25, 60, by = 5)
    plot(l,
         xlab = "Age Group",
         main = "Breathlessness and Wheeze in Coal Miners")
    m <- lm(l ~ age + I(age^2))
    lines(fitted(m), col = "red", lwd=2)

