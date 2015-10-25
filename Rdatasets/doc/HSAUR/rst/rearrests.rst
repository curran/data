+-------------+-------------------+
| rearrests   | R Documentation   |
+-------------+-------------------+

Rearrests of Juvenile Felons
----------------------------

Description
~~~~~~~~~~~

Rearrests of juventile felons by type of court in which they were tried.

Usage
~~~~~

::

    data("rearrests")

Format
~~~~~~

A two-way classification, see ``table``.

Details
~~~~~~~

The data (taken from Agresti, 1996) arise from a sample of juveniles
convicted of felony in Florida in 1987. Matched pairs were formed using
criteria such as age and the number of previous offences. For each pair,
one subject was handled in the juvenile court and the other was
transferred to the adult court. Whether or not the juvenile was
rearrested by the end of 1988 was then noted. Here the question of
interest is whether the true proportions rearrested were identical for
the adult and juvenile court assignments?

Source
~~~~~~

A. Agresti (1996). *An Introduction to Categorical Data Analysis*.
Wiley, New York.

Examples
~~~~~~~~

::


      data("rearrests", package = "HSAUR")
      rearrests

