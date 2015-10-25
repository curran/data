+---------+-------------------+
| car90   | R Documentation   |
+---------+-------------------+

Automobile Data from 'Consumer Reports' 1990
--------------------------------------------

Description
~~~~~~~~~~~

Data on 111 cars, taken from pages 235–255, 281–285 and 287–288 of the
April 1990 *Consumer Reports* Magazine.

Usage
~~~~~

::

    data(car90)

Format
~~~~~~

The data frame contains the following columns

Country
    a factor giving the country in which the car was manufactured

Disp
    engine displacement in cubic inches

Disp2
    engine displacement in liters

Eng.Rev
    engine revolutions per mile, or engine speed at 60 mph

Front.Hd
    distance between the car's head-liner and the head of a 5 ft. 9 in.
    front seat passenger, in inches, as measured by CU

Frt.Leg.Room
    maximum front leg room, in inches, as measured by CU

Frt.Shld
    front shoulder room, in inches, as measured by CU

Gear.Ratio
    the overall gear ratio, high gear, for manual transmission

Gear2
    the overall gear ratio, high gear, for automatic transmission

HP
    net horsepower

HP.revs
    the red line—the maximum safe engine speed in rpm

Height
    height of car, in inches, as supplied by manufacturer

Length
    overall length, in inches, as supplied by manufacturer

Luggage
    luggage space

Mileage
    a numeric vector of gas mileage in miles/gallon as tested by CU;
    contains NAs.

Model2
    alternate name, if the car was sold under two labels

Price
    list price with standard equipment, in dollars

Rear.Hd
    distance between the car's head-liner and the head of a 5 ft 9 in.
    rear seat passenger, in inches, as measured by CU

Rear.Seating
    rear fore-and-aft seating room, in inches, as measured by CU

RearShld
    rear shoulder room, in inches, as measured by CU

Reliability
    an ordered factor with levels Much worse < worse < average < better
    < Much better: contains ``NA``\ s.

Rim
    factor giving the rim size

Sratio.m
    Number of turns of the steering wheel required for a turn of 30 foot
    radius, manual steering

Sratio.p
    Number of turns of the steering wheel required for a turn of 30 foot
    radius, power steering

Steering
    steering type offered: manual, power, or both

Tank
    fuel refill capacity in gallons

Tires
    factor giving tire size

Trans1
    manual transmission, a factor with levels , man.4, man.5 and man.6

Trans2
    automatic transmission, a factor with levels , auto.3, auto.4, and
    auto.CVT. No car is missing both the manual and automatic
    transmission variables, but several had both as options

Turning
    the radius of the turning circle in feet

Type
    a factor giving the general type of car. The levels are: Small,
    Sporty, Compact, Medium, Large, Van

Weight
    an order statistic giving the relative weights of the cars; 1 is the
    lightest and 111 is the heaviest

Wheel.base
    length of wheelbase, in inches, as supplied by manufacturer

Width
    width of car, in inches, as supplied by manufacturer

Source
~~~~~~

This is derived (with permission) from the data set ``car.all`` in
S-PLUS, but with some further clean up of variable names and
definitions.

See Also
~~~~~~~~

``car.test.frame``, ``cu.summary`` for extracts from other versions of
the dataset.

Examples
~~~~~~~~

::

    data(car90)
    plot(car90$Price/1000, car90$Weight,
         xlab = "Price (thousands)", ylab = "Weight (lbs)")
    mlowess <- function(x, y, ...) {
        keep <- !(is.na(x) | is.na(y))
        lowess(x[keep], y[keep], ...)
    }
    with(car90, lines(mlowess(Price/1000, Weight, f = 0.5)))

