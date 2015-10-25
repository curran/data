+----------+-------------------+
| infert   | R Documentation   |
+----------+-------------------+

Infertility after Spontaneous and Induced Abortion
--------------------------------------------------

Description
~~~~~~~~~~~

This is a matched case-control study dating from before the availability
of conditional logistic regression.

Usage
~~~~~

::

    infert

Format
~~~~~~

+------+-------------------------+------------------------+
| 1.   | Education               | 0 = 0-5 years          |
+------+-------------------------+------------------------+
|      |                         | 1 = 6-11 years         |
+------+-------------------------+------------------------+
|      |                         | 2 = 12+ years          |
+------+-------------------------+------------------------+
| 2.   | age                     | age in years of case   |
+------+-------------------------+------------------------+
| 3.   | parity                  | count                  |
+------+-------------------------+------------------------+
| 4.   | number of prior         | 0 = 0                  |
+------+-------------------------+------------------------+
|      | induced abortions       | 1 = 1                  |
+------+-------------------------+------------------------+
|      |                         | 2 = 2 or more          |
+------+-------------------------+------------------------+
| 5.   | case status             | 1 = case               |
+------+-------------------------+------------------------+
|      |                         | 0 = control            |
+------+-------------------------+------------------------+
| 6.   | number of prior         | 0 = 0                  |
+------+-------------------------+------------------------+
|      | spontaneous abortions   | 1 = 1                  |
+------+-------------------------+------------------------+
|      |                         | 2 = 2 or more          |
+------+-------------------------+------------------------+
| 7.   | matched set number      | 1-83                   |
+------+-------------------------+------------------------+
| 8.   | stratum number          | 1-63                   |
+------+-------------------------+------------------------+

Note
~~~~

One case with two prior spontaneous abortions and two prior induced
abortions is omitted.

Source
~~~~~~

Trichopoulos *et al* (1976) *Br. J. of Obst. and Gynaec.* **83**,
645–650.

Examples
~~~~~~~~

::

    require(stats)
    model1 <- glm(case ~ spontaneous+induced, data = infert, family = binomial())
    summary(model1)
    ## adjusted for other potential confounders:
    summary(model2 <- glm(case ~ age+parity+education+spontaneous+induced,
                         data = infert, family = binomial()))
    ## Really should be analysed by conditional logistic regression
    ## which is in the survival package
    if(require(survival)){
      model3 <- clogit(case ~ spontaneous+induced+strata(stratum), data = infert)
      print(summary(model3))
      detach()  # survival (conflicts)
    }

