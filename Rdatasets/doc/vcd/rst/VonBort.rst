+-----------+-------------------+
| VonBort   | R Documentation   |
+-----------+-------------------+

Von Bortkiewicz Horse Kicks Data
--------------------------------

Description
~~~~~~~~~~~

Data from von Bortkiewicz (1898), given by Andrews \\& Herzberg (1985),
on number of deaths by horse or mule kicks in 14 corps of the Prussian
army.

Usage
~~~~~

::

    data("VonBort")

Format
~~~~~~

A data frame with 280 observations and 4 variables.

deaths
    number of deaths.

year
    year of the deaths.

corps
    factor indicating the corps.

fisher
    factor indicating whether the corresponding corps was considered by
    Fisher (1925) or not.

Source
~~~~~~

Michael Friendly (2000), Visualizing Categorical Data:
`http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/vonbort.sas <http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/vonbort.sas>`__

References
~~~~~~~~~~

D. F. Andrews \\& A. M. Herzberg (1985), *Data: A Collection of Problems
from Many Fields for the Student and Research Worker*. Springer-Verlag,
New York, NY.

R. A. Fisher (1925), *Statistical Methods for Research Workers*. Oliver
& Boyd, London.

L. von Bortkiewicz (1898), *Das Gesetz der kleinen Zahlen*. Teubner,
Leipzig.

M. Friendly (2000), *Visualizing Categorical Data*. SAS Institute, Cary,
NC.

See Also
~~~~~~~~

``HorseKicks`` for a popular subsample.

Examples
~~~~~~~~

::

    data("VonBort")
    ## HorseKicks data
    xtabs(~ deaths, data = VonBort, subset = fisher == "yes")

