+-----------+-------------------+
| Suicide   | R Documentation   |
+-----------+-------------------+

Suicide Rates in Germany
------------------------

Description
~~~~~~~~~~~

Data from Heuer (1979) on suicide rates in West Germany classified by
age, sex, and method of suicide.

Usage
~~~~~

::

    data("Suicide")

Format
~~~~~~

A data frame with 306 observations and 6 variables.

Freq
    frequency of suicides.

sex
    factor indicating sex (male, female).

method
    factor indicating method used.

age
    age (rounded).

age.group
    factor. Age classified into 5 groups.

method2
    factor indicating method used (same as ``method`` but some levels
    are merged).

Source
~~~~~~

Michael Friendly (2000), Visualizing Categorical Data:
`http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/suicide.sas <http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/suicide.sas>`__

References
~~~~~~~~~~

J. Heuer (1979), *Selbstmord bei Kindern und Jugendlichen*. Ernst Klett
Verlag, Stuttgart.

M. Friendly (2000), *Visualizing Categorical Data*. SAS Institute, Cary,
NC.

Examples
~~~~~~~~

::

    data("Suicide")
    structable(~ sex + method2 + age.group, data = Suicide)

