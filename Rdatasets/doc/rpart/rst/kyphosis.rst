+------------+-------------------+
| kyphosis   | R Documentation   |
+------------+-------------------+

Data on Children who have had Corrective Spinal Surgery
-------------------------------------------------------

Description
~~~~~~~~~~~

The ``kyphosis`` data frame has 81 rows and 4 columns. representing data
on children who have had corrective spinal surgery

Usage
~~~~~

::

    kyphosis

Format
~~~~~~

This data frame contains the following columns:

``Kyphosis``
    a factor with levels ``absent`` ``present`` indicating if a kyphosis
    (a type of deformation) was present after the operation.

``Age``
    in months

``Number``
    the number of vertebrae involved

``Start``
    the number of the first (topmost) vertebra operated on.

Source
~~~~~~

John M. Chambers and Trevor J. Hastie eds. (1992) *Statistical Models in
S*, Wadsworth and Brooks/Cole, Pacific Grove, CA.

Examples
~~~~~~~~

::

    fit <- rpart(Kyphosis ~ Age + Number + Start, data = kyphosis)
    fit2 <- rpart(Kyphosis ~ Age + Number + Start, data = kyphosis,
                  parms = list(prior = c(0.65, 0.35), split = "information"))
    fit3 <- rpart(Kyphosis ~ Age + Number + Start, data=kyphosis,
                  control = rpart.control(cp = 0.05))
    par(mfrow = c(1,2), xpd = TRUE)
    plot(fit)
    text(fit, use.n = TRUE)
    plot(fit2)
    text(fit2, use.n = TRUE)

