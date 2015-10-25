+----------------------+-------------------+
| politicalKnowledge   | R Documentation   |
+----------------------+-------------------+

Political knowledge in the US and Europe
----------------------------------------

Description
~~~~~~~~~~~

Data from McChesney and Nichols (2010) on domestic and international
knowledge in Denmark, Finland, the UK and the US among college
graduates, people with some college, and roughly 12th grade only.

Usage
~~~~~

::

    data(politicalKnowledge)

Format
~~~~~~

A ``data.frame`` containing 12 columns and 4 rows.

country
    a ``factor`` of Denmark, Finland, UK, and US, being the four
    countries comparied in this data set.

DomesticKnowledge.hs, DomesticKnowledge.sc, DomesticKnowledge.c
    percent correct answers to calibrated questions regarding knowledge
    of prominent items in domestic news in a survey of residents of the
    four countries among college graduates (ending ".c"), some college
    (".sc") and high school ("hs"). Source: McChesney and Nichols (2010,
    chapter 1, chart 8).

InternationalKnowledge.hs, InternationalKnowledge.sc,
InternationalKnowledge.c
    percent correct answers to calibrated questions regarding knowledge
    of prominent items in international news in a survey of residents of
    the four countries by education level as for DomesticKnowledge.
    Source: McChesney and Nichols (2010, chapter 1, chart 7).

PoliticalKnowledge.hs, PoliticalKnowledge.sc, PoliticalKnowledge.c
    average of domestic and international knowledge

PublicMediaPerCapita
    Per capital spending on public media in 2007 in US dollars from
    McChesney and Nichols (2010, chapter 4, chart 1)

PublicMediaRel2US
    Spending on public media relative to the US, being
    ``PublicMediaPerCapita / PublicMediaPerCapita[4]``.

Author(s)
~~~~~~~~~

Spencer Graves

Source
~~~~~~

Robert W. McChesney and John Nichols (2010) *The Death and Life of
American Journalism* (Nation Books)

Examples
~~~~~~~~

::

    ##
    ## 1. Combine first 2 rows 
    ##
    data(politicalKnowledge)
    pk <- politicalKnowledge[-1,]
    pk[1, -1] <- ((politicalKnowledge[1, -1] + 
                     politicalKnowledge[2, -1])/2)
    pk[1, 'country'] <- 'DK-FI'

    ##
    ## 2.  plot
    ##
    xlim <- range(pk[, 'PublicMediaPerCapita'])
    ylim <- 100*range(pk[2:7])
    text.cex <- 2

    # to label the lines 
    (US.UK <- (pk[2, -1]+pk[3, -1])/2)

    #png('Knowledge v. public media.png')
    op <- par(mar=c(5, 7, 4, 2)+.1)
    plot(c(0, 110), 100*ylim, type='n', axes=FALSE,
         xlab='public media $ per capita',
         ylab='Political Knowledge\n(% of standard questions)',
         cex.lab=2)
    axis(1, cex.axis=2)
    axis(2, las=2, cex.axis=2)
    with(pk, text(PublicMediaPerCapita, 100*PoliticalKnowledge.hs,
                  country, cex=text.cex, xpd=NA, 
                  col=c('forestgreen', 'orange', 'red')))
    with(pk, text(PublicMediaPerCapita, 100*PoliticalKnowledge.sc,
                  country, cex=text.cex, xpd=NA, 
                  col=c('forestgreen', 'orange', 'red')))
    with(pk, text(PublicMediaPerCapita, 100*PoliticalKnowledge.c,
                  country, cex=text.cex, xpd=NA, 
                  col=c('forestgreen', 'orange', 'red')))
    with(pk, lines(PublicMediaPerCapita, 100*PoliticalKnowledge.hs,
                   type='b', pch=' '))
    with(pk, lines(PublicMediaPerCapita, 100*PoliticalKnowledge.sc,
                   type='b', pch=' '))
    with(pk, lines(PublicMediaPerCapita, 100*PoliticalKnowledge.c,
                   type='b', pch=' '))
    with(US.UK, text(PublicMediaPerCapita, 100*PoliticalKnowledge.hs,
                     'High School\nor less', srt=37, cex=1.5))
    with(US.UK, text(PublicMediaPerCapita, 100*PoliticalKnowledge.sc,
                     'some\ncollege', srt=10.5, cex=1.5))
    with(US.UK, text(PublicMediaPerCapita, 100*PoliticalKnowledge.c,
                     "Bachelor's\nor more", srt=-1, cex=1.5))

    par(op)
    #dev.off()

    ##
    ## redo for Wikimedia commons
    ## without English axis labels 
    ## to facilitate multilingual use 
    ##
    #svg('Knowledge v. public media.svg')
    op <- par(mar=c(3,3,2,2)+.1)
    plot(c(0, 110), 100*ylim, type='n', axes=FALSE,
         xlab='', ylab='', cex.lab=2)
    axis(1, cex.axis=2)
    axis(2, las=2, cex.axis=2)
    with(pk, text(PublicMediaPerCapita, 100*PoliticalKnowledge.hs,
                  country, cex=text.cex, xpd=NA, 
                  col=c('forestgreen', 'orange', 'red')))
    with(pk, text(PublicMediaPerCapita, 100*PoliticalKnowledge.sc,
                  country, cex=text.cex, xpd=NA, 
                  col=c('forestgreen', 'orange', 'red')))
    with(pk, text(PublicMediaPerCapita, 100*PoliticalKnowledge.c,
                  country, cex=text.cex, xpd=NA, 
                  col=c('forestgreen', 'orange', 'red')))
    with(pk, lines(PublicMediaPerCapita, 100*PoliticalKnowledge.hs,
                   type='b', pch=' '))
    with(pk, lines(PublicMediaPerCapita, 100*PoliticalKnowledge.sc,
                   type='b', pch=' '))
    with(pk, lines(PublicMediaPerCapita, 100*PoliticalKnowledge.c,
                   type='b', pch=' '))
    par(op)
    #dev.off()

