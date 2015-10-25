+------------+-------------------+
| attitude   | R Documentation   |
+------------+-------------------+

The Chatterjee–Price Attitude Data
----------------------------------

Description
~~~~~~~~~~~

From a survey of the clerical employees of a large financial
organization, the data are aggregated from the questionnaires of the
approximately 35 employees for each of 30 (randomly selected)
departments. The numbers give the percent proportion of favourable
responses to seven questions in each department.

Usage
~~~~~

::

    attitude

Format
~~~~~~

A data frame with 30 observations on 7 variables. The first column are
the short names from the reference, the second one the variable names in
the data frame:

+--------+--------------+-----------+-------------------------------------+
| Y      | rating       | numeric   | Overall rating                      |
+--------+--------------+-----------+-------------------------------------+
| X[1]   | complaints   | numeric   | Handling of employee complaints     |
+--------+--------------+-----------+-------------------------------------+
| X[2]   | privileges   | numeric   | Does not allow special privileges   |
+--------+--------------+-----------+-------------------------------------+
| X[3]   | learning     | numeric   | Opportunity to learn                |
+--------+--------------+-----------+-------------------------------------+
| X[4]   | raises       | numeric   | Raises based on performance         |
+--------+--------------+-----------+-------------------------------------+
| X[5]   | critical     | numeric   | Too critical                        |
+--------+--------------+-----------+-------------------------------------+
| X[6]   | advancel     | numeric   | Advancement                         |
+--------+--------------+-----------+-------------------------------------+

Source
~~~~~~

Chatterjee, S. and Price, B. (1977) *Regression Analysis by Example*.
New York: Wiley. (Section 3.7, p.68ff of 2nd ed.(1991).)

Examples
~~~~~~~~

::

    require(stats); require(graphics)
    pairs(attitude, main = "attitude data")
    summary(attitude)
    summary(fm1 <- lm(rating ~ ., data = attitude))
    opar <- par(mfrow = c(2, 2), oma = c(0, 0, 1.1, 0),
                mar = c(4.1, 4.1, 2.1, 1.1))
    plot(fm1)
    summary(fm2 <- lm(rating ~ complaints, data = attitude))
    plot(fm2)
    par(opar)

