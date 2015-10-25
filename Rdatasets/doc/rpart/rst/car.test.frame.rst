+------------------+-------------------+
| car.test.frame   | R Documentation   |
+------------------+-------------------+

Automobile Data from 'Consumer Reports' 1990
--------------------------------------------

Description
~~~~~~~~~~~

The ``car.test.frame`` data frame has 60 rows and 8 columns, giving data
on makes of cars taken from the April, 1990 issue of *Consumer Reports*.
This is part of a larger dataset, some columns of which are given in
``cu.summary``.

Usage
~~~~~

::

    car.test.frame

Format
~~~~~~

This data frame contains the following columns:

``Price``
    a numeric vector giving the list price in US dollars of a standard
    model

``Country``
    of origin, a factor with levels France, Germany, Japan , Japan/USA,
    Korea, Mexico, Sweden and USA

``Reliability``
    a numeric vector coded ``1`` to ``5``.

``Mileage``
    fuel consumption miles per US gallon, as tested.

``Type``
    a factor with levels ``Compact`` ``Large`` ``Medium`` ``Small``
    ``Sporty`` ``Van``

``Weight``
    kerb weight in pounds.

``Disp.``
    the engine capacity (displacement) in litres.

``HP``
    the net horsepower of the vehicle.

Source
~~~~~~

*Consumer Reports*, April, 1990, pp. 235–288 quoted in

John M. Chambers and Trevor J. Hastie eds. (1992) *Statistical Models in
S*, Wadsworth and Brooks/Cole, Pacific Grove, CA, pp. 46–47.

See Also
~~~~~~~~

``car90``, ``cu.summary``

Examples
~~~~~~~~

::

    z.auto <- rpart(Mileage ~ Weight, car.test.frame)
    summary(z.auto)

