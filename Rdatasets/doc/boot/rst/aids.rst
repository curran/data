+--------+-------------------+
| aids   | R Documentation   |
+--------+-------------------+

Delay in AIDS Reporting in England and Wales
--------------------------------------------

Description
~~~~~~~~~~~

The ``aids`` data frame has 570 rows and 6 columns.

Although all cases of AIDS in England and Wales must be reported to the
Communicable Disease Surveillance Centre, there is often a considerable
delay between the time of diagnosis and the time that it is reported. In
estimating the prevalence of AIDS, account must be taken of the unknown
number of cases which have been diagnosed but not reported. The data set
here records the reported cases of AIDS diagnosed from July 1983 and
until the end of 1992. The data are cross-classified by the date of
diagnosis and the time delay in the reporting of the cases.

Usage
~~~~~

::

    aids

Format
~~~~~~

This data frame contains the following columns:

``year``
    The year of the diagnosis.

``quarter``
    The quarter of the year in which diagnosis was made.

``delay``
    The time delay (in months) between diagnosis and reporting. 0 means
    that the case was reported within one month. Longer delays are
    grouped in 3 month intervals and the value of ``delay`` is the
    midpoint of the interval (therefore a value of ``2`` indicates that
    reporting was delayed for between 1 and 3 months).

``dud``
    An indicator of censoring. These are categories for which full
    information is not yet available and the number recorded is a lower
    bound only.

``time``
    The time interval of the diagnosis. That is the number of quarters
    from July 1983 until the end of the quarter in which these cases
    were diagnosed.

``y``
    The number of AIDS cases reported.

Source
~~~~~~

The data were obtained from

De Angelis, D. and Gilks, W.R. (1994) Estimating acquired immune
deficiency syndrome accounting for reporting delay. *Journal of the
Royal Statistical Society, A*, **157**, 31–40.

References
~~~~~~~~~~

Davison, A.C. and Hinkley, D.V. (1997) *Bootstrap Methods and Their
Application*. Cambridge University Press.
