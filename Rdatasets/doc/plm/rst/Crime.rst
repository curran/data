+---------+-------------------+
| Crime   | R Documentation   |
+---------+-------------------+

Crime in North Carolina
-----------------------

Description
~~~~~~~~~~~

a panel of 90 observations (counties) from 1981 to 1987

*total number of observations* : 630

*observation* : regional

*country* : United States

Usage
~~~~~

::

    data(Crime)

Format
~~~~~~

A data frame containing :

county
    county identifier

year
    year from 1981 to 1987

crmrte
    crimes committed per person

prbarr
    'probability' of arrest

prbconv
    'probability' of conviction

prbpris
    'probability' of prison sentenc

avgsen
    average sentence, days

polpc
    police per capita

density
    people per square mile

taxpc
    tax revenue per capita

region
    factor. One of 'other', 'west' or 'central'.

smsa
    factor. Does the individual reside in a SMSA (standard metropolitan
    statistical area)?

pctmin
    percentage minority in 1980

wcon
    weekly wage in construction

wtuc
    weekly wage in trns, util, commun

wtrd
    weekly wage in whole sales and retail trade

wfir
    weekly wage in finance, insurance and real estate

wser
    weekly wage in service industry

wmfg
    weekly wage in manufacturing

wfed
    weekly wage of federal emplyees

wsta
    weekly wage of state employees

wloc
    weekly wage of local governments employees

mix
    offence mix: face-to-face/other

pctymle
    percentage of young males

Source
~~~~~~

Online complements to Baltagi (2001).

`http://www.wiley.com/legacy/wileychi/baltagi/ <http://www.wiley.com/legacy/wileychi/baltagi/>`__,
.

See also Journal of Applied Econometrics data archive entry for Baltagi
(2006) at

`http://www.econ.queensu.ca/jae/2006-v21.4/baltagi/ <http://www.econ.queensu.ca/jae/2006-v21.4/baltagi/>`__.

References
~~~~~~~~~~

Cornwell, C. and W.N. Trumbull (1994) “Estimating the economic model of
crime with panel data”, *Review of Economics and Statistics*, **76**,
360–366.

Baltagi, B. H. (2006) “Estimating an economic model of crime using panel
data from North Carolina”, *Journal of Applied Econometrics*, 21(4),
543–547.

Baltagi, B. H. (2001) *Econometric Analysis of Panel Data*, John Wiley
and Sons.
