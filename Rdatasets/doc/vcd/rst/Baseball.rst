+------------+-------------------+
| Baseball   | R Documentation   |
+------------+-------------------+

Baseball Data
-------------

Description
~~~~~~~~~~~

Baseball data.

Usage
~~~~~

::

    data("Baseball")

Format
~~~~~~

A data frame with 322 observations and 25 variables.

name1
    player's first name.

name2
    player's last name.

atbat86
    times at Bat: number of official plate appearances by a hitter. It
    counts as an official at-bat as long as the batter does not walk,
    sacrifice, get hit by a pitch or reach base due to catcher's
    interference.

hits86
    hits.

homer86
    home runs.

runs86
    the number of runs scored by a player. A run is scored by an
    offensive player who advances from batter to runner and touches
    first, second, third and home base in that order without being put
    out.

rbi86
    Runs Batted In: A hitter earns a run batted in when he drives in a
    run via a hit, walk, sacrifice (bunt or fly) fielder's choice,
    hit-batsman or on an error (when the official scorer rules that the
    run would have scored anyway).

walks86
    A “walk” (or “base on balls”) is an award of first base granted to a
    batter who receives four pitches outside the strike zone.

years
    Years in the Major Leagues. Seems to count all years a player has
    actually played in the Major Leagues, not necessarily consecutive.

atbat
    career times at bat.

hits
    career hits.

homeruns
    career home runs.

runs
    career runs.

rbi
    career runs batted in.

walks
    career walks.

league86
    player's league.

div86
    player's division.

team86
    player's team.

posit86
    player's position (see ``Hitters``).

outs86
    number of putouts (see ``Hitters``)

assist86
    number of assists (see ``Hitters``)

error86
    number of assists (see ``Hitters``)

sal87
    annual salary on opening day (in USD 1000).

league87
    league in 1987.

team87
    team in 1987.

Source
~~~~~~

SAS System for Statistical Graphics, First Edition, page A2.3

References
~~~~~~~~~~

M. Friendly (2000), *Visualizing Categorical Data*. SAS Institute, Cary,
NC.

See Also
~~~~~~~~

``Hitters``

Examples
~~~~~~~~

::

    data("Baseball")

