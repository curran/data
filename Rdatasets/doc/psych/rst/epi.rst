+-------+-------------------+
| epi   | R Documentation   |
+-------+-------------------+

Eysenck Personality Inventory (EPI) data for 3570 participants
--------------------------------------------------------------

Description
~~~~~~~~~~~

The EPI is and has been a very frequently administered personality test
with 57 measuring two broad dimensions, Extraversion-Introversion and
Stability-Neuroticism, with an additional Lie scale. Developed by
Eysenck and Eysenck, 1964. Eventually replaced with the EPQ which
measures three broad dimensions. This data set represents 3570
observations collected in the early 1990s at the Personality, Motivation
and Cognition lab at Northwestern. The data are included here as
demonstration of scale construction.

Usage
~~~~~

::

    data(epi)
    data(epi.dictionary)

Format
~~~~~~

A data frame with 3570 observations on the following 57 variables.

``V1``
    a numeric vector

``V2``
    a numeric vector

``V3``
    a numeric vector

``V4``
    a numeric vector

``V5``
    a numeric vector

``V6``
    a numeric vector

``V7``
    a numeric vector

``V8``
    a numeric vector

``V9``
    a numeric vector

``V10``
    a numeric vector

``V11``
    a numeric vector

``V12``
    a numeric vector

``V13``
    a numeric vector

``V14``
    a numeric vector

``V15``
    a numeric vector

``V16``
    a numeric vector

``V17``
    a numeric vector

``V18``
    a numeric vector

``V19``
    a numeric vector

``V20``
    a numeric vector

``V21``
    a numeric vector

``V22``
    a numeric vector

``V23``
    a numeric vector

``V24``
    a numeric vector

``V25``
    a numeric vector

``V26``
    a numeric vector

``V27``
    a numeric vector

``V28``
    a numeric vector

``V29``
    a numeric vector

``V30``
    a numeric vector

``V31``
    a numeric vector

``V32``
    a numeric vector

``V33``
    a numeric vector

``V34``
    a numeric vector

``V35``
    a numeric vector

``V36``
    a numeric vector

``V37``
    a numeric vector

``V38``
    a numeric vector

``V39``
    a numeric vector

``V40``
    a numeric vector

``V41``
    a numeric vector

``V42``
    a numeric vector

``V43``
    a numeric vector

``V44``
    a numeric vector

``V45``
    a numeric vector

``V46``
    a numeric vector

``V47``
    a numeric vector

``V48``
    a numeric vector

``V49``
    a numeric vector

``V50``
    a numeric vector

``V51``
    a numeric vector

``V52``
    a numeric vector

``V53``
    a numeric vector

``V54``
    a numeric vector

``V55``
    a numeric vector

``V56``
    a numeric vector

``V57``
    a numeric vector

Details
~~~~~~~

The original data were collected in a group testing framework for
screening participants for subsequent studies. The participants were
enrolled in an introductory psychology class between Fall, 1991 and
Spring, 1995.

The structure of the E scale has been shown by Revelle and Rocklin to
have two subcomponents, Impulsivity and Sociability. These were
subsequently used by Revelle, Humphreys, Simon and Gilliland to examine
the relationship between personality, caffeine induced arousal, and
cognitive performance.

Source
~~~~~~

Data from the PMC laboratory at Northwestern.

References
~~~~~~~~~~

Eysenck, H.J. and Eysenck, S. B.G. (1968). Manual for the Eysenck
Personality Inventory.Educational and Industrial Testing Service, San
Diego, CA.

Examples
~~~~~~~~

::

    data(epi)
    epi.keys <- make.keys(epi,list(E = c(1, 3, -5, 8, 10, 13, -15, 17, -20, 22, 25, 27,
                    -29, -32, -34, -37, 39, -41, 44, 46, 49, -51, 53, 56),
       N=c(2, 4, 7, 9, 11, 14, 16, 19, 21, 23, 26, 28, 31, 33, 35, 38, 40,
         43, 45, 47, 50, 52, 55, 57),
       L = c(6, -12, -18, 24, -30, 36, -42, -48, -54),
       I =c(1, 3, -5, 8, 10, 13, 22, 39, -41), 
       S = c(-11, -15, 17, -20, 25, 27, -29, -32, -37, 44, 46, -51, 53)))
    scores <- scoreItems(epi.keys,epi)
      N <- epi[abs(epi.keys[,"N"]) >0]
      E <- epi[abs(epi.keys[,"E"]) >0]
      fa.lookup(epi.keys[,1:3],epi.dictionary) #show the items and keying information

