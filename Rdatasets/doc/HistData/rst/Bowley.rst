+----------+-------------------+
| Bowley   | R Documentation   |
+----------+-------------------+

Bowley's data on values of British and Irish trade, 1855-1899
-------------------------------------------------------------

Description
~~~~~~~~~~~

In one of the first statistical textbooks, Arthur Bowley (1901) used
these data to illustrate an arithmetic and graphical analysis of
time-series data using the total value of British and Irish exports from
1855-1899. He presented a line graph of the time-series data,
supplemented by overlaid line graphs of 3-, 5- and 10-year moving
averages. His goal was to show that while the initial series showed wide
variability, moving averages made the series progressively smoother.

Usage
~~~~~

::

    data(Bowley)

Format
~~~~~~

A data frame with 45 observations on the following 2 variables.

``Year``
    Year, from 1855-1899

``Value``
    total value of British and Irish exports (millions of Pounds)

Source
~~~~~~

Bowley, A. L. (1901). *Elements of Statistics*. London: P. S. King and
Son, p. 151-154.

Digitized from Bowley's graph.

Examples
~~~~~~~~

::

    data(Bowley)

    # plot the data 
    with(Bowley,plot(Year, Value, type='b', 
        ylab="Value of British and Irish Exports",
        main="Bowley's example of the method of smoothing curves"))

    # find moving averages-- use center alignment (requires width=ODD)
    require(gtools, warn.conflicts=FALSE)
    mav3<-running(Bowley$Value, width=3, align="center")
    mav5<-running(Bowley$Value, width=5, align="center")
    mav9<-running(Bowley$Value, width=9, align="center")
    lines(Bowley$Year[2:44], mav3, col='blue', lty=2)
    lines(Bowley$Year[3:43], mav5, col='green3', lty=3)
    lines(Bowley$Year[5:41], mav9, col='brown', lty=4)

    # add lowess smooth
    lines(lowess(Bowley), col='red', lwd=2)

    require(ggplot2, warn.conflicts=FALSE)
    qplot(Year,Value, data=Bowley)+geom_smooth()

