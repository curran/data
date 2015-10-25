+--------+-------------------+
| exAM   | R Documentation   |
+--------+-------------------+

Example Data of Antille and May - for Simple Regression
-------------------------------------------------------

Description
~~~~~~~~~~~

This is an artificial data set, cleverly construced and used by Antille
and May to demonstrate ‘problems’ with LMS and LTS.

Usage
~~~~~

::

    data(exAM)

Format
~~~~~~

A data frame with 12 observations on 2 variables, ``x`` and ``y``.

Details
~~~~~~~

Because the points are not in general position, both LMS and LTS
typically *fail*; however, e.g., ``rlm(*,     method="MM")`` “works”.

Source
~~~~~~

| Antille, G. and El May, H. (1992) The use of slices in the LMS and the
method of density slices: Foundation and comparison.
|  In Yadolah Dodge and Joe Whittaker, editors, *COMPSTAT: Proc. 10th
Symp. Computat. Statist., Neuchatel*, **1**, 441–445; Physica-Verlag.

Examples
~~~~~~~~

::

    data(exAM)
    plot(exAM)
    summary(ls <- lm(y ~ x, data=exAM))
    abline(ls)

