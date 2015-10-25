+-------+-------------------+
| Pyx   | R Documentation   |
+-------+-------------------+

Trial of the Pyx
----------------

Description
~~~~~~~~~~~

Stigler (1997, 1999) recounts the history of one of the oldest
continuous schemes of sampling inspection carried out by the Royal Mint
in London for about eight centuries. The Trial of the Pyx was the final,
ceremonial stage in a process designed to ensure that the weight and
quality of gold and silver coins from the mint met the standards for
coinage.

At regular intervals, coins would be taken from production and deposited
into a box called the Pyx. When a Trial of the Pyx was called, the
contents of the Pyx would be counted, weighed and assayed for content,
and the results would be compared with the standard set for the Royal
Mint.

The data frame ``Pyx`` gives the results for the year 1848 (Great
Britain, 1848) in which 10,000 gold sovereigns were assayed. The coins
in each bag were classified according to the deviation from the standard
content of gold for each coin, called the Remedy, R = 123 \* (12/5760) =
.25625, in grains, for a single sovereign.

Usage
~~~~~

::

    data(Pyx)

Format
~~~~~~

A frequency data frame with 72 observations on the following 4 variables
giving the distribution of 10,000 soverigns, classified according to the
``Bags`` in which they were collected and the ``Deviation`` from the
standard weight.

``Bags``
    an ordered factor with levels ``1 and 2`` < ``3`` < ``4`` < ``5`` <
    ``6`` < ``7`` < ``8`` < ``9`` < ``10``

``Group``
    an ordered factor with levels ``below std`` < ``near std`` <
    ``above std``

``Deviation``
    an ordered factor with levels ``Below -R`` < ``(-R to -.2)`` <
    ``(-.2 to -.l)`` < ``(-.1 to 0)`` < ``(0 to .l)`` < ``(.1 to .2)`` <
    ``(.2 to R)`` < ``Above R``

``count``
    number of soverigns

Details
~~~~~~~

``Bags`` 1-4 were selected as "near to standard", bags 5-7 as below
standard, bags 8-10 as above standard. This classification is reflected
in ``Group``.

Source
~~~~~~

Stigler, S. M. (1999). *Statistics on the Table*. Cambridge, MA: Harvard
University Press, table 21.1.

References
~~~~~~~~~~

Great Britain (1848). "Report of the Commissioners Appointed to Inquire
into the Constitution, Management and Expense of the Royal Mint." In Vol
28 of *House Documents for 1849*.

Stigler, S. M. (1997). Eight Centuries of Sampling Inspection: The Trial
of the Pyx *Journal of the American Statistical Association*, 72(359),
493-500

Examples
~~~~~~~~

::

    data(Pyx)
    # display as table
    xtabs(count ~ Bags+Deviation, data=Pyx)

