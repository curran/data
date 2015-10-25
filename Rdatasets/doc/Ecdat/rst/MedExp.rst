+----------+-------------------+
| MedExp   | R Documentation   |
+----------+-------------------+

Structure of Demand for Medical Care
------------------------------------

Description
~~~~~~~~~~~

Journal of Applied Econometrics data archive :
`http://jae.wiley.com/jae/ <http://jae.wiley.com/jae/>`__

*number of observations* : 5574

Usage
~~~~~

::

    data(MedExp)

Format
~~~~~~

A time serie containing :

med
    annual medical expenditures in constant dollars excluding dental and
    outpatient mental

lc
    log(coinsrate+1) where coinsurance rate is 0 to 100

idp
    individual deductible plan ?

lpi
    log(annual participation incentive payment) or 0 if no payment

fmde
    log(max(medical deductible expenditure)) if IDP=1 and MDE>1 or 0
    otherw

physlim
    physical limitation ?

ndisease
    number of chronic diseases

health
    self–rate health (excellent,good,fair,poor)

linc
    log of annual family income (in \\$)

lfam
    log of family size

educdec
    years of schooling of household head

age
    exact age

sex
    sex (male,female)

child
    age less than 18 ?

black
    is household head black ?

Source
~~~~~~

Deb, P. and P.K. Trivedi (2002) “The Structure of Demand for Medical
Care: Latent Class versus Two-Part Models”, *Journal of Health
Economics*, **21**, 601–625.

References
~~~~~~~~~~

Cameron, A.C. and P.K. Trivedi (2005) *Microeconometrics : methods and
applications*, Cambridge.

See Also
~~~~~~~~

``Index.Source``, ``Index.Economics``, ``Index.Econometrics``,
``Index.Observations``,

``Index.Time.Series``
