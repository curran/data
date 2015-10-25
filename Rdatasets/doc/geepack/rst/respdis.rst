+-----------+-------------------+
| respdis   | R Documentation   |
+-----------+-------------------+

Clustered Ordinal Respiratory Disorder
--------------------------------------

Description
~~~~~~~~~~~

The ``respdis`` data frame has 111 rows and 3 columns. The study
described in Miller et. al. (1993) is a randomized clinical trial of a
new treatment of respiratory disorder. The study was conducted in 111
patients who were randomly assigned to one of two treatments (active,
placebo). At each of four visits during the follow-up period, the
response status of each patients was classified on an ordinal scale.

Usage
~~~~~

::

    data(respdis)

Format
~~~~~~

This data frame contains the following columns:

y1, y2, y3, y4
    ordered factor measured at 4 visits for the response with levels,
    ``1`` < ``2`` < ``3``, 1 = poor, 2 = good, and 3 = excellent

trt
    a factor for treatment with levels, 1 = active, 0 = placebo.

References
~~~~~~~~~~

Miller, M.E., David, C.S., and Landis, R.J. (1993) The analysis of
longitudinal polytomous data: Generalized estimating equation and
connections with weighted least squares, *Biometrics* **49**: 1033-1048.

Examples
~~~~~~~~

::

    data(respdis)
    resp.l <- reshape(respdis, varying = list(c("y1", "y2", "y3", "y4")),
                      v.names = "resp", direction = "long")
    resp.l <- resp.l[order(resp.l$id, resp.l$time),]
    fit <- ordgee(ordered(resp) ~ trt, id = id, data = resp.l, int.const = FALSE)
    summary(fit)

    z <- model.matrix( ~ trt - 1, data = respdis)
    ind <- rep(1:111, 4*3/2 * 2^2)
    zmat <- z[ind,,drop=FALSE]
    fit <- ordgee(ordered(resp) ~ trt, id = id, data = resp.l, int.const = FALSE,
                  z = zmat, corstr = "exchangeable")
    summary(fit)

