+-------+-------------------+
| BCG   | R Documentation   |
+-------+-------------------+

BCG Vaccine Data
----------------

Description
~~~~~~~~~~~

A meta-analysis on the efficacy of BCG vaccination against tuberculosis
(TB).

Usage
~~~~~

::

    data("BCG")

Format
~~~~~~

A data frame with 13 observations on the following 7 variables.

``Study``
    an identifier of the study.

``BCGTB``
    the number of subjects suffering from TB after a BCG vaccination.

``BCGVacc``
    the number of subjects with BCG vaccination.

``NoVaccTB``
    the number of subjects suffering from TB without BCG vaccination.

``NoVacc``
    the total number of subjects without BCG vaccination.

``Latitude``
    geographic position of the place the study was undertaken.

``Year``
    the year the study was undertaken.

Details
~~~~~~~

Bacille Calmette Guerin (BCG) is the most widely used vaccination in the
world. Developed in the 1930s and made of a live, weakened strain of
Mycobacterium bovis, the BCG is the only vaccination available against
tuberculosis today. Colditz et al. (1994) report data from 13 clinical
trials of BCG vaccine each investigating its efficacy in the treatment
of tuberculosis. The number of subjects suffering from TB with or
without BCG vaccination are given here. In addition, the data contains
the values of two other variables for each study, namely, the geographic
latitude of the place where the study was undertaken and the year of
publication. These two variables will be used to investigate and perhaps
explain any heterogeneity among the studies.

Source
~~~~~~

G. A. Colditz, T. F. Brewer, C. S. Berkey, M. E. Wilson, E. Burdick, H.
V. Fineberg and F. Mosteller (1994), Efficacy of BCG vaccine in the
prevention of tuberculosis. Meta-analysis of the published literature.
*Journal of the American Medical Association*, **271**\ (2), 698–702.

Examples
~~~~~~~~

::


      data("BCG", package = "HSAUR")
      boxplot(BCG$BCGTB/BCG$BCGVacc, BCG$NoVaccTB/BCG$NoVacc,
              names = c("BCG Vaccination", "No Vaccination"), 
              ylab = "Percent BCG cases")

