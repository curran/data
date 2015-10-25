+----------+-------------------+
| dietox   | R Documentation   |
+----------+-------------------+

Growth curves of pigs in a 3x3 factorial experiment
---------------------------------------------------

Description
~~~~~~~~~~~

The ``dietox`` data frame has 861 rows and 7 columns.

Usage
~~~~~

::

    data(dietox)

Format
~~~~~~

This data frame contains the following columns:

Weight
    a numeric vector

Feed
    a numeric vector

Time
    a numeric vector

Pig
    a numeric vector

Evit
    a numeric vector

Cu
    a numeric vector

Litter
    a numeric vector

Source
~~~~~~

Lauridsen, C., Højsgaard, S.,Sørensen, M.T. C. (1999) Influence of
Dietary Rapeseed Oli, Vitamin E, and Copper on Performance and
Antioxidant and Oxidative Status of Pigs. J. Anim. Sci.77:906-916

Examples
~~~~~~~~

::

    data(dietox)
    dietox$Cu     <- as.factor(dietox$Cu)
    gee01 <- geeglm (Weight ~ Time + Cu + Cu * Time, id =Pig, data = dietox,
             family=gaussian,corstr="ex")

    mf <- formula(Weight~Cu*(Time+I(Time^2)+I(Time^3)))
    gee1 <- geeglm(mf, data=dietox, id=Pig, family=poisson("identity"),corstr="ar1")
    summary(gee1)
    anova(gee1)

