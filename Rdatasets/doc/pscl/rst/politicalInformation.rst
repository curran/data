+------------------------+-------------------+
| politicalInformation   | R Documentation   |
+------------------------+-------------------+

Interviewer ratings of respondent levels of political information
-----------------------------------------------------------------

Description
~~~~~~~~~~~

Interviewers administering the 2000 American National Election Studies
assigned an ordinal rating to each respondent's "general level of
information" about politics and public affairs.

Usage
~~~~~

::

    data(politicalInformation)

Format
~~~~~~

A data frame with 1807 observations on the following 8 variables.

``y``
    interviewer rating, a factor with levels ``Very Low`` ``Fairly Low``
    ``Average`` ``Fairly High`` ``Very High``

``collegeDegree``
    a factor with levels ``No`` ``Yes``

``female``
    a factor with levels ``No`` ``Yes``

``age``
    a numeric vector, respondent age in years

``homeOwn``
    a factor with levels ``No`` ``Yes``

``govt``
    a factor with levels ``No`` ``Yes``

``length``
    a numeric vector, length of ANES pre-election interview in minutes

``id``
    a factor, unique identifier for each interviewer

Details
~~~~~~~

Seven respondents have missing data on the ordinal interviewer rating.
The covariates ``age`` and ``length`` also have some missing data.

Source
~~~~~~

The National Election Studies (www.electionstudies.org). THE 2000
NATIONAL ELECTION STUDY [dataset]. Ann Arbor, MI: University of
Michigan, Center for Political Studies [producer and distributor].

References
~~~~~~~~~~

Jackman, Simon. 2009. *Bayesian Analysis for the Social Sciences*.
Wiley: Hoboken, New Jersey.

Examples
~~~~~~~~

::

    data(politicalInformation)

    table(politicalInformation$y,exclude=NULL)

    op <- polr(y ~ collegeDegree + female + log(age) + homeOwn + govt + log(length),
               data=politicalInformation,
               Hess=TRUE,
               method="probit")

