+-----------+-------------------+
| VerbAgg   | R Documentation   |
+-----------+-------------------+

Verbal Aggression item responses
--------------------------------

Description
~~~~~~~~~~~

These are the item responses to a questionaire on verbal aggression.
These data are used throughout De Boeck and Wilson, *Explanatory Item
Response Models* (Springer, 2004) to illustrate various forms of item
response models.

Format
~~~~~~

A data frame with 7584 observations on the following 13 variables.

``Anger``
    the subject's Trait Anger score as measured on the State-Trait Anger
    Expression Inventory (STAXI)

``Gender``
    the subject's gender - a factor with levels ``M`` and ``F``

``item``
    the item on the questionaire, as a factor

``resp``
    the subject's response to the item - an ordered factor with levels
    ``no`` < ``perhaps`` < ``yes``

``id``
    the subject identifier, as a factor

``btype``
    behavior type - a factor with levels ``curse``, ``scold`` and
    ``shout``

``situ``
    situation type - a factor with levels ``other`` and ``self``
    indicating other-to-blame and self-to-blame

``mode``
    behavior mode - a factor with levels ``want`` and ``do``

``r2``
    dichotomous version of the response - a factor with levels ``N`` and
    ``Y``

Source
~~~~~~

`http://bear.soe.berkeley.edu/EIRM/ <http://bear.soe.berkeley.edu/EIRM/>`__

References
~~~~~~~~~~

De Boeck and Wilson (2004), *Explanatory Item Response Models*,
Springer.

Examples
~~~~~~~~

::

    str(VerbAgg)
    ## Show how  r2 := h(resp) is defined:
    with(VerbAgg, stopifnot( identical(r2, {
         r <- factor(resp, ordered=FALSE); levels(r) <- c("N","Y","Y"); r})))

    xtabs(~ item + resp, VerbAgg)
    xtabs(~ btype + resp, VerbAgg)
    round(100 * ftable(prop.table(xtabs(~ situ + mode + resp, VerbAgg), 1:2), 1))
    person <- unique(subset(VerbAgg, select = c(id, Gender, Anger)))
    require(lattice)
    densityplot(~ Anger, person, groups = Gender, auto.key = list(columns = 2),
                xlab = "Trait Anger score (STAXI)")

    if(lme4:::testLevel() >= 3) { ## takes about 15 sec
    print(fmVA <- glmer(r2 ~ (Anger + Gender + btype + situ)^2 +
               (1|id) + (1|item), family = binomial, data =
               VerbAgg), corr=FALSE)
    }
                           ## much faster but less accurate
    print(fmVA0 <- glmer(r2 ~ (Anger + Gender + btype + situ)^2 +
                        (1|id) + (1|item), family = binomial, data =
                        VerbAgg, nAGQ=0L), corr=FALSE)

