+------------+-------------------+
| UnempDur   | R Documentation   |
+------------+-------------------+

Unemployment Duration
---------------------

Description
~~~~~~~~~~~

Journal of Business Economics and Statistics web site :
`http://www.amstat.org/publications/jbes/ <http://www.amstat.org/publications/jbes/>`__

*number of observations* : 3343

Usage
~~~~~

::

    data(UnempDur)

Format
~~~~~~

A time serie containing :

spell
    length of spell in number of two-week intervals

censor1
    = 1 if re-employed at full-time job

censor2
    = 1 if re-employed at part-time job

censor3
    1 if re-employed but left job: pt-ft status unknown

censor4
    1 if still jobless

age
    age

ui
    = 1 if filed UI claim

reprate
    eligible replacement rate

disrate
    eligible disregard rate

logwage
    log weekly earnings in lost job (1985\\$)

tenure
    years tenure in lost job

Source
~~~~~~

McCall, B.P. (1996) “Unemployment Insurance Rules, Joblessness, and
Part-time Work”, *Econometrica*, **64**, 647–682.

References
~~~~~~~~~~

Cameron, A.C. and P.K. Trivedi (2005) *Microeconometrics : methods and
applications*, Cambridge, pp. 603–8, 632–6, 658–62, 671–4 and 692.

See Also
~~~~~~~~

``Index.Source``, ``Index.Economics``, ``Index.Econometrics``,
``Index.Observations``,

``Index.Time.Series``
