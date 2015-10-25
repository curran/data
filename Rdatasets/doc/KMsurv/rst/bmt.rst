+-------+-------------------+
| bmt   | R Documentation   |
+-------+-------------------+

data from Section 1.3
---------------------

Description
~~~~~~~~~~~

The ``bmt`` data frame has 137 rows and 22 columns.

Format
~~~~~~

This data frame contains the following columns:

group
    Disease Group 1-ALL, 2-AML Low Risk, 3-AML High Risk

t1
    Time To Death Or On Study Time

t2
    Disease Free Survival Time (Time To Relapse, Death Or End Of Study)

d1
    Death Indicator 1-Dead 0-Alive

d2
    Relapse Indicator 1-Relapsed, 0-Disease Free

d3
    Disease Free Survival Indicator 1-Dead Or Relapsed, 0-Alive Disease
    Free)

ta
    Time To Acute Graft-Versus-Host Disease

da
    Acute GVHD Indicator 1-Developed Acute GVHD 0-Never Developed Acute
    GVHD)

tc
    Time To Chronic Graft-Versus-Host Disease

dc
    Chronic GVHD Indicator 1-Developed Chronic GVHD 0-Never Developed
    Chronic GVHD

tp
    Time To Chronic Graft-Versus-Host Disease

dp
    Platelet Recovery Indicator 1-Platelets Returned To Normal,
    0-Platelets Never Returned to Normal

z1
    Patient Age In Years

z2
    Donor Age In Years

z3
    Patient Sex: 1-Male, 0-Female

z4
    Donor Sex: 1-Male, 0-Female

z5
    Patient CMV Status: 1-CMV Positive, 0-CMV Negative

z6
    Donor CMV Status: 1-CMV Positive, 0-CMV Negative

z7
    Waiting Time to Transplant In Days

z8
    FAB: 1-FAB Grade 4 Or 5 and AML, 0-Otherwise

z9
    Hospital: 1-The Ohio State University, 2-Alferd , 3-St. Vincent,
    4-Hahnemann

z10
    MTX Used as a Graft-Versus-Host- Prophylactic: 1-Yes 0-No

Source
~~~~~~

Klein and Moeschberger (1997) *Survival Analysis Techniques for Censored
and truncated data*, Springer.

Examples
~~~~~~~~

::

    data(bmt)

