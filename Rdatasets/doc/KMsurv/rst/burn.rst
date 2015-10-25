+--------+-------------------+
| burn   | R Documentation   |
+--------+-------------------+

data from Section 1.6
---------------------

Description
~~~~~~~~~~~

The ``burn`` data frame has 154 rows and 17 columns.

Format
~~~~~~

This data frame contains the following columns:

Obs
    Observation number

Z1
    Treatment: 0-routine bathing 1-Body cleansing

Z2
    Gender (0=male 1=female)

Z3
    Race: 0=nonwhite 1=white

Z4
    Percentage of total surface area burned

Z5
    Burn site indicator: head 1=yes, 0=no

Z6
    Burn site indicator: buttock 1=yes, 0=no

Z7
    Burn site indicator: trunk 1=yes, 0=no

Z8
    Burn site indicator: upper leg 1=yes, 0=no

Z9
    Burn site indicator: lower leg 1=yes, 0=no

Z10
    Burn site indicator: respiratory tract 1=yes, 0=no

Z11
    Type of burn: 1=chemical, 2=scald, 3=electric, 4=flame

T1
    Time to excision or on study time

D1
    Excision indicator: 1=yes 0=no

T2
    Time to prophylactic antibiotic treatment or on study time

D2
    Prophylactic antibiotic treatment: 1=yes 0=no

T3
    Time to straphylocous aureaus infection or on study time

D3
    Straphylocous aureaus infection: 1=yes 0=no

Source
~~~~~~

Klein and Moeschberger (1997) *Survival Analysis Techniques for Censored
and truncated data*, Springer. Ichida et al. Stat. Med. 12 (1993):
301-310.

Examples
~~~~~~~~

::

    data(burn)

