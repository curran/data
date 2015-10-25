+-----------+-------------------+
| chorSub   | R Documentation   |
+-----------+-------------------+

Subset of C-horizon of Kola Data
--------------------------------

Description
~~~~~~~~~~~

This is a small rounded subset of the C-horizon data ``chorizon`` from
package mvoutlier.

Usage
~~~~~

::

    data(chorSub)

Format
~~~~~~

A data frame with 61 observations on 10 variables. The variables contain
scaled concentrations of chemical elements.

Details
~~~~~~~

This data set was produced from ``chorizon`` via these statements:

::

        data(chorizon, package = "mvoutlier")
        chorSub <- round(100*scale(chorizon[,101:110]))[190:250,]
        storage.mode(chorSub) <- "integer"
        colnames(chorSub) <- gsub("_.*", '', colnames(chorSub))
      

Source
~~~~~~

Kola Project (1993-1998)

See Also
~~~~~~~~

``chorizon`` in package mvoutlier and other Kola data in the same
package.

Examples
~~~~~~~~

::

    data(chorSub)
    summary(chorSub)
    pairs(chorSub, gap= .1)# some outliers

