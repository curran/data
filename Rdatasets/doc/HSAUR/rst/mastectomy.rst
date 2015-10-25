+--------------+-------------------+
| mastectomy   | R Documentation   |
+--------------+-------------------+

Survival Times after Mastectomy of Breast Cancer Patients
---------------------------------------------------------

Description
~~~~~~~~~~~

Survival times in months after mastectomy of women with breast cancer.
The cancers are classified as having metastized or not based on a
histochemical marker.

Usage
~~~~~

::

    data("mastectomy")

Format
~~~~~~

A data frame with 42 observations on the following 3 variables.

time
    survival times in months.

event
    a logical indicating if the event was observed (``TRUE``) or if the
    survival time was censored (``FALSE``).

metastized
    a factor at levels ``yes`` and ``no``.

Source
~~~~~~

B. S. Everitt and S. Rabe-Hesketh (2001), *Analysing Medical Data using
S-PLUS*, Springer, New York, USA.

Examples
~~~~~~~~

::


      data("mastectomy", package = "HSAUR")
      table(mastectomy$metastized)

