+-----------+-------------------+
| stormer   | R Documentation   |
+-----------+-------------------+

The Stormer Viscometer Data
---------------------------

Description
~~~~~~~~~~~

The stormer viscometer measures the viscosity of a fluid by measuring
the time taken for an inner cylinder in the mechanism to perform a fixed
number of revolutions in response to an actuating weight. The viscometer
is calibrated by measuring the time taken with varying weights while the
mechanism is suspended in fluids of accurately known viscosity. The data
comes from such a calibration, and theoretical considerations suggest a
nonlinear relationship between time, weight and viscosity, of the form
``Time = (B1*Viscosity)/(Weight - B2) + E`` where ``B1`` and ``B2`` are
unknown parameters to be estimated, and ``E`` is error.

Usage
~~~~~

::

    stormer

Format
~~~~~~

The data frame contains the following components:

``Viscosity``
    viscosity of fluid.

``Wt``
    actuating weight.

``Time``
    time taken.

Source
~~~~~~

E. J. Williams (1959) *Regression Analysis.* Wiley.

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (2002) *Modern Applied Statistics with
S.* Fourth edition. Springer.
