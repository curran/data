+-----------+-------------------+
| housing   | R Documentation   |
+-----------+-------------------+

Homeless Data
-------------

Description
~~~~~~~~~~~

Housing status for 362 severely mentally ill homeless subjects measured
at baseline and at three follow-up times.

Usage
~~~~~

::

    data(housing)

Format
~~~~~~

A data frame with 1448 observations on the following 4 variables:

``id``
    Subject identifier variable.

``y``
    Housing status response, coded as (1) for street living, (2) for
    community living and (3) for independent housing.

``time``
    Time recorded in months.

``sec``
    Section 8 rent certificate indicator.

Source
~~~~~~

Hulrburt M.S., Wood, P.A. and Hough, R.L. (1996). Providing independent
housing for the homeless mentally ill: a novel approach to evaluating
longitudinal housing patterns. *Journal of Community Psychology*,
**24**, 291–310.

Examples
~~~~~~~~

::

    data(housing)
    str(housing)

