+------------+-------------------+
| chickwts   | R Documentation   |
+------------+-------------------+

Chicken Weights by Feed Type
----------------------------

Description
~~~~~~~~~~~

An experiment was conducted to measure and compare the effectiveness of
various feed supplements on the growth rate of chickens.

Usage
~~~~~

::

    chickwts

Format
~~~~~~

A data frame with 71 observations on 2 variables.

weight
    a numeric variable giving the chick weight.

feed
    a factor giving the feed type.

Details
~~~~~~~

Newly hatched chicks were randomly allocated into six groups, and each
group was given a different feed supplement. Their weights in grams
after six weeks are given along with feed types.

Source
~~~~~~

Anonymous (1948) *Biometrika*, **35**, 214.

References
~~~~~~~~~~

McNeil, D. R. (1977) *Interactive Data Analysis*. New York: Wiley.

Examples
~~~~~~~~

::

    require(stats); require(graphics)
    boxplot(weight ~ feed, data = chickwts, col = "lightgray",
        varwidth = TRUE, notch = TRUE, main = "chickwt data",
        ylab = "Weight at six weeks (gm)")
    anova(fm1 <- lm(weight ~ feed, data = chickwts))
    opar <- par(mfrow = c(2, 2), oma = c(0, 0, 1.1, 0),
                mar = c(4.1, 4.1, 2.1, 1.1))
    plot(fm1)
    par(opar)

