+------------------+-------------------+
| DoctorContacts   | R Documentation   |
+------------------+-------------------+

Contacts With Medical Doctor
----------------------------

Description
~~~~~~~~~~~

a cross-section from 1977–1978

*number of observations* : 20186

Usage
~~~~~

::

    data(DoctorContacts)

Format
~~~~~~

A time serie containing :

mdu
    number of outpatient visits to a medical doctor

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
applications*, Cambridge, pp. 553–556 and 565.

See Also
~~~~~~~~

``Index.Source``, ``Index.Economics``, ``Index.Econometrics``,
``Index.Observations``,

``Index.Time.Series``
