+----------+-------------------+
| cushny   | R Documentation   |
+----------+-------------------+

A data set from Cushny and Peebles (1905) on the effect of three drugs on hours of sleep, used by Student (1908)
----------------------------------------------------------------------------------------------------------------

Description
~~~~~~~~~~~

The classic data set used by Gossett (publishing as Student) for the
introduction of the t-test. The design was a within subjects study with
hours of sleep in a control condition compared to those in 3 drug
conditions. Drug1 was 06mg of L Hscyamine, Drug 2L and Drug2R were said
to be .6 mg of Left and Right isomers of Hyoscine. As discussed by
Zabell (2008) these were not optical isomers. The detal1, delta2L and
delta2R are changes from the baseline control.

Usage
~~~~~

::

    data(cushny)

Format
~~~~~~

A data frame with 10 observations on the following 7 variables.

``Control``
    Hours of sleep in a control condition

``drug1``
    Hours of sleep in Drug condition 1

``drug2L``
    Hours of sleep in Drug condition 2

``drug2R``
    Hours of sleep in Drug condition 3 (an isomer of the drug in
    condition 2

``delta1``
    Change from control, drug 1

``delta2L``
    Change from control, drug 2L

``delta2R``
    Change from control, drug 2R

Details
~~~~~~~

The original analysis by Student is used as an example for the t-test
function, both as a paired t-test and a two group t-test. The data are
also useful for a repeated measures analysis of variance.

Source
~~~~~~

Cushny, A.R. and Peebles, A.R. (1905) The action of optical isomers: II
hyoscines. The Journal of Physiology 32, 501-510.

Student (1908) The probable error of the mean. Biometrika, 6 (1) , 1-25.

References
~~~~~~~~~~

See also the data set sleep and the examples for the t.test

S. L. Zabell. On Student's 1908 Article "The Probable Error of a Mean"
Journal of the American Statistical Association, Vol. 103, No. 481
(Mar., 2008), pp. 1- 20

Examples
~~~~~~~~

::

    data(cushny)
    with(cushny, t.test(drug1,drug2L,paired=TRUE)) #within subjects 

    error.bars(cushny[1:4],within=TRUE,ylab="Hours of sleep",xlab="Drug condition", 
           main="95% confidence of within subject effects")

