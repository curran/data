+--------------+-------------------+
| weightgain   | R Documentation   |
+--------------+-------------------+

Gain in Weight of Rats
----------------------

Description
~~~~~~~~~~~

The data arise from an experiment to study the gain in weight of rats
fed on four different diets, distinguished by amount of protein (low and
high) and by source of protein (beef and cereal).

Usage
~~~~~

::

    data("weightgain")

Format
~~~~~~

A data frame with 40 observations on the following 3 variables.

``source``
    source of protein given, a factor with levels ``Beef`` and
    ``Cereal``.

``type``
    amount of protein given, a factor with levels ``High`` and ``Low``.

``weightgain``
    weigt gain in grams.

Details
~~~~~~~

Ten rats are randomized to each of the four treatments. The question of
interest is how diet affects weight gain.

Source
~~~~~~

D. J. Hand, F. Daly, A. D. Lunn, K. J. McConway and E. Ostrowski (1994).
*A Handbook of Small Datasets*, Chapman and Hall/CRC, London.

Examples
~~~~~~~~

::


      data("weightgain", package = "HSAUR")
      interaction.plot(weightgain$type, weightgain$source, 
                       weightgain$weightgain)

