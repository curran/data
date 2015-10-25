+-----------+-------------------+
| alcohol   | R Documentation   |
+-----------+-------------------+

Alcohol Solubility in Water Data
--------------------------------

Description
~~~~~~~~~~~

The solubility of alcohols in water is important in understanding
alcohol transport in living organisms. This dataset from (Romanelli et
al., 2001) contains physicochemical characteristics of 44 aliphatic
alcohols. The aim of the experiment was the prediction of the solubility
on the basis of molecular descriptors.

Usage
~~~~~

::

    data(alcohol)

Format
~~~~~~

A data frame with 44 observations on the following 7 numeric variables.

``SAG``
    solvent accessible surface-bounded molecular volume.

``V``
    volume

``logPC``
    Log(PC); PC = octanol-water partitions coefficient

``P``
    polarizability

``RM``
    molar refractivity

``Mass``
    the mass

``logSolubility``
    ln(Solubility), the response.

Source
~~~~~~

The website accompanying the MMY-book:
`http://www.wiley.com/legacy/wileychi/robust\_statistics <http://www.wiley.com/legacy/wileychi/robust_statistics>`__

References
~~~~~~~~~~

Maronna, R.A., Martin, R.D. and Yohai, V.J. (2006) *Robust Statistics,
Theory and Methods*, Wiley.

Examples
~~~~~~~~

::

    data(alcohol)
    ## version of data set with trivial names, as
    s.alcohol <- alcohol
    names(s.alcohol) <- paste("Col", 1:7, sep='')

