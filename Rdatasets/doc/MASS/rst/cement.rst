+----------+-------------------+
| cement   | R Documentation   |
+----------+-------------------+

Heat Evolved by Setting Cements
-------------------------------

Description
~~~~~~~~~~~

Experiment on the heat evolved in the setting of each of 13 cements.

Usage
~~~~~

::

    cement

Format
~~~~~~

``x1, x2, x3, x4``
    Proportions (%) of active ingredients.

``y``
    heat evolved in cals/gm.

Details
~~~~~~~

Thirteen samples of Portland cement were set. For each sample, the
percentages of the four main chemical ingredients was accurately
measured. While the cement was setting the amount of heat evolved was
also measured.

Source
~~~~~~

Woods, H., Steinour, H.H. and Starke, H.R. (1932) Effect of composition
of Portland cement on heat evolved during hardening. *Industrial
Engineering and Chemistry*, **24**, 1207–1214.

References
~~~~~~~~~~

Hald, A. (1957) *Statistical Theory with Engineering Applications.*
Wiley, New York.

Examples
~~~~~~~~

::

    lm(y ~ x1 + x2 + x3 + x4, cement)

