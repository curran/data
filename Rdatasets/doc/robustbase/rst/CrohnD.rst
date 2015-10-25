+----------+-------------------+
| CrohnD   | R Documentation   |
+----------+-------------------+

Crohn's Disease Adverse Events Data
-----------------------------------

Description
~~~~~~~~~~~

Data set issued from a study of the adverse events of a drug on 117
patients affected by Crohn's disease (a chronic inflammatory disease of
the intestines).

Usage
~~~~~

::

    data(CrohnD)

Format
~~~~~~

A data frame with 117 observations on the following 9 variables.

``ID``
    the numeric patient IDs

``nrAdvE``
    the number of adverse events

``BMI``
    Body MASS Index, i.e., *weight[kg] / (height[m])^2*.

``height``
    in cm

``country``
    a factor with levels ``0`` and ``1``

``sex``
    the person's gender, a binary factor with levels ``M`` ``F``

``age``
    in years, a numeric vector

``weight``
    in kilograms, a numeric vector

``treat``
    how CD was treated: a factor with levels ``0``, ``1`` and ``2``,
    meaning placebo, drug 1 and drug 2.

Source
~~~~~~

form the authors of the reference, with permission by the original data
collecting agency.

References
~~~~~~~~~~

Serigne N. Lô and Elvezio Ronchetti (2006). Robust Second Order Accurate
Inference for Generalized Linear Models. Technical report, University of
Geneva, Switzerland.

Examples
~~~~~~~~

::

    data(CrohnD)
    str(CrohnD)
    with(CrohnD, ftable(table(sex,country, treat)))

