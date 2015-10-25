+----------------------+-------------------+
| occupationalStatus   | R Documentation   |
+----------------------+-------------------+

Occupational Status of Fathers and their Sons
---------------------------------------------

Description
~~~~~~~~~~~

Cross-classification of a sample of British males according to each
subject's occupational status and his father's occupational status.

Usage
~~~~~

::

    occupationalStatus

Format
~~~~~~

A ``table`` of counts, with classifying factors ``origin`` (father's
occupational status; levels ``1:8``) and ``destination`` (son's
occupational status; levels ``1:8``).

Source
~~~~~~

Goodman, L. A. (1979) Simple Models for the Analysis of Association in
Cross-Classifications having Ordered Categories. *J. Am. Stat. Assoc.*,
**74** (367), 537–552.

The data set has been in package
`gnm <http://CRAN.R-project.org/package=gnm>`__ and been provided by the
package authors.

Examples
~~~~~~~~

::

    require(stats); require(graphics)

    plot(occupationalStatus)

    ##  Fit a uniform association model separating diagonal effects
    Diag <- as.factor(diag(1:8))
    Rscore <- scale(as.numeric(row(occupationalStatus)), scale = FALSE)
    Cscore <- scale(as.numeric(col(occupationalStatus)), scale = FALSE)
    modUnif <- glm(Freq ~ origin + destination + Diag + Rscore:Cscore,
                   family = poisson, data = occupationalStatus)

    summary(modUnif)
    plot(modUnif) # 4 plots, with warning about  h_ii ~= 1

