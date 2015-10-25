+-----------+-------------------+
| shuttle   | R Documentation   |
+-----------+-------------------+

Space Shuttle Autolander Problem
--------------------------------

Description
~~~~~~~~~~~

The ``shuttle`` data frame has 256 rows and 7 columns. The first six
columns are categorical variables giving example conditions; the seventh
is the decision. The first 253 rows are the training set, the last 3 the
test conditions.

Usage
~~~~~

::

    shuttle

Format
~~~~~~

This data frame contains the following factor columns:

``stability``
    stable positioning or not (``stab`` / ``xstab``).

``error``
    size of error (``MM`` / ``SS`` / ``LX`` / ``XL``).

``sign``
    sign of error, positive or negative (``pp`` / ``nn``).

``wind``
    wind sign (``head`` / ``tail``).

``magn``
    wind strength (``Light`` / ``Medium`` / ``Strong`` /
    ``Out of Range``).

``vis``
    visibility (``yes`` / ``no``).

``use``
    use the autolander or not. (``auto`` / ``noauto``.)

Source
~~~~~~

D. Michie (1989) Problems of computer-aided concept formation. In
*Applications of Expert Systems 2*, ed. J. R. Quinlan, Turing Institute
Press / Addison-Wesley, pp. 310–333.

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (2002) *Modern Applied Statistics with
S.* Fourth edition. Springer.
