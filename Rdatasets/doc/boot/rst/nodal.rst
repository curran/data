+---------+-------------------+
| nodal   | R Documentation   |
+---------+-------------------+

Nodal Involvement in Prostate Cancer
------------------------------------

Description
~~~~~~~~~~~

The ``nodal`` data frame has 53 rows and 7 columns.

The treatment strategy for a patient diagnosed with cancer of the
prostate depend highly on whether the cancer has spread to the
surrounding lymph nodes. It is common to operate on the patient to get
samples from the nodes which can then be analysed under a microscope but
clearly it would be preferable if an accurate assessment of nodal
involvement could be made without surgery.

For a sample of 53 prostate cancer patients, a number of possible
predictor variables were measured before surgery. The patients then had
surgery to determine nodal involvement. It was required to see if nodal
involvement could be accurately predicted from the predictor variables
and which ones were most important.

Usage
~~~~~

::

    nodal

Format
~~~~~~

This data frame contains the following columns:

``m``
    A column of ones.

``r``
    An indicator of nodal involvement.

``aged``
    The patients age dichotomized into less than 60 (``0``) and 60 or
    over ``1``.

``stage``
    A measurement of the size and position of the tumour observed by
    palpitation with the fingers via the rectum. A value of ``1``
    indicates a more serious case of the cancer.

``grade``
    Another indicator of the seriousness of the cancer, this one is
    determined by a pathology reading of a biopsy taken by needle before
    surgery. A value of ``1`` indicates a more serious case of the
    cancer.

``xray``
    A third measure of the seriousness of the cancer taken from an X-ray
    reading. A value of ``1`` indicates a more serious case of the
    cancer.

``acid``
    The level of acid phosphatase in the blood serum.

Source
~~~~~~

The data were obtained from

Brown, B.W. (1980) Prediction analysis for binary data. In
*Biostatistics Casebook*. R.G. Miller, B. Efron, B.W. Brown and L.E.
Moses (editors), 3–18. John Wiley.

References
~~~~~~~~~~

Davison, A.C. and Hinkley, D.V. (1997) *Bootstrap Methods and Their
Application*. Cambridge University Press.
