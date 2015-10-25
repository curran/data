+----------+-------------------+
| agefat   | R Documentation   |
+----------+-------------------+

Total Body Composision Data
---------------------------

Description
~~~~~~~~~~~

Age and body fat percentage of 25 normal adults.

Usage
~~~~~

::

    data("agefat")

Format
~~~~~~

A data frame with 25 observations on the following 3 variables.

``age``
    the age of the subject.

``fat``
    the body fat percentage.

``sex``
    a factor with levels ``female`` and ``male``.

Details
~~~~~~~

The data come from a study investigating a new methods of measuring body
composition (see Mazess et al, 1984), and give the body fat percentage
(percent fat), age and sex for 25 normal adults aged between 23 and 61
years. The questions of interest are how are age and percent fat
related, and is there any evidence that the relationship is different
for males and females.

Source
~~~~~~

R. B. Mazess, W. W. Peppler and M. Gibbons (1984), Total body
composition by dual-photon (153Gd) absorptiometry. *American Journal of
Clinical Nutrition*, **40**, 834–839.

Examples
~~~~~~~~

::


      data("agefat", package = "HSAUR")
      plot(fat ~ age, data = agefat)

