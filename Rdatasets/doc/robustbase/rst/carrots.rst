+-----------+-------------------+
| carrots   | R Documentation   |
+-----------+-------------------+

Insect Damages on Carrots
-------------------------

Description
~~~~~~~~~~~

The damage carrots data set from Phelps (1982) was used by McCullagh and
Nelder (1989) in order to illustrate diagnostic techniques because of
the presence of an outlier. In a soil experiment trial with three
blocks, eight levels of insecticide were applied and the carrots were
tested for insect damage.

Usage
~~~~~

::

    data(carrots)

Format
~~~~~~

A data frame with 24 observations on the following 4 variables.

success
    integer giving the number of carrots with insect damage.

total
    integer giving the total number of carrots per experimental unit.

logdose
    a numeric vector giving log(dose) values (eight different levels
    only).

block
    factor with levels ``B1`` to ``B3``

Source
~~~~~~

| Phelps, K. (1982). Use of the complementary log-log function to
describe doseresponse relationships in insecticide evaluation field
trials.
|  In R. Gilchrist (Ed.), *Lecture Notes in Statistics, No. 14. GLIM.82:
Proceedings of the International Conference on Generalized Linear
Models*; Springer-Verlag.

References
~~~~~~~~~~

McCullagh P. and Nelder, J. A. (1989) *Generalized Linear Models.*
London: Chapman and Hall.

| Eva Cantoni and Elvezio Ronchetti (2001); JASA, and
|  Eva Cantoni (2004); JSS, see ``glmrob``

Examples
~~~~~~~~

::

    data(carrots)
    str(carrots)
    plot(success/total ~ logdose, data = carrots, col = as.integer(block))
    coplot(success/total ~ logdose | block, data = carrots)

    ## Classical glm
    Cfit0 <- glm(cbind(success, total-success) ~ logdose + block,
                 data=carrots, family=binomial)
    summary(Cfit0)

    ## Robust Fit (see help(glmrob)) ....

