+----------+-------------------+
| CYGOB1   | R Documentation   |
+----------+-------------------+

CYG OB1 Star Cluster Data
-------------------------

Description
~~~~~~~~~~~

Energy output and surface termperature for Star Cluster CYG OB1.

Usage
~~~~~

::

    data("CYGOB1")

Format
~~~~~~

A data frame with 47 observations on the following 2 variables.

``logst``
    log survface termperature of the star.

``logli``
    log light intensity of the star.

Details
~~~~~~~

The Hertzsprung-Russell (H-R) diagram forms the basis of the theory of
stellar evolution. The diagram is essentially a plot of the energy
output of stars plotted against their surface temperature. Data from the
H-R diagram of Star Cluster CYG OB1, calibrated according to
VanismaGreve1972 are given here.

Source
~~~~~~

F. Vanisma and J. P. De Greve (1972), Close binary systems before and
after mass transfer. *Astrophysics and Space Science*, **87**, 377–401.

D. J. Hand, F. Daly, A. D. Lunn, K. J. McConway and E. Ostrowski (1994).
*A Handbook of Small Datasets*, Chapman and Hall/CRC, London.

Examples
~~~~~~~~

::


      data("CYGOB1", package = "HSAUR")
      plot(logst ~ logli, data = CYGOB1)

