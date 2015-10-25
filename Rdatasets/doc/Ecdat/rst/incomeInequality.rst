+--------------------+-------------------+
| incomeInequality   | R Documentation   |
+--------------------+-------------------+

Income Inequality in the US
---------------------------

Description
~~~~~~~~~~~

Data on quantiles of the distributions of family incomes in the United
States. This combines three data sources:

(1) US Census Table F-1 for the central quantiles

(2) Piketty and Saez for the 95th and higher quantiles

(3) Gross Domestic Product and implicit price deflators from
`MeasuringWorth.com <http://MeasuringWorth.com>`__

Usage
~~~~~

::

    data(incomeInequality)

Format
~~~~~~

A ``data.frame`` containing:

Year
    numeric year 1947:2012

Number.thousands
    number of families in the US

quintile1, quintile2, median, quintile3, quintile4, p95
    quintile1, quintile2, quintile3, quintile4, and p95 are the
    indicated quantiles of the distribution of family income from US
    Census Table F-1. The media is computed as the geometric mean of
    quintile2 and quintile3. This is accurate to the extent that the
    lognormal distribution adequately approximates the central 20
    percent of the income distribution, which it should for most
    practical purposes.

P90, P95, P99, P99.5, P99.9, P99.99
    The indicated quantiles of family income per Piketty and Saez

realGDP.M, GDP.Deflator, PopulationK, realGDPperCap
    real GDP in millions, GDP implicit price deflators, US population in
    thousands, and real GDP per capita, according to
    `MeasuringWorth.com <http://MeasuringWorth.com>`__.

P95IRSvsCensus
    ratio of the estimates of the 95th percentile of distributions of
    family income from the Piketty and Saez analyis of data from the
    Internal Revenue Service (IRS) and from the US Census Bureau.

    The IRS has ranged between 72 and 98 percent of the Census Bureau
    figures for the 95th percentile of the distribution, with this ratio
    averaging around 75 percent since the late 1980s. However, this
    systematic bias is modest relative to the differences between the
    different quantiles of interest in this combined dataset.

personsPerFamily
    average number of persons per family using the number of families
    from US Census Table F-1 and the population from
    `MeasuringWorth.com <http://MeasuringWorth.com>`__.

realGDPperFamily
    ``personsPerFamily * realGDPperCap``

mean.median
    ratio of realGDPperFamily to the median. This is a measure of
    skewness and income inequality.

Details
~~~~~~~

For details on how this ``data.frame`` was created, see
"F1.PikettySaez.R" in ``system.file('scripts', package='fda')``. This
provides links for files to download and R commands to read those files
and convert them into an updated version of ``incomeInequality``. This
is a reasonable thing to do if it is more than 2 years since
``max(incomeInequality$year)``. All data are in constant 2012 dollars.

Author(s)
~~~~~~~~~

Spencer Graves

Source
~~~~~~

United States Census Bureau, Table F-1. Income Limits for Each Fifth and
Top 5 Percent of Families, All Races,
`http://www.census.gov/hhes/www/income/data/historical/families <http://www.census.gov/hhes/www/income/data/historical/families>`__,
accessed March 25, 2014.

Thomas Piketty and Emmanuel Saez (2003) "Income Inequality in the United
States, 1913-1998", Quarterly Journal of Economics, 118(1) 1-39,
`http://elsa.berkeley.edu/~saez <http://elsa.berkeley.edu/~saez>`__,
update accessed February 28, 2014.

Louis Johnston and Samuel H. Williamson (2011) "What Was the U.S. GDP
Then?" MeasuringWorth,
`http://www.measuringworth.org/usgdp <http://www.measuringworth.org/usgdp>`__,
accessed February 28, 2014.

Examples
~~~~~~~~

