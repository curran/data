+-------------+-------------------+
| roomwidth   | R Documentation   |
+-------------+-------------------+

Students Estimates of Lecture Room Width
----------------------------------------

Description
~~~~~~~~~~~

Lecture room width estimated by students in two different units.

Usage
~~~~~

::

    data("roomwidth")

Format
~~~~~~

A data frame with 113 observations on the following 2 variables.

unit
    a factor with levels ``feet`` and ``metres``.

width
    the estimated width of the lecture room.

Details
~~~~~~~

Shortly after metric units of length were officially introduced in
Australia, each of a group of 44 students was asked to guess, to the
nearest metre, the width of the lecture hall in which they were sitting.
Another group of 69 students in the same room was asked to guess the
width in feet, to the nearest foot. The data were collected by Professor
T. Lewis and are taken from Hand et al (1994). The main question is
whether estimation in feet and in metres gives different results.

Source
~~~~~~

D. J. Hand, F. Daly, A. D. Lunn, K. J. McConway and E. Ostrowski (1994).
*A Handbook of Small Datasets*, Chapman and Hall/CRC, London.

Examples
~~~~~~~~

::


      data("roomwidth", package = "HSAUR")
      convert <- ifelse(roomwidth$unit == "feet", 1, 3.28)
      boxplot(I(width * convert) ~ unit, data = roomwidth)

