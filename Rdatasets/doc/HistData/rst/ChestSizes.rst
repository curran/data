+--------------+-------------------+
| ChestSizes   | R Documentation   |
+--------------+-------------------+

Chest measurements of 5738 Scottish Militiamen
----------------------------------------------

Description
~~~~~~~~~~~

Quetelet's data on chest measurements of 5738 Scottish Militiamen.
Quetelet (1846) used this data as a demonstration of the normal
distribution of physical characteristics.

Usage
~~~~~

::

    data(ChestSizes)

Format
~~~~~~

A data frame with 16 observations on the following 2 variables.

``chest``
    Chest size (in inches)

``count``
    Number of soldiers with this chest size

Source
~~~~~~

Velleman, P. F. and Hoaglin, D. C. (1981). *Applications, Basics, and
Computing of Exploratory Data Analysis*. Belmont. CA: Wadsworth.

Statlib:
`http://lib.stat.cmu.edu/DASL/Datafiles/MilitiamenChests.html <http://lib.stat.cmu.edu/DASL/Datafiles/MilitiamenChests.html>`__

References
~~~~~~~~~~

A. Quetelet, *Lettres a S.A.R. le Duc Regnant de Saxe-Cobourg et Gotha,
sur la Theorie des Probabilites, Appliquee aux Sciences Morales et
Politiques*. Brussels: M. Hayes, 1846, p. 400.

Examples
~~~~~~~~

::

    data(ChestSizes)
    ## maybe str(ChestSizes) ; plot(ChestSizes) ...

    # frequency polygon
    plot(ChestSizes, type='b')
    #barplot
    barplot(ChestSizes[,2], ylab="Frequency", xlab="Chest size")

