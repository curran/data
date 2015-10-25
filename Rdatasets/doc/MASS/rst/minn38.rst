+----------+-------------------+
| minn38   | R Documentation   |
+----------+-------------------+

Minnesota High School Graduates of 1938
---------------------------------------

Description
~~~~~~~~~~~

The Minnesota high school graduates of 1938 were classified according to
four factors, described below. The ``minn38`` data frame has 168 rows
and 5 columns.

Usage
~~~~~

::

    minn38

Format
~~~~~~

This data frame contains the following columns:

``hs``
    high school rank: ``"L"``, ``"M"`` and ``"U"`` for lower, middle and
    upper third.

``phs``
    post high school status: Enrolled in college, (``"C"``), enrolled in
    non-collegiate school, (``"N"``), employed full-time, (``"E"``) and
    other, (``"O"``).

``fol``
    father's occupational level, (seven levels, ``"F1"``, ``"F2"``, ...,
    ``"F7"``).

``sex``
    sex: factor with levels\ ``"F"`` or ``"M"``.

``f``
    frequency.

Source
~~~~~~

From R. L. Plackett, (1974) *The Analysis of Categorical Data.* London:
Griffin

who quotes the data from

Hoyt, C. J., Krishnaiah, P. R. and Torrance, E. P. (1959) Analysis of
complex contingency tables, *J. Exp. Ed.* **27**, 187–194.
