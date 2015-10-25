+----------+-------------------+
| attenu   | R Documentation   |
+----------+-------------------+

The Joyner–Boore Attenuation Data
---------------------------------

Description
~~~~~~~~~~~

This data gives peak accelerations measured at various observation
stations for 23 earthquakes in California. The data have been used by
various workers to estimate the attenuating affect of distance on ground
acceleration.

Usage
~~~~~

::

    attenu

Format
~~~~~~

A data frame with 182 observations on 5 variables.

+--------+-----------+-----------+------------------------------------+
| [,1]   | event     | numeric   | Event Number                       |
+--------+-----------+-----------+------------------------------------+
| [,2]   | mag       | numeric   | Moment Magnitude                   |
+--------+-----------+-----------+------------------------------------+
| [,3]   | station   | factor    | Station Number                     |
+--------+-----------+-----------+------------------------------------+
| [,4]   | dist      | numeric   | Station-hypocenter distance (km)   |
+--------+-----------+-----------+------------------------------------+
| [,5]   | accel     | numeric   | Peak acceleration (g)              |
+--------+-----------+-----------+------------------------------------+

Source
~~~~~~

Joyner, W.B., D.M. Boore and R.D. Porcella (1981). Peak horizontal
acceleration and velocity from strong-motion records including records
from the 1979 Imperial Valley, California earthquake. USGS Open File
report 81-365. Menlo Park, Ca.

References
~~~~~~~~~~

Boore, D. M. and Joyner, W.B.(1982) The empirical prediction of ground
motion, *Bull. Seism. Soc. Am.*, **72**, S269–S268.

Bolt, B. A. and Abrahamson, N. A. (1982) New attenuation relations for
peak and expected accelerations of strong ground motion, *Bull. Seism.
Soc. Am.*, **72**, 2307–2321.

Bolt B. A. and Abrahamson, N. A. (1983) Reply to W. B. Joyner & D. M.
Boore's “Comments on: New attenuation relations for peak and expected
accelerations for peak and expected accelerations of strong ground
motion”, *Bull. Seism. Soc. Am.*, **73**, 1481–1483.

Brillinger, D. R. and Preisler, H. K. (1984) An exploratory analysis of
the Joyner-Boore attenuation data, *Bull. Seism. Soc. Am.*, **74**,
1441–1449.

Brillinger, D. R. and Preisler, H. K. (1984) *Further analysis of the
Joyner-Boore attenuation data*. Manuscript.

Examples
~~~~~~~~

::

    require(graphics)
    ## check the data class of the variables
    sapply(attenu, data.class)
    summary(attenu)
    pairs(attenu, main = "attenu data")
    coplot(accel ~ dist | as.factor(event), data = attenu, show.given = FALSE)
    coplot(log(accel) ~ log(dist) | as.factor(event),
           data = attenu, panel = panel.smooth, show.given = FALSE)

