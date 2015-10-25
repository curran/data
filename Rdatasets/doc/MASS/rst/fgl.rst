+-------+-------------------+
| fgl   | R Documentation   |
+-------+-------------------+

Measurements of Forensic Glass Fragments
----------------------------------------

Description
~~~~~~~~~~~

The ``fgl`` data frame has 214 rows and 10 columns. It was collected by
B. German on fragments of glass collected in forensic work.

Usage
~~~~~

::

    fgl

Format
~~~~~~

This data frame contains the following columns:

``RI``
    refractive index; more precisely the refractive index is 1.518xxxx.

    The next 8 measurements are percentages by weight of oxides.

``Na``
    sodium.

``Mg``
    manganese.

``Al``
    aluminium.

``Si``
    silicon.

``K``
    potassium.

``Ca``
    calcium.

``Ba``
    barium.

``Fe``
    iron.

``type``
    The fragments were originally classed into seven types, one of which
    was absent in this dataset. The categories which occur are window
    float glass (``WinF``: 70), window non-float glass (``WinNF``: 76),
    vehicle window glass (``Veh``: 17), containers (``Con``: 13),
    tableware (``Tabl``: 9) and vehicle headlamps (``Head``: 29).

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (2002) *Modern Applied Statistics with
S.* Fourth edition. Springer.
