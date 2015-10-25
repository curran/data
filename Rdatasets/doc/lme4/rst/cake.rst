+--------+-------------------+
| cake   | R Documentation   |
+--------+-------------------+

Breakage Angle of Chocolate Cakes
---------------------------------

Description
~~~~~~~~~~~

Data on the breakage angle of chocolate cakes made with three different
recipes and baked at six different temperatures. This is a split-plot
design with the recipes being whole-units and the different temperatures
being applied to sub-units (within replicates). The experimental notes
suggest that the replicate numbering represents temporal ordering.

Format
~~~~~~

A data frame with 270 observations on the following 5 variables.

``replicate``
    a factor with levels ``1`` to ``15``

``recipe``
    a factor with levels ``A``, ``B`` and ``C``

``temperature``
    an ordered factor with levels ``175`` < ``185`` < ``195`` < ``205``
    < ``215`` < ``225``

``angle``
    a numeric vector giving the angle at which the cake broke.

``temp``
    numeric value of the baking temperature (degrees F).

Details
~~~~~~~

The ``replicate`` factor is nested within the ``recipe`` factor, and
``temperature`` is nested within ``replicate``.

Source
~~~~~~

Original data were presented in Cook (1938), and reported in Cochran and
Cox (1957, p. 300). Also cited in Lee, Nelder and Pawitan (2006).

References
~~~~~~~~~~

Cook, F. E. (1938) *Chocolate cake, I. Optimum baking temperature*.
Master's Thesis, Iowa State College.

Cochran, W. G., and Cox, G. M. (1957) *Experimental designs*, 2nd Ed.
New York, John Wiley \\& Sons.

Lee, Y., Nelder, J. A., and Pawitan, Y. (2006) *Generalized linear
models with random effects. Unified analysis via H-likelihood*. Boca
Raton, Chapman and Hall/CRC.

Examples
~~~~~~~~

::

    str(cake)
    ## 'temp' is continuous, 'temperature' an ordered factor with 6 levels

    (fm1 <- lmer(angle ~ recipe * temperature + (1|recipe:replicate), cake, REML= FALSE))
    (fm2 <- lmer(angle ~ recipe + temperature + (1|recipe:replicate), cake, REML= FALSE))
    (fm3 <- lmer(angle ~ recipe + temp        + (1|recipe:replicate), cake, REML= FALSE))

    ## and now "choose" :
    anova(fm3, fm2, fm1)

