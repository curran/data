+------------+-------------------+
| VADeaths   | R Documentation   |
+------------+-------------------+

Death Rates in Virginia (1940)
------------------------------

Description
~~~~~~~~~~~

Death rates per 1000 in Virginia in 1940.

Usage
~~~~~

::

    VADeaths

Format
~~~~~~

A matrix with 5 rows and 4 columns.

Details
~~~~~~~

The death rates are measured per 1000 population per year. They are
cross-classified by age group (rows) and population group (columns). The
age groups are: 50–54, 55–59, 60–64, 65–69, 70–74 and the population
groups are Rural/Male, Rural/Female, Urban/Male and Urban/Female.

This provides a rather nice 3-way analysis of variance example.

Source
~~~~~~

Molyneaux, L., Gilliam, S. K., and Florant, L. C.(1947) Differences in
Virginia death rates by color, sex, age, and rural or urban residence.
*American Sociological Review*, **12**, 525–535.

References
~~~~~~~~~~

McNeil, D. R. (1977) *Interactive Data Analysis*. Wiley.

Examples
~~~~~~~~

::

    require(stats); require(graphics)
    n <- length(dr <- c(VADeaths))
    nam <- names(VADeaths)
    d.VAD <- data.frame(
     Drate = dr,
     age = rep(ordered(rownames(VADeaths)), length.out = n),
     gender = gl(2, 5, n, labels = c("M", "F")),
     site =  gl(2, 10, labels = c("rural", "urban")))
    coplot(Drate ~ as.numeric(age) | gender * site, data = d.VAD,
           panel = panel.smooth, xlab = "VADeaths data - Given: gender")
    summary(aov.VAD <- aov(Drate ~ .^2, data = d.VAD))
    opar <- par(mfrow = c(2, 2), oma = c(0, 0, 1.1, 0))
    plot(aov.VAD)
    par(opar)

