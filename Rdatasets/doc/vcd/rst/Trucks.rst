+----------+-------------------+
| Trucks   | R Documentation   |
+----------+-------------------+

Truck Accidents Data
--------------------

Description
~~~~~~~~~~~

Data from a study in England in two periods from November 1969 to
October 1971 and November 1971 to October 1973. A new compulsory safety
measure for trucks was introduced in October 1971. Therefore, the
question is whether the safety measure had an effect on the number of
accidents and on the point of collision on the truck.

Usage
~~~~~

::

    data("Trucks")

Format
~~~~~~

A data frame with 24 observations on 5 variables.

Freq
    frequency of accidents involving trucks.

period
    factor indicating time period (before, after) 1971-11-01.

collision
    factor indicating whether the collision was in the back or forward
    (including the front and the sides) of the truck (back, forward).

parked
    factor indicating whether the truck was parked (yes, no).

light
    factor indicating light conditions: day light (daylight), night on
    an illuminated road (night, illuminate), night on a dark road
    (night, dark).

Source
~~~~~~

E. B. Andersen (1991), The Statistical Analysis of Categorical Data,
Table 6.8.

References
~~~~~~~~~~

E. B. Andersen (1991), *The Statistical Analysis of Categorical Data*.
2nd edition. Springer-Verlag, Berlin.

Examples
~~~~~~~~

::

    library(MASS)
    data("Trucks")
    tab <- xtabs(Freq ~ period + collision + light + parked, data = Trucks)
    loglm(~ (collision + period) * parked * light, data = tab)
    doubledecker(collision ~ parked + light + period, data = tab)
    cotabplot(tab, panel = cotab_coindep)

