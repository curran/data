+--------+-------------------+
| rats   | R Documentation   |
+--------+-------------------+

Rat treatment data from Mantel et al
------------------------------------

Description
~~~~~~~~~~~

Rat treatment data from Mantel et al. Three rats were chosen from each
of 100 litters, one of which was treated with a drug, and then all
followed for tumor incidence.

Usage
~~~~~

::

    rats

Format
~~~~~~

+-----------+----------------------------------------+
| litter:   | litter number from 1 to 100            |
+-----------+----------------------------------------+
| rx:       | treatment,(1=drug, 0=control)          |
+-----------+----------------------------------------+
| time:     | time to tumor or last follow-up        |
+-----------+----------------------------------------+
| status:   | event status, 1=tumor and 0=censored   |
+-----------+----------------------------------------+
| sex:      | male or female                         |
+-----------+----------------------------------------+

Note
~~~~

The subset of females (odd numbered litters) was used Lee et al.

Source
~~~~~~

N. R. Bohidar and J. L. Ciminera. Mantel-Haenszel analyses of
litter-matched time to response data, with modifications for recovery of
interlitter information. Cancer Research, 37:3863-3868, 1977. 5

References
~~~~~~~~~~

E. W. Lee, L. J. Wei, and D. Amato, Cox-type regression analysis for
large number of small groups of correlated failure time observations, in
"Survival Analysis, State of the Art", Kluwer, 1992.
