+----------------+-------------------+
| SupremeCourt   | R Documentation   |
+----------------+-------------------+

U.S. Supreme Court Vote Matrix
------------------------------

Description
~~~~~~~~~~~

This dataframe contains a matrix votes cast by U.S. Supreme Court
justices in all cases in the 2000 term.

Usage
~~~~~

::

    data(SupremeCourt)

Format
~~~~~~

The dataframe has contains data for justices Rehnquist, Stevens,
O'Connor, Scalia, Kennedy, Souter, Thomas, Ginsburg, and Breyer for the
2000 term of the U.S. Supreme Court. It contains data from 43
non-unanimous cases. The votes are coded liberal (1) and conservative
(0) using the protocol of Spaeth (2003). The unit of analysis is the
case citation (ANALU=0). We are concerned with formally decided cases
issued with written opinions, after full oral argument and cases decided
by an equally divided vote (DECTYPE=1,5,6,7).

Source
~~~~~~

Harold J. Spaeth (2005). “Original United States Supreme Court Database:
1953-2004 Terms.”
<URL:http://www.as.uky.edu/polisci/ulmerproject/sctdata.htm>.
