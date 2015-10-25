+---------+-------------------+
| women   | R Documentation   |
+---------+-------------------+

Average Heights and Weights for American Women
----------------------------------------------

Description
~~~~~~~~~~~

This data set gives the average heights and weights for American women
aged 30–39.

Usage
~~~~~

::

    women

Format
~~~~~~

A data frame with 15 observations on 2 variables.

+------------+--------------+-----------+----------------+
| ``[,1]``   | ``height``   | numeric   | Height (in)    |
+------------+--------------+-----------+----------------+
| ``[,2]``   | ``weight``   | numeric   | Weight (lbs)   |
+------------+--------------+-----------+----------------+

Details
~~~~~~~

The data set appears to have been taken from the American Society of
Actuaries *Build and Blood Pressure Study* for some (unknown to us)
earlier year.

The World Almanac notes: “The figures represent weights in ordinary
indoor clothing and shoes, and heights with shoes”.

Source
~~~~~~

The World Almanac and Book of Facts, 1975.

References
~~~~~~~~~~

McNeil, D. R. (1977) *Interactive Data Analysis*. Wiley.

Examples
~~~~~~~~

::

    require(graphics)
    plot(women, xlab = "Height (in)", ylab = "Weight (lb)",
         main = "women data: American women aged 30-39")

