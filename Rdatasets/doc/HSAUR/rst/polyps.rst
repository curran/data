+----------+-------------------+
| polyps   | R Documentation   |
+----------+-------------------+

Familial Andenomatous Polyposis
-------------------------------

Description
~~~~~~~~~~~

Data from a placebo-controlled trial of a non-steroidal
anti-inflammatory drug in the treatment of familial andenomatous
polyposis (FAP).

Usage
~~~~~

::

    data("polyps")

Format
~~~~~~

A data frame with 20 observations on the following 3 variables.

``number``
    number of colonic polyps at 12 months.

``treat``
    treatment arms of the trail, a factor with levels ``placebo`` and
    ``drug``.

``age``
    the age of the patient.

Details
~~~~~~~

Giardiello et al. (1993) and Piantadosi (1997) describe the results of a
placebo-controlled trial of a non-steroidal anti-inflammatory drug in
the treatment of familial andenomatous polyposis (FAP). The trial was
halted after a planned interim analysis had suggested compelling
evidence in favour of the treatment. Here we are interested in assessing
whether the number of colonic polyps at 12 months is related to
treatment and age of patient.

Source
~~~~~~

F. M. Giardiello, S. R. Hamilton, A. J. Krush, S. Piantadosi, L. M.
Hylind, P. Celano, S. V. Booker, C. R. Robinson and G. J. A. Offerhaus
(1993), Treatment of colonic and rectal adenomas with sulindac in
familial adenomatous polyposis. *New England Journal of Medicine*,
**328**\ (18), 1313–1316.

S. Piantadosi (1997), *Clinical Trials: A Methodologic Perspective*.
John Wiley \\& Sons, New York.

Examples
~~~~~~~~

::


      data("polyps", package = "HSAUR")
      plot(number ~ age, data = polyps, pch = as.numeric(polyps$treat))
      legend(40, 40, legend = levels(polyps$treat), pch = 1:2, bty = "n")

