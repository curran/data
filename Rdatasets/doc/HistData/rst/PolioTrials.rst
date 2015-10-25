+---------------+-------------------+
| PolioTrials   | R Documentation   |
+---------------+-------------------+

Polio Field Trials Data
-----------------------

Description
~~~~~~~~~~~

The data frame ``PolioTrials`` gives the results of the 1954 field
trials to test the Salk polio vaccine (named for the developer, Jonas
Salk), conducted by the National Foundation for Infantile Paralysis
(NFIP). It is adapted from data in the article by Francis et al. (1955).
There were actually two clinical trials, corresponding to two
statistical designs (``Experiment``), discussed by Brownlee (1955). The
comparison of designs and results represented a milestone in the
development of randomized clinical trials.

Usage
~~~~~

::

    data(PolioTrials)

Format
~~~~~~

A data frame with 8 observations on the following 6 variables.

``Experiment``
    a factor with levels ``ObservedControl`` ``RandomizedControl``

``Group``
    a factor with levels ``Controls`` ``Grade2NotInoculated``
    ``IncompleteVaccinations`` ``NotInoculated`` ``Placebo``
    ``Vaccinated``

``Population``
    the size of the population in each group in each experiment

``Paralytic``
    the number of cases of paralytic polio observed in that group

``NonParalytic``
    the number of cases of paralytic polio observed in that group

``FalseReports``
    the number of cases initially reported as polio, but later
    determined not to be polio in that group

Details
~~~~~~~

The data frame is in the form of a single table, but actually comprises
the results of two separate field trials, given by ``Experiment``. Each
should be analyzed separately, because the designs differ markedly.

The original design (``Experiment == "ObservedControl"``) called for
vaccination of second-graders at selected schools in selected areas of
the country (with the consent of the children's parents, of course). The
``Vaccinated`` second-graders formed the treatment group. The first and
third-graders at the schools were not given the vaccination, and formed
the ``Controls`` group.

In the second design (``Experiment == "RandomizedControl"``) children
were selected (again in various schools in various areas), all of whose
parents consented to vaccination. The sample was randomly divided into
treatment (``Group == "Vaccinated"``), given the real polio vaccination,
and control groups (``Group == "Placebo"``), a placebo dose that looked
just like the real vaccine. The experiment was also double blind:
neither the parents of a child in the study nor the doctors treating the
child knew which group the child belonged to.

In both experiments, ``NotInnoculated`` refers to children who did not
participate in the experiment. ``IncompleteVaccinations`` refers to
children who received one or two, but not all three administrations of
the vaccine.

Source
~~~~~~

Kyle Siegrist, "Virtual Laboratories in Probability and Statistics",
`http://www.math.uah.edu/stat/data/Polio.xhtml <http://www.math.uah.edu/stat/data/Polio.xhtml>`__

Thomas Francis, Robert Korn, et al. (1955). "An Evaluation of the 1954
Poliomyelitis Vaccine Trials", *American Journal of Public Health*, 45,
(50 page supplement with a 63 page appendix).

References
~~~~~~~~~~

K. A. Brownlee (1955). "Statistics of the 1954 Polio Vaccine Trials",
*Journal of the American Statistical Association*, 50, 1005-1013.

Examples
~~~~~~~~

::

    data(PolioTrials)
    ## maybe str(PolioTrials) ; plot(PolioTrials) ...

