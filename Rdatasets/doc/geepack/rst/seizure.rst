+-----------+-------------------+
| seizure   | R Documentation   |
+-----------+-------------------+

Epiliptic Seizures
------------------

Description
~~~~~~~~~~~

The ``seizure`` data frame has 59 rows and 7 columns. The dataset has
the number of epiliptic seizures in each of four two-week intervals, and
in a baseline eight-week inverval, for treatment and control groups with
a total of 59 individuals.

Usage
~~~~~

::

    data(seizure)

Format
~~~~~~

This data frame contains the following columns:

y1
    the number of epiliptic seizures in the 1st 2-week interval

y2
    the number of epiliptic seizures in the 2nd 2-week interval

y3
    the number of epiliptic seizures in the 3rd 2-week interval

y4
    the number of epiliptic seizures in the 4th 2-week interval

trt
    an indicator of treatment

base
    the number of epilitic seizures in a baseline 8-week interval

age
    a numeric vector of subject age

Source
~~~~~~

Thall, P.F. and Vail S.C. (1990) Some covariance models for longitudinal
count data with overdispersion. *Biometrics* **46**: 657–671.

References
~~~~~~~~~~

Diggle, P.J., Liang, K.Y., and Zeger, S.L. (1994) Analysis of
Longitudinal Data. Clarendon Press.

Examples
~~~~~~~~

::

    data(seizure)
    ## Diggle, Liang, and Zeger (1994) pp166-168, compare Table 8.10
    seiz.l <- reshape(seizure,
                      varying=list(c("base","y1", "y2", "y3", "y4")),
                      v.names="y", times=0:4, direction="long")
    seiz.l <- seiz.l[order(seiz.l$id, seiz.l$time),]
    seiz.l$t <- ifelse(seiz.l$time == 0, 8, 2)
    seiz.l$x <- ifelse(seiz.l$time == 0, 0, 1)
    m1 <- geese(y ~ offset(log(t)) + x + trt + x:trt, id = id,
                data=seiz.l, corstr="exch", family=poisson)
    summary(m1)
    m2 <- geese(y ~ offset(log(t)) + x + trt + x:trt, id = id,
                data = seiz.l, subset = id!=49,
                corstr = "exch", family=poisson)
    summary(m2)

    ## Thall and Vail (1990)
    seiz.l <- reshape(seizure, varying=list(c("y1","y2","y3","y4")),
                      v.names="y", direction="long")
    seiz.l <- seiz.l[order(seiz.l$id, seiz.l$time),]
    seiz.l$lbase <- log(seiz.l$base / 4)
    seiz.l$lage <- log(seiz.l$age)
    seiz.l$v4 <- ifelse(seiz.l$time == 4, 1, 0)
    m3 <- geese(y ~ lbase + trt + lbase:trt + lage + v4, 
                sformula = ~ as.factor(time) - 1, id = id,
                data = seiz.l, corstr = "exchangeable", family=poisson)
    ## compare to Model 13 in Table 4, noticeable difference
    summary(m3)

    ## set up a design matrix for the correlation
    z <- model.matrix(~ age, data = seizure)  # data is not seiz.l
    ## just to illustrate the scale link and correlation link
    m4 <- geese(y ~ lbase + trt + lbase:trt + lage + v4,
                sformula = ~ as.factor(time)-1, id = id,
                data = seiz.l, corstr = "ar1", family = poisson,
                zcor = z, cor.link = "fisherz", sca.link = "log")
    summary(m4)

