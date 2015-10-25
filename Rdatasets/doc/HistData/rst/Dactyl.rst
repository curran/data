+----------+-------------------+
| Dactyl   | R Documentation   |
+----------+-------------------+

Edgeworth's counts of dactyls in Virgil's Aeneid
------------------------------------------------

Description
~~~~~~~~~~~

Edgeworth (1885) took the first 75 lines in Book XI of Virgil's *Aeneid*
and classified each of the first four "feet" of the line as a dactyl
(one long syllable followed by two short ones) or not.

Grouping the lines in blocks of five gave a 4 x 25 table of counts,
represented here as a data frame with ordered factors, ``Foot`` and
``Lines``. Edgeworth used this table in what was among the first
examples of analysis of variance applied to a two-way classification.

Usage
~~~~~

::

    data(Dactyl)

Format
~~~~~~

A data frame with 60 observations on the following 3 variables.

``Foot``
    an ordered factor with levels ``1`` < ``2`` < ``3`` < ``4``

``Lines``
    an ordered factor with levels ``1:5`` < ``6:10`` < ``11:15`` <
    ``16:20`` < ``21:25`` < ``26:30`` < ``31:35`` < ``36:40`` <
    ``41:45`` < ``46:50`` < ``51:55`` < ``56:60`` < ``61:65`` <
    ``66:70`` < ``71:75``

``count``
    number of dactyls

Source
~~~~~~

Stigler, S. (1999) *Statistics on the Table* Cambridge, MA: Harvard
University Press, table 5.1.

References
~~~~~~~~~~

Edgeworth, F. Y. (1885). On methods of ascertaining variations in the
rate of births, deaths and marriages. *Journal of the [Royal]
Statistical Society*, 48, 628-649.

Examples
~~~~~~~~

::

    data(Dactyl)

    # display the basic table
    xtabs(count ~ Foot+Lines, data=Dactyl)

    # simple two-way anova
    anova(dact.lm <- lm(count ~ Foot+Lines, data=Dactyl))

    # plot the lm-quartet
    op <- par(mfrow=c(2,2))
    plot(dact.lm)
    par(op)

    # show table as a simple mosaicplot
    mosaicplot(xtabs(count ~ Foot+Lines, data=Dactyl), shade=TRUE)

