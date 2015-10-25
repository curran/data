+------------+-------------------+
| epilepsy   | R Documentation   |
+------------+-------------------+

Epilepsy Attacks Data Set
-------------------------

Description
~~~~~~~~~~~

Data from a clinical trial of 59 patients with epilepsy (Breslow, 1996)
in order to illustrate diagnostic techniques in Poisson regression.

Usage
~~~~~

::

    data(epilepsy)

Format
~~~~~~

A data frame with 59 observations on the following 11 variables.

``ID``
    Patient identification number

``Y1``
    Number of epilepsy attacks patients have during the first follow-up
    period

``Y2``
    Number of epilepsy attacks patients have during the second follow-up
    period

``Y3``
    Number of epilepsy attacks patients have during the third follow-up
    period

``Y4``
    Number of epilepsy attacks patients have during the forth follow-up
    period

``Base``
    Number of epileptic attacks recorded during 8 week period prior to
    randomization

``Age``
    Age of the patients

``Trt``
    a factor with levels ``placebo`` ``progabide`` indicating whether
    the anti-epilepsy drug Progabide has been applied or not

``Ysum``
    Total number of epilepsy attacks patients have during the four
    follow-up periods

``Age10``
    Age of the patients devided by 10

``Base4``
    Variable ``Base`` devided by 4

Details
~~~~~~~

Thall and Vail reported data from a clinical trial of 59 patients with
epilepsy, 31 of whom were randomized to receive the anti-epilepsy drug
Progabide and 28 of whom received a placebo. Baseline data consisted of
the patient's age and the number of epileptic seizures recorded during 8
week period prior to randomization. The response consisted of counts of
seizures occuring during the four consecutive follow-up periods of two
weeks each.

Source
~~~~~~

Thall, P.F. and Vail S.C. (1990) Some covariance models for longitudinal
count data with overdispersion. *Biometrics* **46**, 657–671.

References
~~~~~~~~~~

Diggle, P.J., Liang, K.Y., and Zeger, S.L. (1994) *Analysis of
Longitudinal Data*; Clarendon Press.

Breslow N. E. (1996) Generalized linear models: Checking assumptions and
strengthening conclusions. *Statistica Applicata* **8**, 23–41.

Examples
~~~~~~~~

::

    data(epilepsy)
    str(epilepsy)
    pairs(epilepsy[,c("Ysum","Base4","Trt","Age10")])

    Efit1 <- glm(Ysum ~ Age10 + Base4*Trt, family=poisson, data=epilepsy)
    summary(Efit1)

    ## Robust Fit :
    Efit2 <- glmrob(Ysum ~ Age10 + Base4*Trt, family=poisson, data=epilepsy,
                    method = "Mqle",
                    tcc=1.2, maxit=100)
    summary(Efit2)

