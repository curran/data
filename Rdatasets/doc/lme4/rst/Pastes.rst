+----------+-------------------+
| Pastes   | R Documentation   |
+----------+-------------------+

Paste strength by batch and cask
--------------------------------

Description
~~~~~~~~~~~

Strength of a chemical paste product; its quality depending on the
delivery batch, and the cask within the delivery.

Format
~~~~~~

A data frame with 60 observations on the following 4 variables.

``strength``
    paste strength.

``batch``
    delivery batch from which the sample was sample. A factor with 10
    levels: ‘A’ to ‘J’.

``cask``
    cask within the delivery batch from which the sample was chosen. A
    factor with 3 levels: ‘a’ to ‘c’.

``sample``
    the sample of paste whose strength was assayed, two assays per
    sample. A factor with 30 levels: ‘A:a’ to ‘J:c’.

Details
~~~~~~~

The data are described in Davies and Goldsmith (1972) as coming from “
deliveries of a chemical paste product contained in casks where, in
addition to sampling and testing errors, there are variations in quality
between deliveries ... As a routine, three casks selected at random from
each delivery were sampled and the samples were kept for reference. ...
Ten of the delivery batches were sampled at random and two analytical
tests carried out on each of the 30 samples”.

Source
~~~~~~

O.L. Davies and P.L. Goldsmith (eds), *Statistical Methods in Research
and Production, 4th ed.*, Oliver and Boyd, (1972), section 6.5

Examples
~~~~~~~~

::

    str(Pastes)
    require(lattice)
    dotplot(cask ~ strength | reorder(batch, strength), Pastes,
            strip = FALSE, strip.left = TRUE, layout = c(1, 10),
            ylab = "Cask within batch",
            xlab = "Paste strength", jitter.y = TRUE)
    ## Modifying the factors to enhance the plot
    Pastes <- within(Pastes, batch <- reorder(batch, strength))
    Pastes <- within(Pastes, sample <- reorder(reorder(sample, strength),
              as.numeric(batch)))
    dotplot(sample ~ strength | batch, Pastes,
            strip = FALSE, strip.left = TRUE, layout = c(1, 10),
            scales = list(y = list(relation = "free")),
            ylab = "Sample within batch",
            xlab = "Paste strength", jitter.y = TRUE)
    ## Four equivalent models differing only in specification
    (fm1 <- lmer(strength ~ (1|batch) + (1|sample), Pastes))
    (fm2 <- lmer(strength ~ (1|batch/cask), Pastes))
    (fm3 <- lmer(strength ~ (1|batch) + (1|batch:cask), Pastes))
    (fm4 <- lmer(strength ~ (1|batch/sample), Pastes))
    ## fm4 results in redundant labels on the sample:batch interaction
    head(ranef(fm4)[[1]])
    ## compare to fm1
    head(ranef(fm1)[[1]])
    ## This model is different and NOT appropriate for these data
    (fm5 <- lmer(strength ~ (1|batch) + (1|cask), Pastes))

    L <- getME(fm1, "L")
    Matrix::image(L, sub = "Structure of random effects interaction in pastes model")

