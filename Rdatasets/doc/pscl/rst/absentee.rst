+------------+-------------------+
| absentee   | R Documentation   |
+------------+-------------------+

Absentee and Machine Ballots in Pennsylvania State Senate Races
---------------------------------------------------------------

Description
~~~~~~~~~~~

Absentee ballot outcomes contrasted with machine ballots, cast in
Pennsylvania State Senate elections, selected districts, 1982-1993.

Usage
~~~~~

::

    data(absentee)

Format
~~~~~~

A data frame with 22 observations on the following 8 variables.

``year``
    a numeric vector, year of election, 19xx

``district``
    a numeric vector, Pennsylvania State Senate district

``absdem``
    a numeric vector, absentee ballots cast for the Democratic candidate

``absrep``
    a numeric vector, absentee ballots cast for the Republican candidate

``machdem``
    a numeric vector, votes cast on voting machines for the Democratic
    candidate

``machrep``
    a numeric vector, votes cast on voting machines for the Republican
    candidate

``dabs``
    a numeric vector, Democratic margin among absentee ballots

``dmach``
    a numeric vector, Democratic margin among ballots case on voting
    machines

Details
~~~~~~~

In November 1993, the state of Pennsylvania conducted elections for its
state legislature. The result in the Senate election in the 2nd district
(based in Philadelphia) was challenged in court, and ultimately
overturned. The Democratic candidate won 19,127 of the votes cast by
voting machine, while the Republican won 19,691 votes cast by voting
machine, giving the Republican a lead of 564 votes. However, the
Democrat won 1,396 absentee ballots, while the Republican won just 371
absentee ballots, more than offsetting the Republican lead based on the
votes recorded by machines on election day. The Republican candidate
sued, claiming that many of the absentee ballots were fraudulent. The
judge in the case solicited expert analysis from Orley Ashenfelter, an
economist at Princeton University. Ashenfelter examined the relationship
between absentee vote margins and machine vote margins in 21 previous
Pennsylvania Senate elections in seven districts in the Philadelphia
area over the preceding decade.

Source
~~~~~~

Ashenfelter, Orley. 1994. Report on Expected Asbentee Ballots.
Typescript. Department of Economics, Princeton University.

References
~~~~~~~~~~

Ashenfelter, Orley, Phillip Levine and David Zimmerman. 2003.
*Statistics and Econometrics: Methods and Applications*. New York: John
Wiley and Sons.

Jackman, Simon. 2009. *Bayesian Analysis for the Social Sciences*.
Wiley: Hoboken, New Jersey. Examples 2.13, 2.14, 2.15.

Examples
~~~~~~~~

::

    data(absentee)
    summary(absentee)

    denom <- absentee$absdem + absentee$absrep
    y <- (absentee$absdem - absentee$absrep)/denom * 100
    denom <- absentee$machdem + absentee$machrep
    x <- (absentee$machdem - absentee$machrep)/denom *100

    ols <- lm(y ~ x,
              subset=c(rep(TRUE,21),FALSE)  ## drop data point 22
              )

    ## predictions for disputed absentee point
    yhat22 <- predict(ols,
                      newdata=list(x=x[22]),
                      se.fit=TRUE,
                      interval="prediction")
    tstat <- (y[22]-yhat22$fit[,"fit"])/yhat22$se.fit
    cat("tstat on actual outcome for obs 22:",tstat,"\n")
    cat(paste("Pr(t>",round(tstat,2),") i.e., one-sided:\n",sep=""))
    cat(1-pt(tstat,df=yhat22$df),"\n")

    ## make a picture
    xseq <- seq(min(x)-.1*diff(range(x)),
                max(x)+.1*diff(range(x)),
                length=100)
    yhat <- predict(ols,interval="prediction",
                    newdata=list(x=xseq))
    plot(y~x,
         type="n",
         axes=FALSE,
         ylim=range(yhat,y),
         xlim=range(xseq),xaxs="i",
         xlab="Democratic Margin, Machine Ballots (Percentage Points)",
         ylab="Democratic Margin, Absentee Ballots (Percentage Points)")
    polygon(x=c(xseq,rev(xseq)),  ## overlay 95% prediction CI
            y=c(yhat[,"lwr"],rev(yhat[,"upr"])),
            border=FALSE,
            col=gray(.85))
    abline(ols,lwd=2)           ## overlay ols
    points(x[-22],y[-22],pch=1) ## data
    points(x[22],y[22],pch=16)  ## disputed data point

    text(x[22],y[22],
         "Disputed\nElection",
         cex=.75,
         adj=1.25)
    axis(1)
    axis(2)

