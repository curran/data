+----------+-------------------+
| foster   | R Documentation   |
+----------+-------------------+

Foster Feeding Experiment
-------------------------

Description
~~~~~~~~~~~

The data are from a foster feeding experiment with rat mothers and
litters of four different genotypes. The measurement is the litter
weight after a trial feeding period.

Usage
~~~~~

::

    data("foster")

Format
~~~~~~

A data frame with 61 observations on the following 3 variables.

``litgen``
    genotype of the litter, a factor with levels ``A``, ``B``, ``I``,
    and ``J``.

``motgen``
    genotype of the mother, a factor with levels ``A``, ``B``, ``I``,
    and ``J``.

``weight``
    the weight of the litter after a feeding period.

Details
~~~~~~~

Here the interest lies in uncovering the effect of genotype of mother
and litter on litter weight.

Source
~~~~~~

D. J. Hand, F. Daly, A. D. Lunn, K. J. McConway and E. Ostrowski (1994).
*A Handbook of Small Datasets*, Chapman and Hall/CRC, London.

Examples
~~~~~~~~

::


      data("foster", package = "HSAUR")
      plot.design(foster)

