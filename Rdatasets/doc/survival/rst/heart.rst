+---------+-------------------+
| heart   | R Documentation   |
+---------+-------------------+

Stanford Heart Transplant data
------------------------------

Description
~~~~~~~~~~~

Survival of patients on the waiting list for the Stanford heart
transplant program.

Usage
~~~~~

::

    heart
    jasa
    jasa1

Format
~~~~~~

jasa: original data

birth.dt:

birth date

accept.dt:

acceptance into program

tx.date:

transplant date

fu.date:

end of followup

fustat:

dead or alive

surgery:

prior bypass surgery

age:

age (in days)

futime:

followup time

wait.time:

time before transplant

transplant:

transplant indicator

mismatch:

mismatch score

hla.a2:

particular type of mismatch

mscore:

another mismatch score

reject:

rejection occurred

jasa1, heart: processed data

start, stop, event:

Entry and exit time and status for this interval of time

age:

age-48 years

year:

year of acceptance (in years after 1 Nov 1967)

surgery:

prior bypass surgery 1=yes

transplant:

received transplant 1=yes

id:

patient id

Source
~~~~~~

J Crowley and M Hu (1977), Covariance analysis of heart transplant
survival data. *Journal of the American Statistical Association*,
**72**, 27–36.

See Also
~~~~~~~~

``stanford2``
