+-----------+-------------------+
| Heating   | R Documentation   |
+-----------+-------------------+

Heating System Choice in California Houses
------------------------------------------

Description
~~~~~~~~~~~

a cross-section

*number of observations* : 900

*observation* : households

*country* : California

Usage
~~~~~

::

    data(Heating)

Format
~~~~~~

A dataframe containing :

idcase
    id

depvar
    heating system, one of gc (gas central), gr (gas room), ec (electric
    central), er (electric room), hp (heat pump)

ic.z
    installation cost for heating system z (defined for the 5 heating
    systems)

oc.z
    annual operating cost for heating system z (defined for the 5
    heating systems)

pb.z
    ratio oc.z/ic.z

income
    annual income of the household

agehed
    age of the household head

rooms
    numbers of rooms in the house

References
~~~~~~~~~~

Kenneth Train's home page :
`http://elsa.berkeley.edu/~train/ <http://elsa.berkeley.edu/~train/>`__.

See Also
~~~~~~~~

``Index.Source``, ``Index.Economics``, ``Index.Econometrics``,
``Index.Observations``
