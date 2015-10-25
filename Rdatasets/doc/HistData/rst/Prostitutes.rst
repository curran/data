+---------------+-------------------+
| Prostitutes   | R Documentation   |
+---------------+-------------------+

Parent-Duchatelet's time-series data on the number of prostitutes in Paris
--------------------------------------------------------------------------

Description
~~~~~~~~~~~

A table indicating month by month, for the years 1812-1854, the number
of prostitutes on the registers of the administration of the city of
Paris.

Usage
~~~~~

::

    data(Prostitutes)

Format
~~~~~~

A data frame with 516 observations on the following 5 variables.

``Year``
    a numeric vector

``month``
    a factor with levels ``Apr`` ``Aug`` ``Dec`` ``Feb`` ``Jan`` ``Jul``
    ``Jun`` ``Mar`` ``May`` ``Nov`` ``Oct`` ``Sep``

``count``
    a numeric vector: number of prostitutes

``mon``
    a numeric vector: numeric month

``date``
    a Date

Details
~~~~~~~

The data table was digitally scanned with OCR, and errors were corrected
by comparing the yearly totals recorded in the table to the row sums of
the scanned data.

Source
~~~~~~

Parent-Duchatelet, A. (1857), *De la prostitution dans la ville de
Paris*, 3rd ed, p. 32, 36

Examples
~~~~~~~~

::

    data(Prostitutes)
    ## maybe str(Prostitutes) ; plot(Prostitutes) ...

