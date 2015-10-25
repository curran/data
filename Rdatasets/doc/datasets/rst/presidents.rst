+--------------+-------------------+
| presidents   | R Documentation   |
+--------------+-------------------+

Quarterly Approval Ratings of US Presidents
-------------------------------------------

Description
~~~~~~~~~~~

The (approximately) quarterly approval rating for the President of the
United States from the first quarter of 1945 to the last quarter of
1974.

Usage
~~~~~

::

    presidents

Format
~~~~~~

A time series of 120 values.

Details
~~~~~~~

The data are actually a fudged version of the approval ratings. See
McNeil's book for details.

Source
~~~~~~

The Gallup Organisation.

References
~~~~~~~~~~

McNeil, D. R. (1977) *Interactive Data Analysis*. New York: Wiley.

Examples
~~~~~~~~

::

    require(stats); require(graphics)
    plot(presidents, las = 1, ylab = "Approval rating (%)",
         main = "presidents data")

