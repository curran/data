+-----------------------------+-------------------+
| AustralianElectionPolling   | R Documentation   |
+-----------------------------+-------------------+

Political opinion polls in Australia, 2004-07
---------------------------------------------

Description
~~~~~~~~~~~

The results of 239 published opinion polls measuring vote intentions
(1st preference vote intention in a House of Representatives election)
between the 2004 and 2007 Australian Federal elections, from 4 survey
houses.

Usage
~~~~~

::

    data(AustralianElectionPolling)

Format
~~~~~~

A data frame with 239 observations on the following 14 variables.

``ALP``
    a numeric vector, percentage of respondents reported as intending to
    vote for the Australian Labor Party

``Lib``
    a numeric vector, percentage of respondents reported as intending to
    vote for the Liberal Party

``Nat``
    a numeric vector, percentage of respondents reported as intending to
    vote for the National Party

``Green``
    a numeric vector, percentage of respondents reported as intending to
    vote for the Greens

``FamilyFirst``
    a numeric vector, percentage of respondents reported as intending to
    vote for the Family First party

``Dems``
    a numeric vector, percentage of respondents reported as intending to
    vote for the Australian Democrats

``OneNation``
    a numeric vector, percentage of respondents reported as intending to
    vote for One Nation

``DK``
    a numeric vector, percentage of respondents reported as expressing
    no preference or a “don't know” response

``sampleSize``
    a numeric vector, reported sample size of the poll

``org``
    a factor with levels ``Galaxy``, ``Morgan, F2F``, ``Newspoll``,
    ``Nielsen`` and ``Morgan, Phone``, indicating the survey house
    and/or mode of the poll

``startDate``
    a Date, reported start of the field period

``endDate``
    a Date, reported end of the field period

``source``
    a character vector, source of the poll report

``remark``
    a character vector, remarks noted by author and/or research
    assistant coders

Details
~~~~~~~

Morgan uses two modes: phone and face-to-face.

The 2004 Australian election was on October 9; the ALP won 37.6% of the
1st preferences cast in elections for the House of Representatives. The
ALP won the 2007 election (November 24) with 43.4% of 1st preferences.

The ALP changed leaders twice in the 2004-07 inter-election period
spanned by these data: (1) Mark Latham resigned the ALP leadership on
January 18 2005 and was replaced by Kim Beazley; (2) Beazley lost the
ALP leadership to Kevin Rudd on December 4, 2006.

The then Prime Minister, John Howard, announced the November 2007
election on October 14, 2007.

Source
~~~~~~

See the ``source`` variable. Andrea Abel assisted with the data
collection.

References
~~~~~~~~~~

Jackman, Simon. 2009. *Bayesian Analysis for the Social Sciences*.
Wiley: Hoboken, New Jersey. Example 9.3.

Examples
~~~~~~~~

::

    data(AustralianElectionPolling)
    xyplot(ALP ~ startDate | org, 
           data=AustralianElectionPolling,
           layout=c(1,5),
           type="b",
           xlab="Start Date",
           ylab="ALP")

    ## test for house effects
    library(gam)
    y <- AustralianElectionPolling$ALP/100
    v <- y*(1-y)/AustralianElectionPolling$sampleSize
    w <- 1/v
    m1 <- gam(y ~ lo(startDate,span=1/10),
              weight=w,       
              data=AustralianElectionPolling)
    m2 <- update(m1, ~ . + org)
    anova(m1,m2)

