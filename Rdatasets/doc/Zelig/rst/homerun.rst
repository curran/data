+-----------+-------------------+
| homerun   | R Documentation   |
+-----------+-------------------+

Sample Data on Home Runs Hit By Mark McGwire and Sammy Sosa in 1998.
--------------------------------------------------------------------

Description
~~~~~~~~~~~

Game-by-game information for the 1998 season for Mark McGwire and Sammy
Sosa. Data are a subset of the dataset provided in Simonoff (1998).

Usage
~~~~~

::

    data(homerun)

Format
~~~~~~

A data frame containing 5 variables ("gameno", "month", "homeruns",
"playerstatus", "player") and 326 observations.

``gameno``
    an integer variable denoting the game number

``month``
    a factor variable taking with levels "March" through "September"
    denoting the month of the game

``homeruns``
    an integer vector denoting the number of homeruns hit in that game
    for that player

``playerstatus``
    an integer vector equal to "0" if the player played in the game, and
    "1" if they did not.

``player``
    an integer vector equal to "0" (McGwire) or "1" (Sosa)

Source
~~~~~~

`http://www.amstat.org <http://www.amstat.org>`__

References
~~~~~~~~~~

Simonoff, Jeffrey S. 1998. “Move Over, Roger Maris: Breaking Baseball's
Most Famous Record.” *Journal of Statistics Education* 6(3). Data used
are a subset of the data in the article.
