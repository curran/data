+---------------+-------------------+
| RockTheVote   | R Documentation   |
+---------------+-------------------+

Voter turnout experiment, using Rock The Vote ads
-------------------------------------------------

Description
~~~~~~~~~~~

Voter turnout data spanning 85 cable TV systems, randomly allocated to a
voter mobilization experiment targetting 18-19 year olds with "Rock the
Vote" television advertisments

Usage
~~~~~

::

    data(RockTheVote)

Format
~~~~~~

A data frame with 85 observations on the following 6 variables.

``strata``
    numeric, experimental strata

``treated``
    numeric, 1 if a treated cable system, 0 otherwise

``r``
    numeric, number of 18 and 19 year olds turning out

``n``
    numeric, number of 19 and 19 year olds registered

``p``
    numeric, proportion of 18 and 19 year olds turning out

``treatedIndex``
    numeric, a counter indexing the 42 treated units

Details
~~~~~~~

Green and Vavreck (2008) implemented a cluster-randomized experimental
design in assessing the effects of a voter mobilization treatment in the
2004 U.S. Presidential election. The clusters in this design are
geographic areas served by a single cable television system. So as to
facilitate analysis, the researchers restricted their attention to small
cable systems whose reach is limited to a single zip code. Further,
since the experiment was fielded during the last week of the
presidential election, the researchers restricted their search to cable
systems that were not in the 16 hotly-contested “battleground” states
(as designated by the *Los Angeles Times*).

Eighty-five cable systems were available for randomization and were
assigned to treatment after stratification on previous turnout levels in
presidential elections (as determined from analysis of the corresponding
states' voter registration files). Each cable system was matched with
one or sometimes two other cable systems in the same state, yielding 40
strata. Then within each strata, cable systems were randomly assigned to
treatment and control conditions. Strata 3, 8 and 25 have two control
cable systems and 1 treated system each, while strata 6 and 20 have two
treated cable systems and one control system. The remaining 35 strata
have 1 treated cable system and 1 control system. In this way there are
38 + 4 = 42 treated systems, spanning 40 experiment strata.

The treatment involved researchers purchasing prime-time advertising
spots on four channels in the respective cable system in which the
researchers aired voter mobilization ads. The ads were produced by *Rock
the Vote*, targeted at younger voters, and aired four times per night,
per channel, over the last eight days of the election campaign. After
the election, public records were consulted to assemble data on turnout
levels in the treated and control cable systems. In the analysis
reported in Green and Vavreck (2008), the researchers focused on turnout
among registered voters aged 18 and 19 years old.

References
~~~~~~~~~~

Green, Donald P. and Lynn Vavreck. 2008. Analysis of Cluster-Randomized
Experiments: A Comparison of Alternative Estimation Approaches.
*Political Analysis* 16:138-152.

Jackman, Simon, 2009. *Bayesian Analysis for the Social Sciences*.
Wiley: Hoboken, New Jersey. Example 7.9.

Examples
~~~~~~~~

::

    data(RockTheVote)
    ## estimate MLEs of treatment effects
    deltaFunction <- function(data){
      model <- glm(cbind(r,n-r)~treated,
                   data=data,
                   family=binomial)
      c(coef(model)[2],
        confint(model)[2,])
    }


    tmp <- by(RockTheVote,
              as.factor(RockTheVote$strata),
              deltaFunction)

    tmp <- matrix(unlist(tmp),ncol=3,byrow=TRUE)

    indx <- order(tmp[,1])

    plot(y=1:40,
         x=tmp[indx,1],
         pch=16,cex=1.25,
         xlim=range(tmp),
         ylab="",
         axes=FALSE,
         xlab="Estimated Treatment Effect (MLEs, Logit Scale)")
    text(y=1:40,
         x=par()$usr[1],
         pos=4,
         as.character((1:40)[indx]),
         cex=.5)
    segments(x0=tmp[indx,2],
             x1=tmp[indx,3],
             y0=1:40,
             y1=1:40)
    axis(1)
    axis(3)
    abline(v=0)

