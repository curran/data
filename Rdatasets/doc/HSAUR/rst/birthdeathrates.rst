+-------------------+-------------------+
| birthdeathrates   | R Documentation   |
+-------------------+-------------------+

Birth and Death Rates Data
--------------------------

Description
~~~~~~~~~~~

Birth and death rates for 69 countries.

Usage
~~~~~

::

    data("birthdeathrates")

Format
~~~~~~

A data frame with 69 observations on the following 2 variables.

``birth``
    birth rate.

``death``
    death rate.

Source
~~~~~~

J. A. Hartigan (1975), *Clustering Algorithms*. John Wiley & Sons, New
York.

Examples
~~~~~~~~

::


      data("birthdeathrates", package = "HSAUR")
      plot(birthdeathrates)

