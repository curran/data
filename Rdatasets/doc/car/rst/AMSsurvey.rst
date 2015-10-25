+-------------+-------------------+
| AMSsurvey   | R Documentation   |
+-------------+-------------------+

American Math Society Survey Data
---------------------------------

Description
~~~~~~~~~~~

Counts of new PhDs in the mathematical sciences for 2008-09 and 2011-12
categorized by type of institution, gender, and US citizenship status.

Usage
~~~~~

::

    AMSsurvey

Format
~~~~~~

A data frame with 24 observations on the following 5 variables.

type
    a factor with levels ``I(Pu)`` for group I public universities,
    ``I(Pr)`` for group I private universities, ``II`` and ``III`` for
    groups II and III, ``IV`` for statistics and biostatistics programs,
    and ``Va`` for applied mathemeatics programs.

sex
    a factor with levels ``Female``, ``Male`` of the recipient

citizen
    a factor with levels ``Non-US``, ``US`` giving citizenship status

count
    The number of individuals of each type in 2008-09

count11
    The number of individuals of each type in 2011-12

Details
~~~~~~~

These data are produced yearly by the American Math Society.

Source
~~~~~~

`http://www.ams.org/employment/surveyreports.html <http://www.ams.org/employment/surveyreports.html>`__
Supplementary Table 4 in the 2008-09 data.

References
~~~~~~~~~~

Fox, J. and Weisberg, S. (2011) *An R Companion to Applied Regression*,
Second Edition, Sage.

Phipps, Polly, Maxwell, James W. and Rose, Colleen (2009), *2009 Annual
Survey of the Mathematical Sciences*, 57, 250–259, Supplementary Table
4,
`http://www.ams/org/employment/2009Survey-First-Report-Supp-Table4.pdf <http://www.ams/org/employment/2009Survey-First-Report-Supp-Table4.pdf>`__
