+-----------+-------------------+
| Sitka89   | R Documentation   |
+-----------+-------------------+

Growth Curves for Sitka Spruce Trees in 1989
--------------------------------------------

Description
~~~~~~~~~~~

The ``Sitka89`` data frame has 632 rows and 4 columns. It gives repeated
measurements on the log-size of 79 Sitka spruce trees, 54 of which were
grown in ozone-enriched chambers and 25 were controls. The size was
measured eight times in 1989, at roughly monthly intervals.

Usage
~~~~~

::

    Sitka89

Format
~~~~~~

This data frame contains the following columns:

``size``
    measured size (height times diameter squared) of tree, on log scale.

``Time``
    time of measurement in days since 1 January 1988.

``tree``
    number of tree.

``treat``
    either ``"ozone"`` for an ozone-enriched chamber or ``"control"``.

Source
~~~~~~

P. J. Diggle, K.-Y. Liang and S. L. Zeger (1994) *Analysis of
Longitudinal Data.* Clarendon Press, Oxford

See Also
~~~~~~~~

``Sitka``
