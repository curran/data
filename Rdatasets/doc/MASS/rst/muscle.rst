+----------+-------------------+
| muscle   | R Documentation   |
+----------+-------------------+

Effect of Calcium Chloride on Muscle Contraction in Rat Hearts
--------------------------------------------------------------

Description
~~~~~~~~~~~

The purpose of this experiment was to assess the influence of calcium in
solution on the contraction of heart muscle in rats. The left auricle of
21 rat hearts was isolated and on several occasions a constant-length
strip of tissue was electrically stimulated and dipped into various
concentrations of calcium chloride solution, after which the shortening
of the strip was accurately measured as the response.

Usage
~~~~~

::

    muscle

Format
~~~~~~

This data frame contains the following columns:

``Strip``
    which heart muscle strip was used?

``Conc``
    concentration of calcium chloride solution, in multiples of 2.2 mM.

``Length``
    the change in length (shortening) of the strip, (allegedly) in mm.

Source
~~~~~~

Linder, A., Chakravarti, I. M. and Vuagnat, P. (1964) Fitting asymptotic
regression curves with different asymptotes. In *Contributions to
Statistics. Presented to Professor P. C. Mahalanobis on the occasion of
his 70th birthday*, ed. C. R. Rao, pp. 221–228. Oxford: Pergamon Press.

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (2002) *Modern Applied Statistics with
S.* Fourth Edition. Springer.

Examples
~~~~~~~~

::

    A <- model.matrix(~ Strip - 1, data=muscle)
    rats.nls1 <- nls(log(Length) ~ cbind(A, rho^Conc),
       data = muscle, start = c(rho=0.1), algorithm="plinear")
    (B <- coef(rats.nls1))

    st <- list(alpha = B[2:22], beta = B[23], rho = B[1])
    (rats.nls2 <- nls(log(Length) ~ alpha[Strip] + beta*rho^Conc,
                      data = muscle, start = st))

    Muscle <- with(muscle, {
    Muscle <- expand.grid(Conc = sort(unique(Conc)), Strip = levels(Strip))
    Muscle$Yhat <- predict(rats.nls2, Muscle)
    Muscle <- cbind(Muscle, logLength = rep(as.numeric(NA), 126))
    ind <- match(paste(Strip, Conc),
                paste(Muscle$Strip, Muscle$Conc))
    Muscle$logLength[ind] <- log(Length)
    Muscle})

    lattice::xyplot(Yhat ~ Conc | Strip, Muscle, as.table = TRUE,
       ylim = range(c(Muscle$Yhat, Muscle$logLength), na.rm = TRUE),
       subscripts = TRUE, xlab = "Calcium Chloride concentration (mM)",
       ylab = "log(Length in mm)", panel =
       function(x, y, subscripts, ...) {
          panel.xyplot(x, Muscle$logLength[subscripts], ...)
          llines(spline(x, y))
       })

