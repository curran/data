+-------+-------------------+
| cgd   | R Documentation   |
+-------+-------------------+

Chronic Granulotomous Disease data
----------------------------------

Description
~~~~~~~~~~~

Data are from a placebo controlled trial of gamma interferon in chronic
granulotomous disease (CGD). Uses the complete data on time to first
serious infection observed through end of study for each patient, which
includes the initial serious infections observed through the 7/15/89
interim analysis data cutoff, plus the residual data on occurence of
initial serious infections between the interim analysis cutoff and the
final blinded study visit for each patient. Only one patient was taken
off on the day of his last infection.

Usage
~~~~~

::

    cgd

Format
~~~~~~

id:

subject identifiction number

center:

enrolling center

random:

date of randomization

treatment:

placebo or gamma interferon

sex:

age:

age in years, at study entry

height:

height in cm at study entry

weight:

weight in kg at study entry

inherit:

pattern of inheritance

steroids:

use of steroids at study entry,1=yes

propylac:

use of prophylactic antibiotics at study entry

hos.cat:

a categorization of the centers into 4 groups

tstart, tstop:

start and end of each time interval

status:

1=the interval ends with an infection

enum:

observation number within subject

Source
~~~~~~

Fleming and Harrington, Counting Processes and Survival Analysis,
appendix D.2.
