+--------------------------+-------------------+
| summer and winter data   | R Documentation   |
+--------------------------+-------------------+

Air pollution data, separately for summer and winter months
-----------------------------------------------------------

Description
~~~~~~~~~~~

Air pollution data from Leeds (U.K.) city centre, collected from 1994 to
1998. The ``summer`` data set corresponds to the months of April to July
inclusive. The ``winter`` data set corresponds to the months of November
to February inclusive. Some outliers have been removed, as discussed by
Heffernan and Tawn, 2004.

Usage
~~~~~

::

    data(summer)
    data(winter)

Format
~~~~~~

Data frames with 578 (summer) and 532 (winter) observations on the
following 5 variables.

``O3``
    Daily maximum ozone in parts per billion.

``NO2``
    Daily maximum NO2 in parts per billion.

``NO``
    Daily maximum NO in parts per billion.

``SO2``
    Daily maximum SO2 in parts per billion.

``PM10``
    Daily maximum PM10 in micrograms/metre^3

Source
~~~~~~

Provided as online supplementary material to Heffernan and Tawn, 2004:

http://www.blackwellpublishing.com/rss/Readmefiles/heffernan.htm

References
~~~~~~~~~~

J. E. Heffernan and J. A. Tawn, A conditional approach for multivariate
extreme values, Journal of the Royal Statistical society B, 66, 497 –
546, 2004

Examples
~~~~~~~~

::

    data(summer)
    data(winter)

