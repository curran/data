+--------+-------------------+
| mgus   | R Documentation   |
+--------+-------------------+

Monoclonal gammapothy data
--------------------------

Description
~~~~~~~~~~~

Natural history of 241 subjects with monoclonal gammapothy of
undetermined significance (MGUS).

Usage
~~~~~

::

    mgus
    mgus1
    mgus2

Format
~~~~~~

mgus: A data frame with 241 observations on the following 12 variables.

id:

subject id

age:

age in years

sex:

``male`` or ``female``

dxyr:

year of diagnosis

pcdx:

for subjects who progress to a plasma cell malignancy

the subtype of malignancy: multiple myeloma (MM) is the

most common, followed by amyloidosis (AM), macroglobulinemia (MA),

and other lymphprolifative (LP)

pctime:

days from MGUS until diagnosis of a plasma cell malignancy

futime:

days from diagnosis to last follow-up

death:

1= follow-up is until death

alb:

albumin level at MGUS diagnosis

creat:

creatinine at MGUS diagnosis

hgb:

hemoglobin at MGUS diagnosis

mspike:

size of the monoclonal protien spike at diagnosis

mgus1: The same data set in start,stop format. Contains the id, age,
sex, and laboratory variable described above along with

start, stop:

sequential intervals of time for each subject

status:

=1 if the interval ends in an event

event:

the event type

mgus2: The mgus data, but formatted in the competing risks style. Each
subject has three observations, one for time to death, one for time to
MM, and one for time to a PC malignancy other than MM. Contains the id,
age, sex, and laboratory variable described above along with

time:

time to event or censoring

status:

1 if the event occured, 0 otherwise

event:

death, myeloma, or other

Details
~~~~~~~

Plasma cells are responsible for manufacturing immunoglobulins, an
important part of the immune defense. At any given time there are
estimated to be about *10^6* different immunoglobulins in the
circulation at any one time. When a patient has a plasma cell malignancy
the distribuion will become dominated by a single isotype, the product
of the malignant clone, visible as a spike on a serum protein
electrophoresis. Monoclonal gammapothy of undertermined significance
(MGUS) is the presence of such a spike, but in a patient with no
evidence of overt malignancy. This data set of 241 sequential subjects
at Mayo Clinic was the groundbreaking study defining the natural history
of such subjects.

Source
~~~~~~

Mayo Clinic data courtesy of Dr. Robert Kyle.

References
~~~~~~~~~~

R Kyle, Benign monoclonal gammopathy – after 20 to 35 years of
follow-up, Mayo Clinic Proc 1993; 68:26-36.
