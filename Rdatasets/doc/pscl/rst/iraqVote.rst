+------------+-------------------+
| iraqVote   | R Documentation   |
+------------+-------------------+

U.S. Senate vote on the use of force against Iraq, 2002.
--------------------------------------------------------

Description
~~~~~~~~~~~

On October 11, 2002, the United States Senate voted 77-23 to authorize
the use of military force against Iraq. This data set lists the “Ayes”
and “Nays” for each Senator and some covariates.

Usage
~~~~~

::

    data(iraqVote)

Format
~~~~~~

A data frame with 100 observations on the following 6 variables.

``y``
    a numeric vector, the recorded vote (1 if Aye, 0 if Nay)

``state.abb``
    two letter abbreviation for each state

``name``
    senator name, party and state, e.g., ``AKAKA (D HI)``

``rep``
    logical, ``TRUE`` for Republican senators

``state.name``
    name of state

``gorevote``
    numeric, the vote share recorded by Al Gore in the corresponding
    state in the 2000 Presidential election

Details
~~~~~~~

The only Republican to vote against the resolution was Lincoln Chafee
(Rhode Island); Democrats split 29-22 in favor of the resolution.

Source
~~~~~~

Keith Poole, 107th Senate Roll Call Data.
`ftp://voteview.com/sen107kh.ord <ftp://voteview.com/sen107kh.ord>`__
The Iraq vote is vote number 617.

David Leip's Atlas of U.S. Presidential Elections.
`http://uselectionatlas.org <http://uselectionatlas.org>`__

References
~~~~~~~~~~

Jackman, Simon. 2009. *Bayesian Analysis for the Social Sciences*.
Wiley: Chichester. Example 8.3.

Examples
~~~~~~~~

::

    data(iraqVote)
    ## probit model
    glm1 <- glm(y ~ gorevote + rep,
                data=iraqVote,
                family=binomial(link=probit))

