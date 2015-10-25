+--------------+-------------------+
| toothpaste   | R Documentation   |
+--------------+-------------------+

Toothpaste Data
---------------

Description
~~~~~~~~~~~

Meta-analysis of studies comparing two different toothpastes.

Usage
~~~~~

::

    data("toothpaste")

Format
~~~~~~

A data frame with 9 observations on the following 7 variables.

``Study``
    the identifier of the study.

``nA``
    number of subjects using toothpaste A.

``meanA``
    mean DMFS index of subjects using toothpaste A.

``sdA``
    standard deviation of DMFS index of subjects using toothpaste A.

``nB``
    number of subjects using toothpaste B.

``meanB``
    mean DMFS index of subjects using toothpaste B.

``sdB``
    standard deviation of DMFS index of subjects using toothpaste B.

Details
~~~~~~~

The data are the results of nine randomised trials comparing two
different toothpastes for the prevention of caries development. The
outcomes in each trial was the change, from baseline, in the decayed,
missing (due to caries) and filled surface dental index (DMFS).

Source
~~~~~~

B. S. Everitt and A. Pickles (2000), *Statistical Aspects of the Design
and Analysis of Clinical Trials*, Imperial College Press, London.

Examples
~~~~~~~~

::


      data("toothpaste", package = "HSAUR")
      toothpaste

