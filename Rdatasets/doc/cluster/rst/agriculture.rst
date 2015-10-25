+---------------+-------------------+
| agriculture   | R Documentation   |
+---------------+-------------------+

European Union Agricultural Workforces
--------------------------------------

Description
~~~~~~~~~~~

Gross National Product (GNP) per capita and percentage of the population
working in agriculture for each country belonging to the European Union
in 1993.

Usage
~~~~~

::

    data(agriculture)

Format
~~~~~~

A data frame with 12 observations on 2 variables:

+----------+---------+-----------+-----------------------------+
| [ , 1]   | ``x``   | numeric   | per capita GNP              |
+----------+---------+-----------+-----------------------------+
| [ , 2]   | ``y``   | numeric   | percentage in agriculture   |
+----------+---------+-----------+-----------------------------+

The row names of the data frame indicate the countries.

Details
~~~~~~~

The data seem to show two clusters, the “more agricultural” one
consisting of Greece, Portugal, Spain, and Ireland.

Source
~~~~~~

Eurostat (European Statistical Agency, 1994): *Cijfers en feiten: Een
statistisch portret van de Europese Unie*.

References
~~~~~~~~~~

see those in ``agnes``.

See Also
~~~~~~~~

``agnes``, ``daisy``, ``diana``.

Examples
~~~~~~~~

::

    data(agriculture)

    ## Compute the dissimilarities using Euclidean metric and without
    ## standardization
    daisy(agriculture, metric = "euclidean", stand = FALSE)

    ## 2nd plot is similar to Figure 3 in Struyf et al (1996)
    plot(pam(agriculture, 2))

    ## Plot similar to Figure 7 in Struyf et al (1996)
    ## Not run: plot(agnes(agriculture), ask = TRUE)


    ## Plot similar to Figure 8 in Struyf et al (1996)
    ## Not run: plot(diana(agriculture), ask = TRUE)

