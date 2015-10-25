+---------------------+-------------------+
| USFinanceIndustry   | R Documentation   |
+---------------------+-------------------+

US Finance Industry Profits
---------------------------

Description
~~~~~~~~~~~

A ``data.frame`` giving the profits of the finance industry in the
United States as a proportion of total corporate domestic profits.

Usage
~~~~~

::

    data(USFinanceIndustry)

Format
~~~~~~

A ``data.frame`` with the following columns:

year
    integer year starting with 1929

CorporateProfitsAdj
    Corporate profits with inventory valuation and capital consumption
    adjustments in billons of current (not adjusted for inflation) US
    dollars

Domestic
    Domestic industries profits in billions

Financial
    Financial industries profits in billions

Nonfinancial
    Nonfinancial industries profits in billions

restOfWorld
    Profits of the "Rest of the world" in their contribution to US Gross
    Domestic Product in billions

FinanceProportion
    = Financial/Domestic

Details
~~~~~~~

This is extracted from Table 6.16 of the National Income and Product
Accounts (NIPA) copiled by the Bureau of Economic Analysis of the United
States federal government. This table comes in four parts, A
(1929-1947), B (1948-1987), C (1987-2000), and D (1998-present). Parts
A, B, C and D contain different numbers of data elements, but the first
five have the same names and are the only ones used here. The overlap
between parts C and D (1998-2000) have a root mean square relative
difference of 0.7 percent; there were no differences between the numbers
in the overlap period between parts B and C (1987).

This was created using the following command:

demoDir <- system.file('demoFiles', package='Ecdat') demoCsv <-
dir(demoDir, pattern='csv$', full.names=TRUE)

nipa6.16 <- readNIPA(demoCsv) USFinanceIndustry <-
as.data.frame(nipa6.16) names(USFinanceIndustry) <- c('year',
'CorporateProfitsAdj', 'Domestic', 'Financial', 'Nonfinancial',
'restOfWorld') USFinanceIndustry$FinanceProportion <-
with(USFinanceIndustry, Financial/Domestic)

Source
~~~~~~

`http://www.bea.gov <http://www.bea.gov>`__: Under "U.S. Economic
Accounts", first select "Corporate Profits" under "National". Then next
to "Interactive Tables", select, "National Income and Product Accounts
Tables". From there, select "Begin using the data...". Under "Section 6
- income and employment by industry", select each of the tables starting
"Table 6.16". As of February 2013, there were 4 such tables available:
Table 6.16A, 6.16B, 6.16C and 6.16D. Each of the last three are
available in annual and quarterly summaries. The ``USFinanceIndustry``
data combined the first 4 rows of the 4 annual summary tables.

See Also
~~~~~~~~

``readNIPA``

Examples
~~~~~~~~

::

    data(USFinanceIndustry)
    plot(FinanceProportion~year, USFinanceIndustry, type='b',
         ylim=c(0, max(FinanceProportion, na.rm=TRUE)),
         xlab='', ylab='', las=1, cex.axis=2, bty='n', lwd=2,
         col='blue')

    # Write to a file for Wikimedia Commons
    svg('USFinanceIndustry.svg')
    plot(FinanceProportion~year, USFinanceIndustry, type='b',
         ylim=c(0, max(FinanceProportion, na.rm=TRUE)),
         xlab='', ylab='', las=1, cex.axis=2, bty='n', lwd=2,
         col='blue')
    dev.off()

