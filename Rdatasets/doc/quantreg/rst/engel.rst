+---------+-------------------+
| engel   | R Documentation   |
+---------+-------------------+

Engel Data
----------

Description
~~~~~~~~~~~

Engel food expenditure data used in Koenker and Bassett(1982). This is a
regression data set consisting of 235 observations on income and
expenditure on food for Belgian working class households.

Usage
~~~~~

::

    data(engel)

Format
~~~~~~

A data frame containing 235 observations on 2 variables

income
    annual household income in Belgian francs

foodexp
    annual household food expenditure in Belgian francs

References
~~~~~~~~~~

Koenker, R. and Bassett, G (1982) Robust Tests of Heteroscedasticity
based on Regression Quantiles; *Econometrica* **50**, 43–61.

Examples
~~~~~~~~

::

    ## See also    demo("engel1")
    ##             --------------

    data(engel)
    plot(engel, log = "xy",
         main = "'engel' data  (log - log scale)")
    plot(log10(foodexp) ~ log10(income), data = engel,
         main = "'engel' data  (log10 - transformed)")
    taus <- c(.15, .25, .50, .75, .95, .99)
    rqs <- as.list(taus)
    for(i in seq(along = taus)) {
      rqs[[i]] <- rq(log10(foodexp) ~ log10(income), tau = taus[i], data = engel)
      lines(log10(engel$income), fitted(rqs[[i]]), col = i+1)
    }
    legend("bottomright", paste("tau = ", taus), inset = .04,
           col = 2:(length(taus)+1), lty=1)

