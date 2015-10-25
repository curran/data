+-------+-------------------+
| Car   | R Documentation   |
+-------+-------------------+

Stated Preferences for Car Choice
---------------------------------

Description
~~~~~~~~~~~

a cross-section

*number of observations* : 4654

*observation* : individuals

*country* : United States

Usage
~~~~~

::

    data(Car)

Format
~~~~~~

A dataframe containing :

choice
    choice of a vehicule amoung 6 propositions

college
    college education ?

hsg2
    size of household greater than 2 ?

coml5
    commulte lower than 5 miles a day ?

typez
    body type, one of regcar (regular car), sportuv (sport utility
    vehicule), sportcar, stwagon (station wagon), truck, van, for each
    proposition z from 1 to 6

fuelz
    fuel for proposition z, one of gasoline, methanol, cng (compressed
    natural gas), electric.

pricez
    price of vehicule divided by the logarithme of income

rangez
    hundreds of miles vehicule can travel between refuelings/rechargings

accz
    acceleration, tens of seconds required to reach 30 mph from stop

speedz
    highest attainable speed in hundreds of mph

pollutionz
    tailpipe emissions as fraction of those for new gas vehicule

sizez
    0 for a mini, 1 for a subcompact, 2 for a compact and 3 for a
    mid–size or large vehicule

spacez
    fraction of luggage space in comparable new gas vehicule

costz
    cost per mile of travel (tens of cents) : home recharging for
    electric vehicule, station refueling otherwise

stationz
    fraction of stations that can refuel/recharge vehicule

Source
~~~~~~

McFadden, Daniel and Kenneth Train (2000) “Mixed MNL models for discrete
response”, *Journal of Applied Econometrics*, **15(5)**, 447–470.

References
~~~~~~~~~~

Journal of Applied Econometrics data archive :
`http://jae.wiley.com/jae/ <http://jae.wiley.com/jae/>`__.

See Also
~~~~~~~~

``Index.Source``, ``Index.Economics``, ``Index.Econometrics``,
``Index.Observations``
