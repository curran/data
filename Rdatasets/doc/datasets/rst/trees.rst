+---------+-------------------+
| trees   | R Documentation   |
+---------+-------------------+

Girth, Height and Volume for Black Cherry Trees
-----------------------------------------------

Description
~~~~~~~~~~~

This data set provides measurements of the girth, height and volume of
timber in 31 felled black cherry trees. Note that girth is the diameter
of the tree (in inches) measured at 4 ft 6 in above the ground.

Usage
~~~~~

::

    trees

Format
~~~~~~

A data frame with 31 observations on 3 variables.

+------------+--------------+-----------+--------------------------------+
| ``[,1]``   | ``Girth``    | numeric   | Tree diameter in inches        |
+------------+--------------+-----------+--------------------------------+
| ``[,2]``   | ``Height``   | numeric   | Height in ft                   |
+------------+--------------+-----------+--------------------------------+
| ``[,3]``   | ``Volume``   | numeric   | Volume of timber in cubic ft   |
+------------+--------------+-----------+--------------------------------+

Source
~~~~~~

Ryan, T. A., Joiner, B. L. and Ryan, B. F. (1976) *The Minitab Student
Handbook*. Duxbury Press.

References
~~~~~~~~~~

Atkinson, A. C. (1985) *Plots, Transformations and Regression*. Oxford
University Press.

Examples
~~~~~~~~

::

    require(stats); require(graphics)
    pairs(trees, panel = panel.smooth, main = "trees data")
    plot(Volume ~ Girth, data = trees, log = "xy")
    coplot(log(Volume) ~ log(Girth) | Height, data = trees,
           panel = panel.smooth)
    summary(fm1 <- lm(log(Volume) ~ log(Girth), data = trees))
    summary(fm2 <- update(fm1, ~ . + log(Height), data = trees))
    step(fm2)
    ## i.e., Volume ~= c * Height * Girth^2  seems reasonable

