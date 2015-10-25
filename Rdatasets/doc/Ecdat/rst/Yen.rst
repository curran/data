+-------+-------------------+
| Yen   | R Documentation   |
+-------+-------------------+

Yen-dollar Exchange Rate
------------------------

Description
~~~~~~~~~~~

weekly observations from 1975 to 1989

*number of observations* : 778

*observation* : country

*country* : Japan

Usage
~~~~~

::

    data(Yen)

Format
~~~~~~

A dataframe containing :

date
    the date of the observation (19850104 is January, 4, 1985)

s
    the ask price of the dollar in units of Yen in the spot market on
    friday of the current week

f
    the ask price of the dollar in units of Yen in the 30-day forward
    market on friday of the current week

s30
    the bid price of the dollar in units of Yen in the spot market on
    the delivery date on a current forward contract

Source
~~~~~~

Bekaert, G. and R. Hodrick (1993) “On biases in the measurement of
foreign exchange risk premiums”, *Journal of International Money and
Finance*, **12**, 115-138.

References
~~~~~~~~~~

Hayashi, F. (2000) *Econometrics*, Princeton University Press,
`http://www.e.u-tokyo.ac.jp/~hayashi/hayashi\_econometrics.htm <http://www.e.u-tokyo.ac.jp/~hayashi/hayashi_econometrics.htm>`__,
chapter 6, 438-443.

See Also
~~~~~~~~

``Index.Source``, ``Index.Economics``, ``Index.Econometrics``,
``Index.Observations``,

``Index.Time.Series``
