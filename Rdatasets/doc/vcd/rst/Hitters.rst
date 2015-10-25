+-----------+-------------------+
| Hitters   | R Documentation   |
+-----------+-------------------+

Hitters Data
------------

Description
~~~~~~~~~~~

This data set is deduced from the ``Baseball`` fielding data set:
fielding performance basically includes the numbers of Errors, Putouts
and Assists made by each player. In order to reduce the number of
observations, the was compressed by calculating the mean number of
errors, putouts and assists for each team and for only 6 positions (1B,
2B, 3B, C, OF, SS and UT). In addition, each of these three variables
was scaled to a common range by dividing each variable by the maximum of
the variable.

Usage
~~~~~

::

    data("Hitters")

Format
~~~~~~

A data frame with 154 observations and 4 variables.

Positions
    factor indicating the field position (1B=first baseman, 2B=second
    baseman, 3B=third baseman, C=catcher, OF=outfielder, SS=Short Stop,
    UT=Utility Players).

Putouts
    occur when a fielder causes an opposing player to be tagged or
    forced out.

Assists
    are credited to other fielders involved in making that putout.

Errors
    count the errors made by a player.

Source
~~~~~~

SAS System for Statistical Graphics, First Edition, Page A2.3

References
~~~~~~~~~~

M. Friendly (2000), *Visualizing Categorical Data*. SAS Institute, Cary,
NC.

Examples
~~~~~~~~

::

    data("Hitters")
    attach(Hitters)

    colors <- c("black","red","green","blue","red","black","blue")
    pch <- substr(levels(Positions), 1, 1)
    ternaryplot(Hitters[,2:4],
      pch = as.character(Positions),
      col = colors[as.numeric(Positions)],
      main = "Baseball Hitters Data")
    grid_legend(0.8, 0.9, pch, colors, levels(Positions),
      title = "POSITION(S)")

    detach(Hitters)

