+------------+-------------------+
| Hospital   | R Documentation   |
+------------+-------------------+

Hospital data
-------------

Description
~~~~~~~~~~~

The table relates the length of stay (in years) of 132 long-term
schizophrenic patients in two London mental hospitals with the frequency
of visits.

Usage
~~~~~

::

    data("Hospital")

Format
~~~~~~

A 2-dimensional array resulting from cross-tabulating 132 patients. The
variables and their levels are as follows:

+------+-------------------+---------------------------------------+
| No   | Name              | Levels                                |
+------+-------------------+---------------------------------------+
| 1    | Visit Frequency   | Regular, Less than monthly, Never     |
+------+-------------------+---------------------------------------+
| 2    | Length of Stay    | 2--9 years, 10--19 years, 20+ years   |
+------+-------------------+---------------------------------------+

Details
~~~~~~~

Wing (1962) who collected this data concludes that the longer the length
of stay in hospital, the less frequent the visits.

Haberman (1974) notes that this pattern does not increase from the "Less
than monthly" to the "Never" group, which are homogeneous.

Source
~~~~~~

S.J Haberman (1974): Log-linear models for frequency tables with ordered
classifications. Biometrics, 30:689–700.

References
~~~~~~~~~~

J.K. Wing (1962): Institutionalism in mental hospitals. British Journal
of Social Clinical Psychology, 1:38–51.

Examples
~~~~~~~~

::

    data("Hospital")

    mosaic(t(Hospital), shade = TRUE)
    mosaic(Hospital, shade = TRUE)
    sieve(Hospital, shade = TRUE)
    assoc(Hospital, shade = TRUE)

