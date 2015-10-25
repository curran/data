+----------+-------------------+
| waders   | R Documentation   |
+----------+-------------------+

Counts of Waders at 15 Sites in South Africa
--------------------------------------------

Description
~~~~~~~~~~~

The ``waders`` data frame has 15 rows and 19 columns. The entries are
counts of waders in summer.

Usage
~~~~~

::

    waders

Format
~~~~~~

This data frame contains the following columns (species)

``S1``
    Oystercatcher

``S2``
    White-fronted Plover

``S3``
    Kitt Lutz's Plover

``S4``
    Three-banded Plover

``S5``
    Grey Plover

``S6``
    Ringed Plover

``S7``
    Bar-tailed Godwit

``S8``
    Whimbrel

``S9``
    Marsh Sandpiper

``S10``
    Greenshank

``S11``
    Common Sandpiper

``S12``
    Turnstone

``S13``
    Knot

``S14``
    Sanderling

``S15``
    Little Stint

``S16``
    Curlew Sandpiper

``S17``
    Ruff

``S18``
    Avocet

``S19``
    Black-winged Stilt

The rows are the sites:

| A = Namibia North coast
|  B = Namibia North wetland
|  C = Namibia South coast
|  D = Namibia South wetland
|  E = Cape North coast
|  F = Cape North wetland
|  G = Cape West coast
|  H = Cape West wetland
|  I = Cape South coast
|  J= Cape South wetland
|  K = Cape East coast
|  L = Cape East wetland
|  M = Transkei coast
|  N = Natal coast
|  O = Natal wetland

Source
~~~~~~

J.C. Gower and D.J. Hand (1996) *Biplots* Chapman & Hall Table 9.1.
Quoted as from:

R.W. Summers, L.G. Underhill, D.J. Pearson and D.A. Scott (1987) Wader
migration systems in south and eastern Africa and western Asia. *Wader
Study Group Bulletin* **49** Supplement, 15–34.

Examples
~~~~~~~~

::

    plot(corresp(waders, nf=2))

