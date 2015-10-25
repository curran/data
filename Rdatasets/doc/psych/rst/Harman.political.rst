+--------------------+-------------------+
| Harman.political   | R Documentation   |
+--------------------+-------------------+

Eight political variables used by Harman (1967) as example 8.17
---------------------------------------------------------------

Description
~~~~~~~~~~~

Another one of the many Harman (1967) data sets. This contains 8
political variables taken over 147 election areas. The principal factor
method with SMCs as communalities match those of table 8.18. The data
are used by Dziubian and Shirkey as an example of the Kaiser-Meyer-Olkin
test of factor adequacy.

Usage
~~~~~

::

    data(Harman.political)

Format
~~~~~~

The format is: num [1:8, 1:8] 1 0.84 0.62 -0.53 0.03 0.57 -0.33 -0.63
0.84 1 ... - attr(\*, "dimnames")=List of 2 ..$ : chr [1:8] "Lewis"
"Roosevelt" "Party Voting" "Median Rental" ... ..$ : chr [1:8] "Lewis"
"Roosevelt" "Party Voting" "Median Rental" ...

Details
~~~~~~~

The communalities from the original table are not included. They are
.52, 1.00, .78, .82, .36, .80, .63, and .97

Source
~~~~~~

Harman, Harry Horace (1976) Modern factor analysis, 3d ed., rev,
University of Chicago Press. Chicago. p 166.

References
~~~~~~~~~~

Dziuban, Charles D. and Shirkey, Edwin C. (1974) When is a correlation
matrix appropriate for factor analysis? Some decision rules.
Psychological Bulletin, 81 (6) 358 - 361.

Examples
~~~~~~~~

::

    data(Harman.political)
    KMO(Harman.political)