::

    ##
    ## Rato of IRS to census estimates for the 95th percentile
    ##
    data(incomeInequality)
    plot(P95IRSvsCensus~Year, incomeInequality, type='b')
    # starts ~0.74, trends rapidly up to ~0.97,
    # then drifts back to ~0.75
    abline(h=0.75)
    abline(v=1989)
    # check
    sum(is.na(incomeInequality$P95IRSvsCensus))
    # The Census data runs to 2011;  Pikety and Saez runs to 2010.
    quantile(incomeInequality$P95IRSvsCensus, na.rm=TRUE)
    # 0.72 ... 0.98

    ##
    ## Persons per Family
    ##

    plot(personsPerFamily~Year, incomeInequality, type='b')
    quantile(incomeInequality$personsPerFamily)
    # ranges from 3.72 to 4.01 with median 3.84
    #  -- almost 4

    ##
    ## GDP per family
    ##
    plot(realGDPperFamily~Year, incomeInequality, type='b', log='y')

    ##
    ## Plot the mean then the first quintile, then the median,
    ##            99th, 99.9th and 99.99th percentiles
    ##
    plotCols <- c(21, 3, 5, 11, 13:14)
    kcols <- length(plotCols)
    plotColors <- c(1:6, 8:13)[1:kcols] # omit 7=yellow
    plotLty <- 1:kcols

    matplot(incomeInequality$Year, incomeInequality[plotCols]/1000,
            log='y', type='l', col=plotColors, lty=plotLty)

    #*** Growth broadly shared 1947 - 1970, then began diverging
    #*** The divergence has been most pronouced among the top 1%
    #*** and especially the top 0.01%

    ##
    ## Growth rate by quantile 1947-1970 and 1970 - present
    ##
    keyYears <- c(1947, 1970, 2010)
    (iYears <- which(is.element(incomeInequality$Year, keyYears)))

    (dYears <- diff(keyYears))
    kk <- length(keyYears)
    (lblYrs <- paste(keyYears[-kk], keyYears[-1], sep='-'))

    (growth <- sapply(incomeInequality[iYears,], function(x, labels=lblYrs){
        dxi <- exp(diff(log(x)))
        names(dxi) <- labels
        dxi
    } ))

    # as percent
    (gr <- round(100*(growth-1), 1))

    # The average annual income (realGDPperFamily) doubled between
    # 1970 and 2010 (increased by 101 percent), while the median household
    # income increased only 23 percent.

    ##
    ## Income lost by each quantile 1970-2010
    ## relative to the broadly shared growth 1947-1970
    ##
    (lostGrowth <- (growth[, 'realGDPperFamily']-growth[, plotCols]))
    # 1947-1970:  The median gained 20% relative to the mean,
    #           while the top 1% lost ground
    # 1970-2010:  The median lost 79%, the 99th percentile lost 29%,
    #           while the top 0.1% gained

    (lostIncome <- (lostGrowth[2, ] *
                    incomeInequality[iYears[2], plotCols]))
    # The median family lost $39,000 per year in income
    # relative to what they would have with the same economic growth
    # broadly shared as during 1947-1970.
    # That's slightly over $36,500 per year = $100 per day

    (grYr <- growth^(1/dYears))
    (grYr. <- round(100*(grYr-1), 1))

    ##
    ## Regression line:  linear spline
    ##

    (varyg <- c(3:14, 21))
    Varyg <- names(incomeInequality)[varyg]
    str(F01ps <- reshape(incomeInequality[c(1, varyg)], idvar='Year',
                         ids=F1.PikettySeaz$Year,
                         times=Varyg, timevar='pctile',
                         varying=list(Varyg), direction='long'))
    names(F01ps)[2:3] <- c('variable', 'value')
    F01ps$variable <- factor(F01ps$variable)

    # linear spline basis function with knot at 1970
    F01ps$t1970p <- pmax(0, F01ps$Year-1970)

    table(nas <- is.na(F01ps$value))
    # 6 NAs, one each of the Piketty-Saez variables in 2011
    F01i <- F01ps[!nas, ]

    # formula:
    # log(value/1000) ~ b*Year + (for each variable:
    #     different intercept + (different slope after 1970))

    Fit <- lm(log(value/1000)~Year+variable*t1970p, F01i)
    anova(Fit)
    # all highly significant
    # The residuals may show problems with the model,
    # but we will ignore those for now.

    # Model predictions
    str(Pred <- predict(Fit))

    ##
    ## Combined plot
    ##
    #  Plot to a file?  Wikimedia Commons prefers svg format.
    svg('incomeInequality8.svg')
    #  If you want software to convert svg to another format such as png,
    #  consider GIMP (www.gimp.org).

    #  Base plot

    # Leave extra space on the right to label with growth since 1970
    op <- par(mar=c(5, 4, 4, 5)+0.1)

    matplot(incomeInequality$Year, incomeInequality[plotCols]/1000,
            log='y', type='l', col=plotColors, lty=plotLty,
            xlab='', ylab='', las=1, axes=FALSE, lwd=3)
    axis(1, at=seq(1950, 2010, 10),
         labels=c(1950, NA, 1970, NA, 1990, NA, 2010), cex.axis=1.5)
    yat <- c(10, 50, 100, 500, 1000, 5000, 10000)
    axis(2, yat, labels=c('$10K', '$50K', '$100K', '$500K',
                 '$1M', '$5M', '$10M'), las=1, cex.axis=1.2)

    #  Label the lines
    pctls <- paste(c(20, 40, 50, 60, 80, 90, 95, 99, 99.5, 99.9, 99.99),
                  '%', sep='')
    lineLbl0 <- c('Year', 'families K', pctls,
         'realGDP.M', 'GDP deflator', 'pop-K', 'realGDPperFamily',
         '95 pct(IRS / Census)', 'size of household',
         'average family income', 'mean/median')
    (lineLbls <- lineLbl0[plotCols])
    sel75 <- (incomeInequality$Year==1975)

    laby <- incomeInequality[sel75, plotCols]/1000

    text(1973.5, c(1.2, 1.2, 1.3, 1.5, 1.9)*laby[-1], lineLbls[-1], cex=1.2)
    text(1973.5, 1.2*laby[1], lineLbls[1], cex=1.2, srt=10)

    ##
    ## Add lines + points for the knots in 1970
    ##
    End <- numeric(kcols)
    F01names <- names(incomeInequality)
    for(i in seq(length=kcols)){
      seli <- (as.character(F01i$variable) == F01names[plotCols[i]])
    #  with(F01i[seli, ], lines(Year, exp(Pred[seli]), col=plotColors[i]))
      yri <- F01i$Year[seli]
      predi <- exp(Pred[seli])
      lines(yri, predi, col=plotColors[i])
      End[i] <- predi[length(predi)]
      sel70i <- (yri==1970)
      points(yri[sel70i], predi[sel70i], col=plotColors[i])
    }

    ##
    ##  label growth rates
    ##
    table(sel70. <- (incomeInequality$Year>1969))
    (lastYrs <- incomeInequality[sel70., 'Year'])
    (lastYr. <- max(lastYrs)+4)
    #text(lastYr., End, gR., xpd=NA)
    text(lastYr., End, paste(gr[2, plotCols], '%', sep=''), xpd=NA)
    text(lastYr.+7, End, paste(grYr.[2, plotCols], '%', sep=''), xpd=NA)

    ##
    ##  Label the presidents
    ##
    abline(v=c(1953, 1961, 1969, 1977, 1981, 1989, 1993, 2001, 2009))
    (m99.95 <- with(incomeInequality, sqrt(P99.9*P99.99))/1000)

    text(1949, 5000, 'Truman')
    text(1956.8, 5000, 'Eisenhower', srt=90)
    text(1963, 5000, 'Kennedy', srt=90)
    text(1966.8, 5000, 'Johnson', srt=90)
    text(1971, 5*m99.95[24], 'Nixon', srt=90)
    text(1975, 5*m99.95[28], 'Ford', srt=90)
    text(1978.5, 5*m99.95[32], 'Carter', srt=90)
    text(1985.1, m99.95[38], 'Reagan' )
    text(1991, 0.94*m99.95[44], 'GHW Bush', srt=90)
    text(1997, m99.95[50], 'Clinton')
    text(2005, 1.1*m99.95[58], 'GW Bush', srt=90)
    text(2010, 1.2*m99.95[62], 'Obama', srt=90)
    ##
    ##  Done
    ##
    par(op) # reset margins

    dev.off() # for plot to a file

