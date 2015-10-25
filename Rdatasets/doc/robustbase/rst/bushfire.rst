+------------+-------------------+
| bushfire   | R Documentation   |
+------------+-------------------+

Campbell Bushfire Data
----------------------

Description
~~~~~~~~~~~

This data set was used by Campbell (1984) to locate bushfire scars. The
dataset contains satelite measurements on five frequency bands,
corresponding to each of 38 pixels.

Usage
~~~~~

::

    data(bushfire)

Format
~~~~~~

A data frame with 38 observations on 5 variables.

Source
~~~~~~

Maronna, R.A. and Yohai, V.J. (1995) The Behavoiur of the Stahel-Donoho
Robust Multivariate Estimator. *Journal of the American Statistical
Association* **90**, 330–341.

Examples
~~~~~~~~

::

    data(bushfire)
    plot(bushfire)
    covMcd(bushfire)

