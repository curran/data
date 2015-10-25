+---------+-------------------+
| randu   | R Documentation   |
+---------+-------------------+

Random Numbers from Congruential Generator RANDU
------------------------------------------------

Description
~~~~~~~~~~~

400 triples of successive random numbers were taken from the VAX FORTRAN
function RANDU running under VMS 1.5.

Usage
~~~~~

::

    randu

Format
~~~~~~

A data frame with 400 observations on 3 variables named ``x``, ``y`` and
``z`` which give the first, second and third random number in the
triple.

Details
~~~~~~~

In three dimensional displays it is evident that the triples fall on 15
parallel planes in 3-space. This can be shown theoretically to be true
for all triples from the RANDU generator.

These particular 400 triples start 5 apart in the sequence, that is they
are ((U[5i+1], U[5i+2], U[5i+3]), i= 0, ..., 399), and they are rounded
to 6 decimal places.

Under VMS versions 2.0 and higher, this problem has been fixed.

Source
~~~~~~

David Donoho

Examples
~~~~~~~~

::

    ## Not run: ## We could re-generate the dataset by the following R code
    seed <- as.double(1)
    RANDU <- function() {
        seed <<- ((2^16 + 3) * seed) %% (2^31)
        seed/(2^31)
    }
    for(i in 1:400) {
        U <- c(RANDU(), RANDU(), RANDU(), RANDU(), RANDU())
        print(round(U[1:3], 6))
    }
    ## End(Not run)

