+----------+-------------------+
| cushny   | R Documentation   |
+----------+-------------------+

Cushny and Peebles Prolongation of Sleep Data
---------------------------------------------

Description
~~~~~~~~~~~

The original data set was bivariate and recorded for ten subjects the
prolongation of sleep caused by two different drugs. These data were
used by Student as the first illustration of the paired t-test which
only needs the *differences* of the two measurements. These differences
are the values of ``cushny``.

Usage
~~~~~

::

    data(cushny)

Format
~~~~~~

| numeric vector, sorted increasingly:
|  0 0.8 1 1.2 1.3 1.3 1.4 1.8 2.4 4.6

Source
~~~~~~

Cushny, A.R. and Peebles, A.R. (1905) The action of optical isomers. II.
Hyoscines. *J. Physiol.* **32**, 501–510.

These data were used by Student(1908) as the first illustration of the
paired t-test, see also ``sleep``; then cited by Fisher (1925) and
thereforth copied in numerous books as an example of a normally
distributed sample, see, e.g., Anderson (1958).

References
~~~~~~~~~~

Student (1908) The probable error of a mean. *Biometrika* **6**, 1–25.

Fisher, R.A. (1925) *Statistical Methods for Research Workers*; Oliver &
Boyd, Edinburgh.

Anderson, T.W. (1958) *An Introduction to Multivariate Statistical
Analysis*; Wiley, N.Y.

Hampel, F., Ronchetti, E., Rousseeuw, P. and Stahel, W. (1986) *Robust
Statistics: The Approach Based on Influence Functions*; Wiley, N.Y.

Examples
~~~~~~~~

::

    data(cushny)

    plot(cushny,  rep(0, 10), pch = 3, cex = 3,
         ylab = "", yaxt = "n")
    plot(jitter(cushny),  rep(0, 10), pch = 3, cex = 2,
         main = "'cushny' data (n= 10)", ylab = "", yaxt = "n")
    abline(h=0, col="gray", lty=3)
    myPt <- function(m, lwd = 2, ..., e = 1.5*par("cxy")[2])
      segments(m, +e, m, -e, lwd = lwd, ...)
    myPt(  mean(cushny), col = "pink3")
    myPt(median(cushny), col = "light blue")
    legend("topright", c("mean", "median"), lwd = 2,
           col = c("pink3", "light blue"), inset = .01)

    ## The 'sleep' data from the standard 'datasets' package:
    d.sleep <- local({ gr <- with(datasets::sleep, split(extra, group))
                       gr[[2]] - gr[[1]] })
    stopifnot(all.equal(cushny,
                        sort(d.sleep), tolerance=1e-15))

