+-------------+-------------------+
| DoctorAUS   | R Documentation   |
+-------------+-------------------+

Doctor Visits in Australia
--------------------------

Description
~~~~~~~~~~~

a cross-section from 1977–1978

*number of observations* : 5190

*observation* : individuals

*country* : Australia

Usage
~~~~~

::

    data(DoctorAUS)

Format
~~~~~~

A dataframe containing :

sex
    sex

age
    age

income
    annual income in tens of thousands of dollars

insurance
    insurance contract (medlevy : medibanl levy, levyplus : private
    health insurance, freepoor : government insurance due to low income,
    freerepa : government insurance due to old age disability or veteran
    status

illness
    number of illness in past 2 weeks

actdays
    number of days of reduced activiy in past 2 weeks due to illness or
    injury

hscore
    general health score using Goldberg's method (from 0 to 12)

chcond
    chronic condition (np : no problem, la : limiting activity, nla :
    not limiting activity)

doctorco
    number of consultations with a doctor or specialist in the past 2
    weeks

nondocco
    number of consultations with non-doctor health professionals
    (chemist, optician, physiotherapist, social worker, district
    community nurse, chiropodist or chiropractor) in the past 2 weeks

hospadmi
    number of admissions to a hospital, psychiatric hospital, nursing or
    convalescent home in the past 12 months (up to 5 or more admissions
    which is coded as 5)

hospdays
    number of nights in a hospital, etc. during most recent admission:
    taken, where appropriate, as the mid-point of the intervals 1, 2, 3,
    4, 5, 6, 7, 8-14, 15-30, 31-60, 61-79 with 80 or more admissions
    coded as 80. If no admission in past 12 months then equals zero.

medecine
    total number of prescribed and nonprescribed medications used in
    past 2 days

prescrib
    total number of prescribed medications used in past 2 days

nonpresc
    total number of nonprescribed medications used in past 2 days

Source
~~~~~~

Cameron, A.C. and P.K. Trivedi (1986) “Econometric Models Based on Count
Data: Comparisons and Applications of Some Estimators and Tests”,
*Journal of Applied Econometrics*, **1**, 29-54..

References
~~~~~~~~~~

Cameron, A.C. and Trivedi P.K. (1998) *Regression analysis of count
data*, Cambridge University Press,
`http://cameron.econ.ucdavis.edu/racd/racddata.html <http://cameron.econ.ucdavis.edu/racd/racddata.html>`__,
chapter 3.

See Also
~~~~~~~~

``Index.Source``, ``Index.Economics``, ``Index.Econometrics``,
``Index.Observations``
