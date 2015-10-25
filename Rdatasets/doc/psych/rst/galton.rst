+----------+-------------------+
| galton   | R Documentation   |
+----------+-------------------+

Galton's Mid parent child height data
-------------------------------------

Description
~~~~~~~~~~~

Two of the earliest examples of the correlation coefficient were Francis
Galton's data sets on the relationship between mid parent and child
height and the similarity of parent generation peas with child peas.
This is the data set for the Galton height.

Usage
~~~~~

::

    data(galton)

Format
~~~~~~

A data frame with 928 observations on the following 2 variables.

``parent``
    Mid Parent heights (in inches)

``child``
    Child Height

Details
~~~~~~~

Female heights were adjusted by 1.08 to compensate for sex differences.
(This was done in the original data set)

Source
~~~~~~

This is just the galton data set from UsingR, slightly rearranged.

References
~~~~~~~~~~

Stigler, S. M. (1999). Statistics on the Table: The History of
Statistical Concepts and Methods. Harvard University Press. Galton, F.
(1886). Regression towards mediocrity in hereditary stature. Journal of
the Anthropological Institute of Great Britain and Ireland, 15:246-263.
Galton, F. (1869). Hereditary Genius: An Inquiry into its Laws and
Consequences. London: Macmillan.

Wachsmuth, A.W., Wilkinson L., Dallal G.E. (2003). Galton's bend: A
previously undiscovered nonlinearity in Galton's family stature
regression data. The American Statistician, 57, 190-192.

See Also
~~~~~~~~

The other Galton data sets: ``heights``, ``peas``,\ ``cubits``

Examples
~~~~~~~~

::

    data(galton)
    describe(galton)
     #show the scatter plot and the lowess fit 
    pairs.panels(galton,main="Galton's Parent child heights")  
    #but this makes the regression lines look the same
    pairs.panels(galton,lm=TRUE,main="Galton's Parent child heights") 
     #better is to scale them 
    pairs.panels(galton,lm=TRUE,xlim=c(62,74),ylim=c(62,74),main="Galton's Parent child heights") 

