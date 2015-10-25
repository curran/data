+--------+-------------------+
| epil   | R Documentation   |
+--------+-------------------+

Seizure Counts for Epileptics
-----------------------------

Description
~~~~~~~~~~~

Thall and Vail (1990) give a data set on two-week seizure counts for 59
epileptics. The number of seizures was recorded for a baseline period of
8 weeks, and then patients were randomly assigned to a treatment group
or a control group. Counts were then recorded for four successive
two-week periods. The subject's age is the only covariate.

Usage
~~~~~

::

    epil

Format
~~~~~~

This data frame has 236 rows and the following 9 columns:

``y``
    the count for the 2-week period.

``trt``
    treatment, ``"placebo"`` or ``"progabide"``.

``base``
    the counts in the baseline 8-week period.

``age``
    subject's age, in years.

``V4``
    ``0/1`` indicator variable of period 4.

``subject``
    subject number, 1 to 59.

``period``
    period, 1 to 4.

``lbase``
    log-counts for the baseline period, centred to have zero mean.

``lage``
    log-ages, centred to have zero mean.

Source
~~~~~~

Thall, P. F. and Vail, S. C. (1990) Some covariance models for
longitudinal count data with over-dispersion. *Biometrics* **46**,
657–671.

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (2002) *Modern Applied Statistics with
S.* Fourth Edition. Springer.

Examples
~~~~~~~~

::

    summary(glm(y ~ lbase*trt + lage + V4, family = poisson,
                data = epil), cor = FALSE)
    epil2 <- epil[epil$period == 1, ]
    epil2["period"] <- rep(0, 59); epil2["y"] <- epil2["base"]
    epil["time"] <- 1; epil2["time"] <- 4
    epil2 <- rbind(epil, epil2)
    epil2$pred <- unclass(epil2$trt) * (epil2$period > 0)
    epil2$subject <- factor(epil2$subject)
    epil3 <- aggregate(epil2, list(epil2$subject, epil2$period > 0),
       function(x) if(is.numeric(x)) sum(x) else x[1])
    epil3$pred <- factor(epil3$pred,
       labels = c("base", "placebo", "drug"))

    contrasts(epil3$pred) <- structure(contr.sdif(3),
        dimnames = list(NULL, c("placebo-base", "drug-placebo")))
    summary(glm(y ~ pred + factor(subject) + offset(log(time)),
                family = poisson, data = epil3), cor = FALSE)

    summary(glmmPQL(y ~ lbase*trt + lage + V4,
                    random = ~ 1 | subject,
                    family = poisson, data = epil))
    summary(glmmPQL(y ~ pred, random = ~1 | subject,
                    family = poisson, data = epil3))

