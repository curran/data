+-----------+-------------------+
| Pima.tr   | R Documentation   |
+-----------+-------------------+

Diabetes in Pima Indian Women
-----------------------------

Description
~~~~~~~~~~~

A population of women who were at least 21 years old, of Pima Indian
heritage and living near Phoenix, Arizona, was tested for diabetes
according to World Health Organization criteria. The data were collected
by the US National Institute of Diabetes and Digestive and Kidney
Diseases. We used the 532 complete records after dropping the (mainly
missing) data on serum insulin.

Usage
~~~~~

::

    Pima.tr
    Pima.tr2
    Pima.te

Format
~~~~~~

These data frames contains the following columns:

``npreg``
    number of pregnancies.

``glu``
    plasma glucose concentration in an oral glucose tolerance test.

``bp``
    diastolic blood pressure (mm Hg).

``skin``
    triceps skin fold thickness (mm).

``bmi``
    body mass index (weight in kg/(height in m)\ *\\^2*).

``ped``
    diabetes pedigree function.

``age``
    age in years.

``type``
    ``Yes`` or ``No``, for diabetic according to WHO criteria.

Details
~~~~~~~

The training set ``Pima.tr`` contains a randomly selected set of 200
subjects, and ``Pima.te`` contains the remaining 332 subjects.
``Pima.tr2`` contains ``Pima.tr`` plus 100 subjects with missing values
in the explanatory variables.

Source
~~~~~~

Smith, J. W., Everhart, J. E., Dickson, W. C., Knowler, W. C. and
Johannes, R. S. (1988) Using the ADAP learning algorithm to forecast the
onset of *diabetes mellitus*. In *Proceedings of the Symposium on
Computer Applications in Medical Care (Washington, 1988),* ed. R. A.
Greenes, pp. 261–265. Los Alamitos, CA: IEEE Computer Society Press.

Ripley, B.D. (1996) *Pattern Recognition and Neural Networks.*
Cambridge: Cambridge University Press.
