+--------------+-------------------+
| Bundesliga   | R Documentation   |
+--------------+-------------------+

Ergebnisse der Fussball-Bundesliga
----------------------------------

Description
~~~~~~~~~~~

Results from the first German soccer league (1963-2008).

Usage
~~~~~

::

    data("Bundesliga")

Format
~~~~~~

A data frame with 14018 observations and 7 variables.

HomeTeam
    factor. Name of the home team.

AwayTeam
    factor. Name of the away team.

HomeGoals
    number of goals scored by the home team.

AwayGoals
    number of goals scored by the away team.

Round
    round of the game.

Year
    year in which the season started.

Date
    starting time of the game (in ``"POSIXct"`` format).

Details
~~~~~~~

The data comprises all games in the first German soccer league since its
foundation in 1963. The data have been queried online from the official
Web page of the DFB and prepared as a data frame in R by Daniel Dekic,
Torsten Hothorn, and Achim Zeileis (replacing earlier versions of the
data in the package containing only subsets of years).

Each year/season comprises 34 rounds (except 1963, 1964, 1991) so that
all 18 teams play twice against each other (switching home court
advantage). In 1963/64, there were only 16 teams, hence only 30 rounds.
In 1991, after the German unification, there was one season with 20
teams and 38 rounds.

Source
~~~~~~

Homepage of the Deutscher Fussball-Bund (DFB, German Football
Association): `http://www.dfb.de/ <http://www.dfb.de/>`__

References
~~~~~~~~~~

Leonhard Knorr-Held (1999), Dynamic rating of sports teams. SFB 386
“Statistical Analysis of Discrete Structures”, Discussion paper **98**.

See Also
~~~~~~~~

``UKSoccer``

Examples
~~~~~~~~

::

    data("Bundesliga")

    ## number of goals per game poisson distributed?
    ngoals1 <- xtabs(~ HomeGoals, data = Bundesliga, subset = Year == 1995)
    ngoals2 <- xtabs(~ AwayGoals, data = Bundesliga, subset = Year == 1995)
    ngoals3 <- table(apply(subset(Bundesliga, Year == 1995)[,3:4], 1, sum))

    gf1 <- goodfit(ngoals1)
    gf2 <- goodfit(ngoals2)
    gf3 <- goodfit(ngoals3)

    summary(gf1)
    summary(gf2)
    summary(gf3)
    plot(gf1)
    plot(gf2)
    plot(gf3)

    Ord_plot(ngoals1)
    distplot(ngoals1)

