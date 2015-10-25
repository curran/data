+-----------+-------------------+
| condroz   | R Documentation   |
+-----------+-------------------+

Condroz Data
------------

Description
~~~~~~~~~~~

Dataset with pH-value and Calcium content in soil samples, collected in
different communities of the Condroz region in Belgium. The data pertain
to a subset of 428 samples with a pH-value between 7.0 and 7.5.

Usage
~~~~~

::

    data(condroz)

Format
~~~~~~

A data frame with 428 observations on the following 2 variables.

``Ca``
    Calcium content of the soil sample

``pH``
    pH value of the soil sample

Details
~~~~~~~

For more information on the dataset, cf. Goegebeur et al. (2005).

Source
~~~~~~

Hubert and Vandervieren (2006), p. 10. This dataset is also studied in
Vandewalle et al. (2004).

References
~~~~~~~~~~

Goegebeur, Y., Planchon, V., Beirlant, J., Oger, R. (2005). Quality
Assesment of Pedochemical Data Using Extreme Value Methodology, Journal
of Applied Science, 5, p. 1092-1102.

Hubert, M. and Vandervieren, E. (2006). An Adjusted Boxplot for Skewed
Distributions, Technical Report TR-06-11, KULeuven, Section of
Statistics, Leuven.
`http://wis.kuleuven.be/stat/robust/Papers/TR0611.pdf <http://wis.kuleuven.be/stat/robust/Papers/TR0611.pdf>`__

Vandewalle, B., Beirlant, J., Hubert, M. (2004). A robust estimator of
the tail index based on an exponential regression model, in Hubert, M.,
Pison G., Struyf, A. and S. Van Aelst, ed., Theory and Applications of
Recent Robust Methods, Birkhäuser, Basel, p. 367-376.

Examples
~~~~~~~~

::

      adjbox(condroz$Ca)

