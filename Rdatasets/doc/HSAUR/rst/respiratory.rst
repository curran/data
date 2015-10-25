+---------------+-------------------+
| respiratory   | R Documentation   |
+---------------+-------------------+

Respiratory Illness Data
------------------------

Description
~~~~~~~~~~~

The respiratory status of patients recruited for a randomised clinical
multicenter trial.

Usage
~~~~~

::

    data("respiratory")

Format
~~~~~~

A data frame with 555 observations on the following 7 variables.

``centre``
    the study center, a factor with levels ``1`` and ``2``.

``treatment``
    the treatment arm, a factor with levels ``placebo`` and
    ``treatment``.

``sex``
    a factor with levels ``female`` and ``male``.

``age``
    the age of the patient.

``status``
    the respiratory status (response variable), a factor with levels
    ``poor`` and ``good``.

``month``
    the month, each patient was examined at months ``0``, ``1``, ``2``,
    ``3`` and ``4``.

``subject``
    the patient ID, a factor with levels ``1`` to ``111``.

Details
~~~~~~~

In each of two centres, eligible patients were randomly assigned to
active treatment or placebo. During the treatment, the respiratory
status (categorised ``poor`` or ``good``) was determined at each of
four, monthly visits. The trial recruited 111 participants (54 in the
active group, 57 in the placebo group) and there were no missing data
for either the responses or the covariates. The question of interest is
to assess whether the treatment is effective and to estimate its effect.

Note that the data are in long form, i.e, repeated measurments are
stored as additional rows in the data frame.

Source
~~~~~~

C. S. Davis (1991), Semi-parametric and non-parametric methods for the
analysis of repeated measurements with applications to clinical trials.
*Statistics in Medicine*, **10**, 1959–1980.

Examples
~~~~~~~~

::


      data("respiratory", package = "HSAUR")
      mosaicplot(xtabs( ~ treatment + month + status, data = respiratory))

