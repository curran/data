+--------------+-------------------+
| Employment   | R Documentation   |
+--------------+-------------------+

Employment Status
-----------------

Description
~~~~~~~~~~~

Data from a 1974 Danish study given by Andersen (1991) on the employees
who had been laid off. The workers are classified by their employment
status on 1975-01-01, the cause of their layoff and the length of
employment before they were laid off.

Usage
~~~~~

::

    data("Employment")

Format
~~~~~~

A 3-dimensional array resulting from cross-tabulating variables for 1314
employees. The variables and their levels are as follows:

+------+--------------------+-------------------------------------------+
| No   | Name               | Levels                                    |
+------+--------------------+-------------------------------------------+
| 1    | EmploymentStatus   | NewJob, Unemployed                        |
+------+--------------------+-------------------------------------------+
| 2    | EmploymentLength   | <1Mo, 1-3Mo, 3-12Mo, 1-2Yr, 2-5Yr, >5Yr   |
+------+--------------------+-------------------------------------------+
| 3    | LayoffCause        | Closure, Replaced                         |
+------+--------------------+-------------------------------------------+

Source
~~~~~~

Michael Friendly (2000), Visualizing Categorical Data, pages 126–129.

References
~~~~~~~~~~

E. B. Andersen (1991), *The Statistical Analysis of Categorical Data*.
Springer-Verlag, Berlin.

M. Friendly (2000), *Visualizing Categorical Data*. SAS Institute, Cary,
NC.

Examples
~~~~~~~~

::

    data("Employment")

    ## Employment Status
    mosaic(Employment,
           expected = ~ LayoffCause * EmploymentLength + EmploymentStatus,
           main = "Layoff*EmployLength + EmployStatus")

    mosaic(Employment,
           expected = ~ LayoffCause * EmploymentLength + LayoffCause * EmploymentStatus,
           main = "Layoff*EmployLength + Layoff*EmployStatus")

    ## Stratified view

    grid.newpage()
    pushViewport(viewport(layout = grid.layout(ncol = 2)))
    pushViewport(viewport(layout.pos.col = 1))

    ## Closure
    mosaic(Employment[,,1], main = "Layoff: Closure", newpage = FALSE)

    popViewport(1)
    pushViewport(viewport(layout.pos.col = 2))

    ## Replaced
    mosaic(Employment[,,2], main = "Layoff: Replaced", newpage = FALSE)
    popViewport(2)

