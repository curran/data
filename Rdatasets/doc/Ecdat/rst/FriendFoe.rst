+-------------+-------------------+
| FriendFoe   | R Documentation   |
+-------------+-------------------+

Data from the Television Game Show Friend Or Foe ?
--------------------------------------------------

Description
~~~~~~~~~~~

a cross-section from 2002–03

*number of observations* : 227

*observation* : individuals

*country* : United States

Usage
~~~~~

::

    data(FriendFoe)

Format
~~~~~~

A dataframe containing :

sex
    contestant's sex

white
    is contestant white ?

age
    contestant's age in years

play
    contestant's choice : a factor with levels "foe" and "friend". If
    both players play "friend", they share the trust box, if both play
    "foe", both players receive zero prize, if one of them play "foe"
    and the other one "friend", the "foe" player receive the entire
    trust bix and the "friend" player nothing

round
    round in which constestant is eliminated, a factor with levels
    ("1","2","3")

season
    season show, a factor with levels ("1","2")

cash
    the amount of cash in the trust box

sex1
    partner's sex

white1
    is partner white ?

age1
    partner's age in years

play1
    partner's choice : a factor with levels "foe" and "friend"

win
    money won by contestant

win1
    money won by partner

Source
~~~~~~

Kalist, David E. (2004) “Data from the Television Game Show "Friend or
Foe?"”, *Journal of Statistics Education*, **12(3)**.

References
~~~~~~~~~~

Journal of Statistics Education's data archive :
`http://www.amstat.org/publications/jse/jse\_data\_archive.html <http://www.amstat.org/publications/jse/jse_data_archive.html>`__.

See Also
~~~~~~~~

``Index.Source``, ``Index.Economics``, ``Index.Econometrics``,
``Index.Observations``
