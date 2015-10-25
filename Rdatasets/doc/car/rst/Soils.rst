+---------+-------------------+
| Soils   | R Documentation   |
+---------+-------------------+

Soil Compositions of Physical and Chemical Characteristics
----------------------------------------------------------

Description
~~~~~~~~~~~

Soil characteristics were measured on samples from three types of
contours (Top, Slope, and Depression) and at four depths (0-10cm,
10-30cm, 30-60cm, and 60-90cm). The area was divided into 4 blocks, in a
randomized block design. (Suggested by Michael Friendly.)

Usage
~~~~~

::

    Soils

Format
~~~~~~

A data frame with 48 observations on the following 14 variables. There
are 3 factors and 9 response variables.

``Group``
    a factor with 12 levels, corresponding to the combinations of
    ``Contour`` and ``Depth``

``Contour``
    a factor with 3 levels: ``Depression`` ``Slope`` ``Top``

``Depth``
    a factor with 4 levels: ``0-10`` ``10-30`` ``30-60`` ``60-90``

``Gp``
    a factor with 12 levels, giving abbreviations for the groups: ``D0``
    ``D1`` ``D3`` ``D6`` ``S0`` ``S1`` ``S3`` ``S6`` ``T0`` ``T1``
    ``T3`` ``T6``

``Block``
    a factor with levels ``1`` ``2`` ``3`` ``4``

``pH``
    soil pH

``N``
    total nitrogen in %

``Dens``
    bulk density in gm/cm$^3$

``P``
    total phosphorous in ppm

``Ca``
    calcium in me/100 gm.

``Mg``
    magnesium in me/100 gm.

``K``
    phosphorous in me/100 gm.

``Na``
    sodium in me/100 gm.

``Conduc``
    conductivity

Details
~~~~~~~

These data provide good examples of MANOVA and canonical discriminant
analysis in a somewhat complex multivariate setting. They may be treated
as a one-way design (ignoring ``Block``), by using either ``Group`` or
``Gp`` as the factor, or a two-way randomized block design using
``Block``, ``Contour`` and ``Depth`` (quantitative, so orthogonal
polynomial contrasts are useful).

Source
~~~~~~

Horton, I. F.,Russell, J. S., and Moore, A. W. (1968)
Multivariate-covariance and canonical analysis: A method for selecting
the most effective discriminators in a multivariate situation.
*Biometrics* **24**, 845–858.
`http://www.stat.lsu.edu/faculty/moser/exst7037/soils.sas <http://www.stat.lsu.edu/faculty/moser/exst7037/soils.sas>`__

References
~~~~~~~~~~

Khattree, R., and Naik, D. N. (2000) *Multivariate Data Reduction and
Discrimination with SAS Software.* SAS Institute.

Friendly, M. (2006) Data ellipses, HE plots and reduced-rank displays
for multivariate linear models: SAS software and examples. *Journal of
Statistical Software*, 17(6),
`http://www.jstatsoft.org/v17/i06 <http://www.jstatsoft.org/v17/i06>`__.
