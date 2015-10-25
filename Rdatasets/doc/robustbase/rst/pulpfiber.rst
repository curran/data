+-------------+-------------------+
| pulpfiber   | R Documentation   |
+-------------+-------------------+

Pulp Fiber and Paper Data
-------------------------

Description
~~~~~~~~~~~

Measurements of aspects pulp fibers and the paper produced from them.
Four properties of each are measured in sixty-two samples.

Usage
~~~~~

::

    data(pulpfiber)

Format
~~~~~~

A data frame with 62 observations on the following 8 variables.

``X1``
    numeric vector of arithmetic fiber length

``X2``
    numeric vector of long fiber fraction

``X3``
    numeric vector of fine fiber fraction

``X4``
    numeric vector of zero span tensile

``Y1``
    numeric vector of breaking length

``Y2``
    numeric vector of elastic modulus

``Y3``
    numeric vector of stress at failure

``Y4``
    numeric vector of burst strength

Details
~~~~~~~

Cited from the reference article: *The dataset contains measurements of
properties of pulp fibers and the paper made from them. The aim is to
investigate relations between pulp fiber properties and the resulting
paper properties. The dataset contains *n = 62* measurements of the
following four pulp fiber characteristics: arithmetic fiber length, long
fiber fraction, fine fiber fraction, and zero span tensile. The four
paper properties that have been measured are breaking length, elastic
modulus, stress at failure, and burst strength.*

The goal is to predict the *q = 4* paper properties from the *p = 4*
fiber characteristics.

Author(s)
~~~~~~~~~

port to **R** and this help page: Martin Maechler

Source
~~~~~~

Rousseeuw, P. J., Van Aelst, S., Van Driessen, K., and Agulló, J. (2004)
Robust multivariate regression; *Technometrics* **46**, 293–305.

`http://allserv.ugent.be/~svaelst/data/pulpfiber.txt <http://allserv.ugent.be/~svaelst/data/pulpfiber.txt>`__

References
~~~~~~~~~~

Lee, J. (1992) *Relationships Between Properties of Pulp-Fibre and
Paper*, unpublished doctoral thesis, U. Toronto, Faculty of Forestry.

Examples
~~~~~~~~

::

    data(pulpfiber)
    str(pulpfiber)

    pairs(pulpfiber, gap=.1)
    ## 2 blocks of 4 ..
    c1 <- cov(pulpfiber)
    cR <- covMcd(pulpfiber)
    ## how different are they: The robust estimate has more clear high correlations:
    symnum(cov2cor(c1))
    symnum(cov2cor(cR$cov))

