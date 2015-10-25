+--------+-------------------+
| amis   | R Documentation   |
+--------+-------------------+

Car Speeding and Warning Signs
------------------------------

Description
~~~~~~~~~~~

The ``amis`` data frame has 8437 rows and 4 columns.

In a study into the effect that warning signs have on speeding patterns,
Cambridgeshire County Council considered 14 pairs of locations. The
locations were paired to account for factors such as traffic volume and
type of road. One site in each pair had a sign erected warning of the
dangers of speeding and asking drivers to slow down. No action was taken
at the second site. Three sets of measurements were taken at each site.
Each set of measurements was nominally of the speeds of 100 cars but not
all sites have exactly 100 measurements. These speed measurements were
taken before the erection of the sign, shortly after the erection of the
sign, and again after the sign had been in place for some time.

Usage
~~~~~

::

    amis

Format
~~~~~~

This data frame contains the following columns:

``speed``
    Speeds of cars (in miles per hour).

``period``
    A numeric column indicating the time that the reading was taken. A
    value of 1 indicates a reading taken before the sign was erected, a
    2 indicates a reading taken shortly after erection of the sign and a
    3 indicates a reading taken after the sign had been in place for
    some time.

``warning``
    A numeric column indicating whether the location of the reading was
    chosen to have a warning sign erected. A value of 1 indicates
    presence of a sign and a value of 2 indicates that no sign was
    erected.

``pair``
    A numeric column giving the pair number at which the reading was
    taken. Pairs were numbered from 1 to 14.

Source
~~~~~~

The data were kindly made available by Mr. Graham Amis, Cambridgeshire
County Council, U.K.

References
~~~~~~~~~~

Davison, A.C. and Hinkley, D.V. (1997) *Bootstrap Methods and Their
Application*. Cambridge University Press.
