+---------+-------------------+
| nwtco   | R Documentation   |
+---------+-------------------+

Data from the National Wilm's Tumor Study
-----------------------------------------

Description
~~~~~~~~~~~

Missing data/masurement error example. Tumor histology predicts
survival, but prediction is stronger with central lab histology than
with the local institution determination.

Usage
~~~~~

::

    nwtco

Format
~~~~~~

A data frame with 4028 observations on the following 9 variables.

``seqno``
    id number

``instit``
    Histology from local institution

``histol``
    Histology from central lab

``stage``
    Disease stage

``study``
    study

``rel``
    indicator for relapse

``edrel``
    time to relapse

``age``
    age in months

``in.subcohort``
    Included in the subcohort for the example in the paper

Source
~~~~~~

`http://faculty.washington.edu/norm/software.html <http://faculty.washington.edu/norm/software.html>`__

References
~~~~~~~~~~

NE Breslow and N Chatterjee (1999), Design and analysis of two-phase
studies with binary outcome applied to Wilms tumour prognosis. *Applied
Statistics* **48**, 457–68.

Examples
~~~~~~~~

::

    with(nwtco, table(instit,histol))
    anova(coxph(Surv(edrel,rel)~histol+instit,data=nwtco))
    anova(coxph(Surv(edrel,rel)~instit+histol,data=nwtco))

