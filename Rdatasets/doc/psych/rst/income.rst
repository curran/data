+----------+-------------------+
| income   | R Documentation   |
+----------+-------------------+

US family income from US census 2008
------------------------------------

Description
~~~~~~~~~~~

US census data on family income from 2008

Usage
~~~~~

::

    data(income)

Format
~~~~~~

A data frame with 44 observations on the following 4 variables.

``value``
    lower boundary of the income group

``count``
    Number of families within that income group

``mean``
    Mean of the category

``prop``
    proportion of families

Details
~~~~~~~

The distribution of income is a nice example of a log normal
distribution. It is also an interesting example of the power of
graphics. It is quite clear when graphing the data that income
statistics are bunched to the nearest 5K. That is, there is a clear
sawtooth pattern in the data.

The all.income set is interpolates intervening values for 100-150K,
150-200K and 200-250K

Source
~~~~~~

US Census: Table HINC-06. Income Distribution to $250,000 or More for
Households: 2008

http://www.census.gov/hhes/www/cpstables/032009/hhinc/new06\_000.htm

Examples
~~~~~~~~

::

    data(income)
    with(income[1:40,], plot(mean,prop, main="US family income for 2008",xlab="income", 
            ylab="Proportion of families",xlim=c(0,100000)))
    with (income[1:40,], points(lowess(mean,prop,f=.3),typ="l"))
    describe(income)


    with(all.income, plot(mean,prop, main="US family income for 2008",xlab="income", 
                    ylab="Proportion of families",xlim=c(0,250000)))
    with (all.income[1:50,], points(lowess(mean,prop,f=.25),typ="l"))
    #curve(100000* dlnorm(x, 10.8, .8), x = c(0,250000),ylab="Proportion")

