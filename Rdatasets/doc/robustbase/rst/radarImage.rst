+--------------+-------------------+
| radarImage   | R Documentation   |
+--------------+-------------------+

Satellite Radar Image Data from near Munich
-------------------------------------------

Description
~~~~~~~~~~~

The data were supplied by A. Frery. They are a part of a synthetic
aperture satellite radar image corresponding to a suburb of Munich.
Provided are coordinates and values corresponding to three frequency
bands for each of 1573 pixels.

Usage
~~~~~

::

    data(radarImage)

Format
~~~~~~

A data frame with 1573 observations on the following 5 variables.

``X.coord``
    a numeric vector

``Y.coord``
    a numeric vector

``Band.1``
    a numeric vector

``Band.2``
    a numeric vector

``Band.3``
    a numeric vector

Source
~~~~~~

The website accompanying the MMY-book:
`http://www.wiley.com/legacy/wileychi/robust\_statistics <http://www.wiley.com/legacy/wileychi/robust_statistics>`__

Examples
~~~~~~~~

::

    data(radarImage)
    plot(Y.coord ~ X.coord, data = radarImage)
    ## see outliers
    pairs(radarImage[, 3:5], main = "radarImage (n = 1573)")

