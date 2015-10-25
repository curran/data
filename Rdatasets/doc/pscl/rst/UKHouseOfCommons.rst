+--------------------+-------------------+
| UKHouseOfCommons   | R Documentation   |
+--------------------+-------------------+

1992 United Kingdom electoral returns
-------------------------------------

Description
~~~~~~~~~~~

Electoral returns, selected constituencies, 1992 general election for
the British House of Commons

Usage
~~~~~

::

    data(UKHouseOfCommons)

Format
~~~~~~

A data frame with 521 observations on the following 12 variables.

``constituency``
    a character vector, name of the House of Commons constituency

``county``
    a character vector, county of the House of Commons constituency

``y1``
    a numeric vector, log-odds of Conservative to LibDem vote share

``y2``
    a numeric vector, log-odds of Labor to LibDem vote share

``y1lag``
    a numeric vector, ``y1`` from previous election

``y2lag``
    a numeric vector, ``y2`` from previous election

``coninc``
    a numeric vector, 1 if the incumbent is a Conservative, 0 otherwise

``labinc``
    a numeric vector, 1 if the incumbent is from the Labor Party, 0
    otherwise

``libinc``
    a numeric vector, 1 if the incumbent is from the LibDems, 0
    otherwise

``v1``
    a numeric vector, Conservative vote share (proportion of 3 party
    vote)

``v2``
    a numeric vector, Labor vote share (proportion of 3 party vote)

``v3``
    a numeric vector, LibDem vote share (proportion of 3 party vote)

Details
~~~~~~~

These data span only 521 of the 621 seats in the House of Commons at the
time of 1992 election. Seats missing either a Conservative, Labor, or a
LibDem candidate appear to have been dropped.

The original Katz and King data set does not have case labels. I used
matches to an additional data source to recover a set of constituency
labels for these data; labels could not recovered for two of the
constituencies.

Source
~~~~~~

Jonathan Katz; Gary King. 1999. "Replication data for: A Statistical
Model of Multiparty Electoral Data",
`http://hdl.handle.net/1902.1/QIGTWZYTLZ <http://hdl.handle.net/1902.1/QIGTWZYTLZ>`__

Martin Baxter.
`http://www.electoralcalculus.co.uk/electdata\_1992ob.txt <http://www.electoralcalculus.co.uk/electdata_1992ob.txt>`__

References
~~~~~~~~~~

Katz, Jonathan and Gary King. 1999. “A Statistical Model for Multiparty
Electoral Data”. *American Political Science Review*. 93(1): 15-32.

Jackman, Simon. 2009. *Bayesian Analysis for the Social Sciences*.
Wiley: Chichester. Example 6.9.

Examples
~~~~~~~~

::

    data(UKHouseOfCommons)
    tmp <- UKHouseOfCommons[,c("v1","v2","v3")] 
    summary(apply(tmp,1,sum))

    col <- rep("black",dim(tmp)[1])
    col[UKHouseOfCommons$coninc==1] <- "blue"
    col[UKHouseOfCommons$labinc==1] <- "red"
    col[UKHouseOfCommons$libinc==1] <- "orange"

    library(vcd)
    vcd::ternaryplot(tmp,
                     dimnames=c("Cons","Lab","Lib-Dem"),
                     labels="outside",
                     col=col,
                     pch=1,
                     main="1992 UK House of Commons Election",
                     cex=.75)

