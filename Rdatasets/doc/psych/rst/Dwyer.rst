+---------+-------------------+
| Dwyer   | R Documentation   |
+---------+-------------------+

8 cognitive variables used by Dwyer for an example.
---------------------------------------------------

Description
~~~~~~~~~~~

Dwyer (1937) introduced a technique for factor extension and used 8
cognitive variables from Thurstone. This is the example data set used in
his paper.

Usage
~~~~~

::

    data(Dwyer)

Format
~~~~~~

The format is: num [1:8, 1:8] 1 0.58 -0.28 0.01 0.36 0.38 0.61 0.15 0.58
1 ... - attr(\*, "dimnames")=List of 2 ..$ : chr [1:8] "V1" "V2" "V3"
"V4" ... ..$ : chr [1:8] "V1" "V2" "V3" "V4" ...

Source
~~~~~~

Data matrix retyped from the original publication.

References
~~~~~~~~~~

Dwyer, Paul S. (1937), The determination of the factor loadings of a
given test from the known factor loadings of other tests. Psychometrika,
3, 173-178

Examples
~~~~~~~~

::

    data(Dwyer)
    Ro <- Dwyer[1:7,1:7]
    Roe <- Dwyer[1:7,8]
    fo <- fa(Ro,2,rotate="none")
    fa.extension(Roe,fo)

