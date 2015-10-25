+----------------+-------------------+
| wagnerGrowth   | R Documentation   |
+----------------+-------------------+

Wagner's Hannover Employment Growth Data
----------------------------------------

Description
~~~~~~~~~~~

Wagner (1994) investigates the rate of employment growth (``y``) as
function of percentage of people engaged in **p**\ roducation
**a**\ ctivities (``PA``) and **h**\ igher **s**\ ervices (``HS``) and
of the **g**\ rowth of these percentages (``GPA``, ``GHS``) during three
time periods in 21 geographical regions of the greater Hannover area.

Usage
~~~~~

::

    data(wagnerGrowth)

Format
~~~~~~

A data frame with *21 \* 3 = 63* observations (one per
``Region x Period``) on the following 7 variables.

``Region``
    a ``factor`` with 21 levels, denoting the corresponding region in
    Hannover (conceptually a “block factor”).

``PA``
    numeric: percent of people involved in production activities.

``GPA``
    **g**\ rowth of ``PA``.

``HS``
    a numeric vector

``GHS``
    a numeric vector

``y``
    a numeric vector

``Period``
    a ``factor`` with levels ``1:3``, denoting the time period, 1 =
    1979-1982, 2 = 1983-1988, 3 = 1989-1992.

Source
~~~~~~

Hubert, M. and Rousseeuw, P. J. (1997). Robust regression with both
continuous and binary regressors, *Journal of Statistical Planning and
Inference* **57**, 153–163.

References
~~~~~~~~~~

Wagner J. (1994). Regionale Beschäftigungsdynamik und höherwertige
Produktionsdienste: Ergebnisse für den Grossraum Hannover (1979-1992).
*Raumforschung und Raumordnung* **52**, 146–150.

Examples
~~~~~~~~

::

    data(wagnerGrowth)
    ## maybe
    str(wagnerGrowth)


    require(lattice)
    (xyplot(y ~ Period | Region, data = wagnerGrowth,
             main = "wagnerGrowth: 21 regions @ Hannover"))

    (dotplot(y ~ reorder(Region,y,median), data = wagnerGrowth,
             main = "wagnerGrowth",
             xlab = "Region [ordered by  median(y | Region) ]"))

