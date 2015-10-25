+---------+-------------------+
| gehan   | R Documentation   |
+---------+-------------------+

Remission Times of Leukaemia Patients
-------------------------------------

Description
~~~~~~~~~~~

A data frame from a trial of 42 leukaemia patients. Some were treated
with the drug *6-mercaptopurine* and the rest are controls. The trial
was designed as matched pairs, both withdrawn from the trial when either
came out of remission.

Usage
~~~~~

::

    gehan

Format
~~~~~~

This data frame contains the following columns:

``pair``
    label for pair.

``time``
    remission time in weeks.

``cens``
    censoring, 0/1.

``treat``
    treatment, control or 6-MP.

Source
~~~~~~

Cox, D. R. and Oakes, D. (1984) *Analysis of Survival Data.* Chapman &
Hall, p. 7. Taken from

Gehan, E.A. (1965) A generalized Wilcoxon test for comparing arbitrarily
single-censored samples. *Biometrika* **52**, 203–233.

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (2002) *Modern Applied Statistics with
S.* Fourth edition. Springer.

Examples
~~~~~~~~

::

    library(survival)
    gehan.surv <- survfit(Surv(time, cens) ~ treat, data = gehan,
         conf.type = "log-log")
    summary(gehan.surv)
    survreg(Surv(time, cens) ~ factor(pair) + treat, gehan, dist = "exponential")
    summary(survreg(Surv(time, cens) ~ treat, gehan, dist = "exponential"))
    summary(survreg(Surv(time, cens) ~ treat, gehan))
    gehan.cox <- coxph(Surv(time, cens) ~ treat, gehan)
    summary(gehan.cox)

