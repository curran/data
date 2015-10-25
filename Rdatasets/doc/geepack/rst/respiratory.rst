+---------------+-------------------+
| respiratory   | R Documentation   |
+---------------+-------------------+

Data from a clinical trial comparing two treatments for a respiratory illness
-----------------------------------------------------------------------------

Description
~~~~~~~~~~~

The data are from a clinical trial of patients with respiratory illness,
where 111 patients from two different clinics were randomized to receive
either placebo or an active treatment. Patients were examined at
baseline and at four visits during treatment. At each examination,
respiratory status (categorized as 1 = good, 0 = poor) was determined.

Usage
~~~~~

::

    data(respiratory)

Format
~~~~~~

A data frame with 111 observations on the following 7 variables.

center
    a numeric vector

id
    a numeric vector

age
    a numeric vector

baseline
    a numeric vector

active
    a numeric vector

center2
    a numeric vector

female
    a numeric vector

Examples
~~~~~~~~

::

    data(respiratory)
    ## maybe str(respiratory) ; plot(respiratory) ...

