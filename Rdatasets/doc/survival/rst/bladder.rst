+-----------+-------------------+
| bladder   | R Documentation   |
+-----------+-------------------+

Bladder Cancer Recurrences
--------------------------

Description
~~~~~~~~~~~

Data on recurrences of bladder cancer, used by many people to
demonstrate methodology for recurrent event modelling.

Bladder1 is the full data set from the study. It contains all three
treatment arms and all recurrences for 118 subjects; the maximum
observed number of recurrences is 9.

Bladder is the data set that appears most commonly in the literature. It
uses only the 85 subjects with nonzero follow-up who were assigned to
either thiotepa or placebo. The status variable is 1 for recurrence and
0 for everything else (including death for any reason). The data set is
laid out in the competing risks format of the paper by Wei, Lin, and
Weissfeld.

Bladder2 uses the same subset of subjects as bladder, but formated in
the (start, stop] or Anderson-Gill style. Note that in transforming from
the WLW to the AG style data set there is a quite common programming
mistake that leads to extra follow-up time for 12 subjects (all those
with more than 4 recurrences); this includes some earlier releases of
the data in R.

Usage
~~~~~

::

    bladder1
    bladder
    bladder2

Format
~~~~~~

bladder1

id:

Patient id

treatment:

Placebo, pyridoxine (vitamin B6), or thiotepa

number:

Initial number of tumours (8=8 or more)

size:

Size (cm) of largest initial tumour

recur:

Number of recurrences

start,stop:

The start and end time of each time interval

status:

End of interval code, 0=censored, 1=recurrence,

2=death from bladder disease, 3=death other/unknown cause

rtumor:

Number of tumors found at the time of a recurrence

rsize:

Size of largest tumor at a recurrence

enum:

Event number (observation number within patient)

bladder

id:

Patient id

rx:

Treatment 1=placebo 2=thiotepa

number:

Initial number of tumours (8=8 or more)

size:

size (cm) of largest initial tumour

stop:

recurrence or censoring time

enum:

which recurrence (up to 4)

bladder2

id:

Patient id

rx:

Treatment 1=placebo 2=thiotepa

number:

Initial number of tumours (8=8 or more)

size:

size (cm) of largest initial tumour

start:

start of interval (0 or previous recurrence time)

stop:

recurrence or censoring time

enum:

which recurrence (up to 4)

Source
~~~~~~

Andrews DF, Hertzberg AM (1985), DATA: A Collection of Problems from
Many Fields for the Student and Research Worker, New York:
Springer-Verlag.

LJ Wei, DY Lin, L Weissfeld (1989), Regression analysis of multivariate
incomplete failure time data by modeling marginal distributions.
*Journal of the American Statistical Association*, **84**.
