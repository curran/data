+------------+-------------------+
| baseball   | R Documentation   |
+------------+-------------------+

Yearly batting records for all major league baseball players
------------------------------------------------------------

Description
~~~~~~~~~~~

This data frame contains batting statistics for a subset of players
collected from
`http://www.baseball-databank.org/ <http://www.baseball-databank.org/>`__.
There are a total of 21,699 records, covering 1,228 players from 1871 to
2007. Only players with more 15 seasons of play are included.

Usage
~~~~~

::

    baseball

Format
~~~~~~

A 21699 x 22 data frame

Variables
~~~~~~~~~

Variables:

-  id, unique player id

-  year, year of data

-  stint

-  team, team played for

-  lg, league

-  g, number of games

-  ab, number of times at bat

-  r, number of runs

-  h, hits, times reached base because of a batted, fair ball without
   error by the defense

-  X2b, hits on which the batter reached second base safely

-  X3b, hits on which the batter reached third base safely

-  hr, number of home runs

-  rbi, runs batted in

-  sb, stolen bases

-  cs, caught stealing

-  bb, base on balls (walk)

-  so, strike outs

-  ibb, intentional base on balls

-  hbp, hits by pitch

-  sh, sacrifice hits

-  sf, sacrifice flies

-  gidp, ground into double play

References
~~~~~~~~~~

`http://www.baseball-databank.org/ <http://www.baseball-databank.org/>`__

Examples
~~~~~~~~

::

    baberuth <- subset(baseball, id == "ruthba01")
    baberuth$cyear <- baberuth$year - min(baberuth$year) + 1

    calculate_cyear <- function(df) {
      mutate(df,
        cyear = year - min(year),
        cpercent = cyear / (max(year) - min(year))
      )
    }

    baseball <- ddply(baseball, .(id), calculate_cyear)
    baseball <- subset(baseball, ab >= 25)

    model <- function(df) {
      lm(rbi / ab ~ cyear, data=df)
    }
    model(baberuth)
    models <- dlply(baseball, .(id), model)

