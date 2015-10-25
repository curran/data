+---------+-------------------+
| meteo   | R Documentation   |
+---------+-------------------+

Meteorological Measurements for 11 Years
----------------------------------------

Description
~~~~~~~~~~~

Several meteorological measurements for a period between 1920 and 1931.

Usage
~~~~~

::

    data("meteo")

Format
~~~~~~

A data frame with 11 observations on the following 6 variables.

``year``
    the years.

``rainNovDec``
    rainfall in November and December (mm).

``temp``
    average July temperature.

``rainJuly``
    rainfall in July (mm).

``radiation``
    radiation in July (millilitres of alcohol).

``yield``
    average harvest yield (quintals per hectare).

Details
~~~~~~~

Carry out a principal components analysis of both the covariance matrix
and the correlation matrix of the data and compare the results. Which
set of components leads to the most meaningful interpretation?

Source
~~~~~~

B. S. Everitt and G. Dunn (2001), *Applied Multivariate Data Analysis*,
2nd edition, Arnold, London.

Examples
~~~~~~~~

::


      data("meteo", package = "HSAUR")
      meteo

