+----------+-------------------+
| wtloss   | R Documentation   |
+----------+-------------------+

Weight Loss Data from an Obese Patient
--------------------------------------

Description
~~~~~~~~~~~

The data frame gives the weight, in kilograms, of an obese patient at 52
time points over an 8 month period of a weight rehabilitation programme.

Usage
~~~~~

::

    wtloss

Format
~~~~~~

This data frame contains the following columns:

``Days``
    time in days since the start of the programme.

``Weight``
    weight in kilograms of the patient.

Source
~~~~~~

Dr T. Davies, Adelaide.

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (2002) *Modern Applied Statistics with
S.* Fourth edition. Springer.

Examples
~~~~~~~~

::

    wtloss.fm <- nls(Weight ~ b0 + b1*2^(-Days/th),
        data = wtloss, start = list(b0=90, b1=95, th=120))
    wtloss.fm
    plot(wtloss)
    with(wtloss, lines(Days, fitted(wtloss.fm)))

