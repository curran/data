+-----------+-------------------+
| breslow   | R Documentation   |
+-----------+-------------------+

Smoking Deaths Among Doctors
----------------------------

Description
~~~~~~~~~~~

The ``breslow`` data frame has 10 rows and 5 columns.

In 1961 Doll and Hill sent out a questionnaire to all men on the British
Medical Register enquiring about their smoking habits. Almost 70% of
such men replied. Death certificates were obtained for medical
practitioners and causes of death were assigned on the basis of these
certificates. The ``breslow`` data set contains the person-years of
observations and deaths from coronary artery disease accumulated during
the first ten years of the study.

Usage
~~~~~

::

    breslow

Format
~~~~~~

This data frame contains the following columns:

``age``
    The mid-point of the 10 year age-group for the doctors.

``smoke``
    An indicator of whether the doctors smoked (1) or not (0).

``n``
    The number of person-years in the category.

``y``
    The number of deaths attributed to coronary artery disease.

``ns``
    The number of smoker years in the category (``smoke*n``).

Source
~~~~~~

The data were obtained from

Breslow, N.E. (1985) Cohort Analysis in Epidemiology. In *A Celebration
of Statistics* A.C. Atkinson and S.E. Fienberg (editors), 109–143.
Springer-Verlag.

References
~~~~~~~~~~

Davison, A.C. and Hinkley, D.V. (1997) *Bootstrap Methods and Their
Application*. Cambridge University Press.

Doll, R. and Hill, A.B. (1966) Mortality of British doctors in relation
to smoking: Observations on coronary thrombosis. *National Cancer
Institute Monograph*, **19**, 205-268.
