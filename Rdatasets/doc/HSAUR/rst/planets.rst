+-----------+-------------------+
| planets   | R Documentation   |
+-----------+-------------------+

Exoplanets Data
---------------

Description
~~~~~~~~~~~

Data on planets outside the Solar System.

Usage
~~~~~

::

    data("planets")

Format
~~~~~~

A data frame with 101 observations from 101 exoplanets on the following
3 variables.

mass
    Jupiter mass of the planet.

period
    period in earth days.

eccen
    the radial eccentricity of the planet.

Details
~~~~~~~

From the properties of the exoplanets found up to now it appears that
the theory of planetary development constructed for the planets of the
Solar System may need to be reformulated. The exoplanets are not at all
like the nine local planets that we know so well. A first step in the
process of understanding the exoplanets might be to try to classify them
with respect to their known properties.

Source
~~~~~~

M. Mayor and P. Frei (2003). *New Worlds in the Cosmos: The Discovery of
Exoplanets*. Cambridge University Press, Cambridge, UK.

Examples
~~~~~~~~

::


      data("planets", package = "HSAUR")
      require("scatterplot3d")
      scatterplot3d(log(planets$mass), log(planets$period), log(planets$eccen), 
                    type = "h", highlight.3d = TRUE,  angle = 55, 
                    scale.y = 0.7, pch = 16)

