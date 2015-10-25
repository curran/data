+--------------+-------------------+
| schooldays   | R Documentation   |
+--------------+-------------------+

Days not Spent at School
------------------------

Description
~~~~~~~~~~~

Data from a sociological study, the number of days absent from school is
the response variable.

Usage
~~~~~

::

    data("schooldays")

Format
~~~~~~

A data frame with 154 observations on the following 5 variables.

``race``
    race of the child, a factor with levels ``aboriginal`` and
    ``non-aboriginal``.

``sex``
    the sex of the child, a factor with levels ``female`` and ``male``.

``school``
    the school type, a factor with levels ``F0`` (primary), ``F1``
    (first), ``F2`` (second) and ``F3`` (third form).

``learner``
    how good is the child in learning things, a factor with levels
    ``average`` and ``slow``.

``absent``
    number of days absent from school.

Details
~~~~~~~

The data arise from a sociological study of Australian Aboriginal and
white children reported by Quine (1975).

In this study, children of both sexes from four age groups (final grade
in primary schools and first, second and third form in secondary school)
and from two cultural groups were used. The children in age group were
classified as slow or average learners. The response variable was the
number of days absent from school during the school year. (Children who
had suffered a serious illness during the years were excluded.)

Source
~~~~~~

S. Quine (1975), Achievement Orientation of Aboriginal and White
Adolescents. Doctoral Dissertation, Australian National University,
Canberra.

Examples
~~~~~~~~

::


      data("schooldays", package = "HSAUR")
      plot.design(schooldays)

