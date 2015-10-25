+------------+-------------------+
| pressure   | R Documentation   |
+------------+-------------------+

Vapor Pressure of Mercury as a Function of Temperature
------------------------------------------------------

Description
~~~~~~~~~~~

Data on the relation between temperature in degrees Celsius and vapor
pressure of mercury in millimeters (of mercury).

Usage
~~~~~

::

    pressure

Format
~~~~~~

A data frame with 19 observations on 2 variables.

+---------+---------------+-----------+-----------------------+
| [, 1]   | temperature   | numeric   | temperature (deg C)   |
+---------+---------------+-----------+-----------------------+
| [, 2]   | pressure      | numeric   | pressure (mm)         |
+---------+---------------+-----------+-----------------------+

Source
~~~~~~

Weast, R. C., ed. (1973) *Handbook of Chemistry and Physics*. CRC Press.

References
~~~~~~~~~~

McNeil, D. R. (1977) *Interactive Data Analysis*. New York: Wiley.

Examples
~~~~~~~~

::

    require(graphics)
    plot(pressure, xlab = "Temperature (deg C)",
         ylab = "Pressure (mm of Hg)",
         main = "pressure data: Vapor Pressure of Mercury")
    plot(pressure, xlab = "Temperature (deg C)",  log = "y",
         ylab = "Pressure (mm of Hg)",
         main = "pressure data: Vapor Pressure of Mercury")

