+-----------+-------------------+
| pottery   | R Documentation   |
+-----------+-------------------+

Romano-British Pottery Data
---------------------------

Description
~~~~~~~~~~~

Chemical composition of Romano-British pottery.

Usage
~~~~~

::

    data("pottery")

Format
~~~~~~

A data frame with 45 observations on the following 9 chemicals.

Al2O3
    aluminium trioxide.

Fe2O3
    iron trioxide.

MgO
    magnesium oxide.

CaO
    calcium oxide.

Na2O
    natrium oxide.

K2O
    calium oxide.

TiO2
    titanium oxide.

MnO
    mangan oxide.

BaO
    barium oxide.

Details
~~~~~~~

The data gives the chemical composition of specimens of Romano-British
pottery, determined by atomic absorption spectrophotometry, for nine
oxides.

Source
~~~~~~

A. Tubb and N. J. Parker and G. Nickless (1980), The analysis of
Romano-British pottery by atomic absorption spectrophotometry.
*Archaeometry*, **22**, 153–171.

Examples
~~~~~~~~

::


      data("pottery", package = "HSAUR")
      plot(pottery)

