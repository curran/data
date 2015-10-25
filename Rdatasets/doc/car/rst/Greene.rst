+----------+-------------------+
| Greene   | R Documentation   |
+----------+-------------------+

Refugee Appeals
---------------

Description
~~~~~~~~~~~

The ``Greene`` data frame has 384 rows and 7 columns. These are cases
filed in 1990, in which refugee claimants rejected by the Canadian
Immigration and Refugee Board asked the Federal Court of Appeal for
leave to appeal the negative ruling of the Board.

Usage
~~~~~

::

    Greene

Format
~~~~~~

This data frame contains the following columns:

judge
    Name of judge hearing case. A factor with levels: ``Desjardins``,
    ``Heald``, ``Hugessen``, ``Iacobucci``, ``MacGuigan``, ``Mahoney``,
    ``Marceau``, ``Pratte``, ``Stone``, ``Urie``.

nation
    Nation of origin of claimant. A factor with levels: ``Argentina``,
    ``Bulgaria``, ``China``, ``Czechoslovakia``, ``El.Salvador``,
    ``Fiji``, ``Ghana``, ``Guatemala``, ``India``, ``Iran``,
    ``Lebanon``, ``Nicaragua``, ``Nigeria``, ``Pakistan``, ``Poland``,
    ``Somalia``, ``Sri.Lanka``.

rater
    Judgment of independent rater. A factor with levels: ``no``, case
    has no merit; ``yes``, case has some merit (leave to appeal should
    be granted).

decision
    Judge's decision. A factor with levels: ``no``, leave to appeal not
    granted; ``yes``, leave to appeal granted.

language
    Language of case. A factor with levels: ``English``, ``French``.

location
    Location of original refugee claim. A factor with levels:
    ``Montreal``, ``other``, ``Toronto``.

success
    Logit of success rate, for all cases from the applicant's nation.

Source
~~~~~~

Personal communication from Ian Greene, Department of Political Science,
York University.

References
~~~~~~~~~~

Fox, J. (2008) *Applied Regression Analysis and Generalized Linear
Models*, Second Edition. Sage.
