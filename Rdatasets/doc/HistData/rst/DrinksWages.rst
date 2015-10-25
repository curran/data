+---------------+-------------------+
| DrinksWages   | R Documentation   |
+---------------+-------------------+

Elderton and Pearson's (1910) data on drinking and wages
--------------------------------------------------------

Description
~~~~~~~~~~~

In 1910, Karl Pearson weighed in on the debate, fostered by the
temperance movement, on the evils done by alcohol not only to drinkers,
but to their families. The report "A first study of the influence of
parental alcholism on the physique and ability of their offspring" was
an ambitious attempt to the new methods of statistics to bear on an
important question of social policy, to see if the hypothesis that
children were damaged by parental alcoholism would stand up to
statistical scrutiny.

Working with his assistant, Ethel M. Elderton, Pearson collected
voluminous data in Edinburgh and Manchester on many aspects of health,
stature, intelligence, etc. of children classified according to the
drinking habits of their parents. His conclusions where almost
invariably negative: the tendency of parents to drink appeared unrelated
to any thing he had measured.

The firestorm that this report set off is well described by Stigler
(1999), Chapter 1. The data set ``DrinksWages`` is just one of Pearsons
many tables, that he published in a letter to *The Times*, August 10,
1910.

Usage
~~~~~

::

    data(DrinksWages)

Format
~~~~~~

A data frame with 70 observations on the following 6 variables, giving
the number of non-drinkers (``sober``) and drinkers (``drinks``) in
various occupational categories (``trade``).

``class``
    wage class: a factor with levels ``A`` ``B`` ``C``

``trade``
    a factor with levels ``baker`` ``barman`` ``billposter`` ...
    ``wellsinker`` ``wireworker``

``sober``
    the number of non-drinkers, a numeric vector

``drinks``
    the number of drinkers, a numeric vector

``wage``
    weekly wage (in shillings), a numeric vector

``n``
    total number, a numeric vector

Details
~~~~~~~

The data give Karl Pearson's tabulation of the father's trades from an
Edinburgh sample, classified by whether they dring or are sober, and
giving average weekly wage.

The wages are averages of the individuals' nominal wages. Class A is
those with wages under 2.5s.; B: those with wages 2.5s. to 30s.; C:
wages over 30s.

Source
~~~~~~

Pearson, K. (1910). *The Times*, August 10, 1910.

Stigler, S. M. (1999). *Statistics on the Table: The History of
Statistical Concepts and Methods*. Harvard University Press, Table 1.1

References
~~~~~~~~~~

M. E. Elderton & K. Pearson (1910). A first study of the influence of
parental alcholism on the physique and ability of their offspring,
Eugenics Laboratory Memoirs, 10.

Examples
~~~~~~~~

::

    data(DrinksWages)
    plot(DrinksWages) 

    # plot proportion sober vs. wage | class
    with(DrinksWages, plot(wage, sober/n, col=c("blue","red","green")[class]))

    # fit logistic regression model of sober on wage
    mod.sober <- glm(cbind(sober, n) ~ wage, family=binomial, data=DrinksWages)
    summary(mod.sober)
    op <- par(mfrow=c(2,2))
    plot(mod.sober)
    par(op)

    # TODO: plot fitted model

