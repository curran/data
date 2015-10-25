+-------+-------------------+
| co2   | R Documentation   |
+-------+-------------------+

Mauna Loa Atmospheric CO2 Concentration
---------------------------------------

Description
~~~~~~~~~~~

Atmospheric concentrations of CO\ *2* are expressed in parts per million
(ppm) and reported in the preliminary 1997 SIO manometric mole fraction
scale.

Usage
~~~~~

::

    co2

Format
~~~~~~

A time series of 468 observations; monthly from 1959 to 1997.

Details
~~~~~~~

The values for February, March and April of 1964 were missing and have
been obtained by interpolating linearly between the values for January
and May of 1964.

Source
~~~~~~

Keeling, C. D. and Whorf, T. P., Scripps Institution of Oceanography
(SIO), University of California, La Jolla, California USA 92093-0220.

`ftp://cdiac.esd.ornl.gov/pub/maunaloa-co2/maunaloa.co2 <ftp://cdiac.esd.ornl.gov/pub/maunaloa-co2/maunaloa.co2>`__.

References
~~~~~~~~~~

Cleveland, W. S. (1993) *Visualizing Data*. New Jersey: Summit Press.

Examples
~~~~~~~~

::

    require(graphics)
    plot(co2, ylab = expression("Atmospheric concentration of CO"[2]),
         las = 1)
    title(main = "co2 data set")

