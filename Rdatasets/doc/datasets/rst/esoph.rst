+---------+-------------------+
| esoph   | R Documentation   |
+---------+-------------------+

Smoking, Alcohol and (O)esophageal Cancer
-----------------------------------------

Description
~~~~~~~~~~~

Data from a case-control study of (o)esophageal cancer in
Ille-et-Vilaine, France.

Usage
~~~~~

::

    esoph

Format
~~~~~~

A data frame with records for 88 age/alcohol/tobacco combinations.

+--------+---------------+-----------------------+------------------+
| [,1]   | "agegp"       | Age group             | 1 25--34 years   |
+--------+---------------+-----------------------+------------------+
|        |               |                       | 2 35--44         |
+--------+---------------+-----------------------+------------------+
|        |               |                       | 3 45--54         |
+--------+---------------+-----------------------+------------------+
|        |               |                       | 4 55--64         |
+--------+---------------+-----------------------+------------------+
|        |               |                       | 5 65--74         |
+--------+---------------+-----------------------+------------------+
|        |               |                       | 6 75+            |
+--------+---------------+-----------------------+------------------+
| [,2]   | "alcgp"       | Alcohol consumption   | 1 0--39 gm/day   |
+--------+---------------+-----------------------+------------------+
|        |               |                       | 2 40--79         |
+--------+---------------+-----------------------+------------------+
|        |               |                       | 3 80--119        |
+--------+---------------+-----------------------+------------------+
|        |               |                       | 4 120+           |
+--------+---------------+-----------------------+------------------+
| [,3]   | "tobgp"       | Tobacco consumption   | 1 0-- 9 gm/day   |
+--------+---------------+-----------------------+------------------+
|        |               |                       | 2 10--19         |
+--------+---------------+-----------------------+------------------+
|        |               |                       | 3 20--29         |
+--------+---------------+-----------------------+------------------+
|        |               |                       | 4 30+            |
+--------+---------------+-----------------------+------------------+
| [,4]   | "ncases"      | Number of cases       |                  |
+--------+---------------+-----------------------+------------------+
| [,5]   | "ncontrols"   | Number of controls    |                  |
+--------+---------------+-----------------------+------------------+

Author(s)
~~~~~~~~~

Thomas Lumley

Source
~~~~~~

Breslow, N. E. and Day, N. E. (1980) *Statistical Methods in Cancer
Research. Volume 1: The Analysis of Case-Control Studies.* IARC Lyon /
Oxford University Press.

Examples
~~~~~~~~

::

    require(stats)
    require(graphics) # for mosaicplot
    summary(esoph)
    ## effects of alcohol, tobacco and interaction, age-adjusted
    model1 <- glm(cbind(ncases, ncontrols) ~ agegp + tobgp * alcgp,
                  data = esoph, family = binomial())
    anova(model1)
    ## Try a linear effect of alcohol and tobacco
    model2 <- glm(cbind(ncases, ncontrols) ~ agegp + unclass(tobgp)
                                             + unclass(alcgp),
                  data = esoph, family = binomial())
    summary(model2)
    ## Re-arrange data for a mosaic plot
    ttt <- table(esoph$agegp, esoph$alcgp, esoph$tobgp)
    o <- with(esoph, order(tobgp, alcgp, agegp))
    ttt[ttt == 1] <- esoph$ncases[o]
    tt1 <- table(esoph$agegp, esoph$alcgp, esoph$tobgp)
    tt1[tt1 == 1] <- esoph$ncontrols[o]
    tt <- array(c(ttt, tt1), c(dim(ttt),2),
                c(dimnames(ttt), list(c("Cancer", "control"))))
    mosaicplot(tt, main = "esoph data set", color = TRUE)

