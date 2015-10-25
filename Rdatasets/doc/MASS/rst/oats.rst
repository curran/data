+--------+-------------------+
| oats   | R Documentation   |
+--------+-------------------+

Data from an Oats Field Trial
-----------------------------

Description
~~~~~~~~~~~

The yield of oats from a split-plot field trial using three varieties
and four levels of manurial treatment. The experiment was laid out in 6
blocks of 3 main plots, each split into 4 sub-plots. The varieties were
applied to the main plots and the manurial treatments to the sub-plots.

Usage
~~~~~

::

    oats

Format
~~~~~~

This data frame contains the following columns:

``B``
    Blocks, levels I, II, III, IV, V and VI.

``V``
    Varieties, 3 levels.

``N``
    Nitrogen (manurial) treatment, levels 0.0cwt, 0.2cwt, 0.4cwt and
    0.6cwt, showing the application in cwt/acre.

``Y``
    Yields in 1/4lbs per sub-plot, each of area 1/80 acre.

Source
~~~~~~

Yates, F. (1935) Complex experiments, *Journal of the Royal Statistical
Society Suppl.* **2**, 181–247.

Also given in Yates, F. (1970) *Experimental design: Selected papers of
Frank Yates, C.B.E, F.R.S.* London: Griffin.

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (2002) *Modern Applied Statistics with
S.* Fourth edition. Springer.

Examples
~~~~~~~~

::

    oats$Nf <- ordered(oats$N, levels = sort(levels(oats$N)))
    oats.aov <- aov(Y ~ Nf*V + Error(B/V), data = oats, qr = TRUE)
    summary(oats.aov)
    summary(oats.aov, split = list(Nf=list(L=1, Dev=2:3)))
    par(mfrow = c(1,2), pty = "s")
    plot(fitted(oats.aov[[4]]), studres(oats.aov[[4]]))
    abline(h = 0, lty = 2)
    oats.pr <- proj(oats.aov)
    qqnorm(oats.pr[[4]][,"Residuals"], ylab = "Stratum 4 residuals")
    qqline(oats.pr[[4]][,"Residuals"])

    par(mfrow = c(1,1), pty = "m")
    oats.aov2 <- aov(Y ~ N + V + Error(B/V), data = oats, qr = TRUE)
    model.tables(oats.aov2, type = "means", se = TRUE)

