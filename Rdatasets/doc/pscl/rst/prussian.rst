+------------+-------------------+
| prussian   | R Documentation   |
+------------+-------------------+

Prussian army horse kick data
-----------------------------

Description
~~~~~~~~~~~

Deaths by year, by corp, from horse kicks.

Usage
~~~~~

::

    data(prussian)

Format
~~~~~~

A data frame with 280 observations on the following 3 variables.

``y``
    a numeric vector, count of deaths

``year``
    a numeric vector, 18XX, year of observation

``corp``
    a ``factor``, corp of Prussian Army generating observation

Source
~~~~~~

von Bortkiewicz, L. 1898. *Das Gesetz der Kleinen Zahlen.* Leipzig:
Teubner.

Examples
~~~~~~~~

::

    data(prussian)
    corpP <- glm(y ~ corp, family=poisson,data=prussian)
    summary(corpP)

