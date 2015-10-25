+------------+-------------------+
| melanoma   | R Documentation   |
+------------+-------------------+

Survival from Malignant Melanoma
--------------------------------

Description
~~~~~~~~~~~

The ``melanoma`` data frame has 205 rows and 7 columns.

The data consist of measurements made on patients with malignant
melanoma. Each patient had their tumour removed by surgery at the
Department of Plastic Surgery, University Hospital of Odense, Denmark
during the period 1962 to 1977. The surgery consisted of complete
removal of the tumour together with about 2.5cm of the surrounding skin.
Among the measurements taken were the thickness of the tumour and
whether it was ulcerated or not. These are thought to be important
prognostic variables in that patients with a thick and/or ulcerated
tumour have an increased chance of death from melanoma. Patients were
followed until the end of 1977.

Usage
~~~~~

::

    melanoma

Format
~~~~~~

This data frame contains the following columns:

``time``
    Survival time in days since the operation, possibly censored.

``status``
    The patients status at the end of the study. 1 indicates that they
    had died from melanoma, 2 indicates that they were still alive and 3
    indicates that they had died from causes unrelated to their
    melanoma.

``sex``
    The patients sex; 1=male, 0=female.

``age``
    Age in years at the time of the operation.

``year``
    Year of operation.

``thickness``
    Tumour thickness in mm.

``ulcer``
    Indicator of ulceration; 1=present, 0=absent.

Note
~~~~

This dataset is not related to the dataset in the lattice package with
the same name.

Source
~~~~~~

The data were obtained from

Andersen, P.K., Borgan, O., Gill, R.D. and Keiding, N. (1993)
*Statistical Models Based on Counting Processes*. Springer-Verlag.

References
~~~~~~~~~~

Davison, A.C. and Hinkley, D.V. (1997) *Bootstrap Methods and Their
Application*. Cambridge University Press.

Venables, W.N. and Ripley, B.D. (1994) *Modern Applied Statistics with
S-Plus*. Springer-Verlag.
