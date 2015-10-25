+---------+-------------------+
| Klein   | R Documentation   |
+---------+-------------------+

Klein's Data on the U. S. Economy
---------------------------------

Description
~~~~~~~~~~~

Data for Klein's (1950) simple econometric model of the U. S. economy.

The ``Klein`` data frame has 22 rows and 10 columns.

Usage
~~~~~

::

    Klein

Format
~~~~~~

This data frame contains the following columns:

Year
    1921–1941

C
    consumption.

P
    private profits.

Wp
    private wages.

I
    investment.

K.lag
    capital stock, lagged one year.

X
    equilibrium demand.

Wg
    government wages.

G
    government non-wage spending.

T
    indirect business taxes and net exports.

Source
~~~~~~

Greene, W. H. (1993) *Econometric Analysis, Second Edition.* Macmillan.

References
~~~~~~~~~~

Klein, L. (1950) *Economic Fluctuations in the United States 1921–1941.*
Wiley.

Examples
~~~~~~~~

::

    Klein$P.lag <- c(NA, Klein$P[-22])
    Klein$X.lag <- c(NA, Klein$X[-22])

    summary(tsls(C ~ P + P.lag + I(Wp + Wg), 
        instruments=~1 + G + T + Wg + I(Year - 1931) + K.lag + P.lag + X.lag,
        data=Klein))
        
    summary(tsls(I ~ P + P.lag + K.lag,
        instruments=~1 + G + T + Wg + I(Year - 1931) + K.lag + P.lag + X.lag,
        data=Klein))
        
    summary(tsls(Wp ~ X + X.lag + I(Year - 1931),
        instruments=~1 + G + T + Wg + I(Year - 1931) + K.lag + P.lag + X.lag,
        data=Klein))

