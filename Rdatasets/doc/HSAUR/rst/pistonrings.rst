+---------------+-------------------+
| pistonrings   | R Documentation   |
+---------------+-------------------+

Piston Rings Failures
---------------------

Description
~~~~~~~~~~~

Number of failures of piston rings in three legs of four steam-driven
compressors.

Usage
~~~~~

::

    data("pistonrings")

Format
~~~~~~

A two-way classification, see ``table``.

Details
~~~~~~~

The data are given in form of a ``table``. The table gives the number of
piston-ring failures in each of three legs of four steam-driven
compressors located in the same building. The compressors have identical
design and are oriented in the same way. The question of interest is
whether the two classification variables (compressor and leg) are
independent.

Source
~~~~~~

S. J. Haberman (1973), The analysis of residuals in cross-classificed
tables. *Biometrics* **29**, 205–220.

Examples
~~~~~~~~

::

      
      data("pistonrings", package = "HSAUR")
      mosaicplot(pistonrings)

