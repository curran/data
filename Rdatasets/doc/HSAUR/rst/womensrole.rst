+--------------+-------------------+
| womensrole   | R Documentation   |
+--------------+-------------------+

Womens Role in Society
----------------------

Description
~~~~~~~~~~~

Data from a survey from 1974 / 1975 asking both female and male
responders about their opinion on the statement: Women should take care
of running their homes and leave running the country up to men.

Usage
~~~~~

::

    data("womensrole")

Format
~~~~~~

A data frame with 42 observations on the following 4 variables.

``education``
    years of education.

``sex``
    a factor with levels ``Male`` and ``Female``.

``agree``
    number of subjects in agreement with the statement.

``disagree``
    number of subjects in disagreement with the statement.

Details
~~~~~~~

The data are from Haberman (1973) and also given in Collett (2003). The
questions here are whether the response of men and women differ.

Source
~~~~~~

S. J. Haberman (1973), The analysis of residuals in cross-classificed
tables. *Biometrics*, **29**, 205–220.

D. Collett (2003), *Modelling Binary Data*. Chapman and Hall / CRC,
London. 2nd edition.

Examples
~~~~~~~~

::


      data("womensrole", package = "HSAUR")
      summary(subset(womensrole, sex == "Female"))
      summary(subset(womensrole, sex == "Male"))

