+-----------+-------------------+
| affairs   | R Documentation   |
+-----------+-------------------+

affairs
-------

Description
~~~~~~~~~~~

Data from Fair (1978). Although Fair used a tobit model with the data,
the outcome measure can be modeled as a count. In fact, Greene (2003)
modeled it as Poisson, but given the amount of overdispersion in the
data, employing a negative binomial model is an appropriate strategy.
The data is stored in the affairs data set. Naffairs is the response
variable, indicating the number of affairs reported by the participant
in the past year.

Usage
~~~~~

::

    data(affairs)

Format
~~~~~~

A data frame with 601 observations on the following 18 variables.

``naffairs``
    number of affairs within last year

``kids``
    1=have children;0= no children

``vryunhap``
    (1/0) very unhappily married

``unhap``
    (1/0) unhappily married

``avgmarr``
    (1/0) average married

``hapavg``
    (1/0) happily married

``vryhap``
    (1/0) very happily married

``antirel``
    (1/0) anti religious

``notrel``
    (1/0) not religious

``slghtrel``
    (1/0) slightly religious

``smerel``
    (1/0) somewhat religious

``vryrel``
    (1/0) very religious

``yrsmarr1``
    (1/0) >0.75 yrs

``yrsmarr2``
    (1/0) >1.5 yrs

``yrsmarr3``
    (1/0) >4.0 yrs

``yrsmarr4``
    (1/0) >7.0 yrs

``yrsmarr5``
    (1/0) >10.0 yrs

``yrsmarr6``
    (1/0) >15.0 yrs

Details
~~~~~~~

rwm5yr is saved as a data frame. Count models use naffairs as response
variable. 0 counts are included.

Source
~~~~~~

Fair, R. (1978). A Theory of Extramarital Affairs, Journal of Political
Economy, 86: 45-61. Greene, W.H. (2003). Econometric Analysis, Fifth
Edition, New York: Macmillan.

References
~~~~~~~~~~

Hilbe, Joseph M (2011), Negative Binomial Regression, Cambridge
University Press Hilbe, Joseph M (2009), Logistic regression Models,
Chapman & Hall/CRC

Examples
~~~~~~~~

::

    data(affairs)
    glmaffp <- glm(naffairs ~ kids + yrsmarr2 + yrsmarr3 + yrsmarr4 + yrsmarr5,
                   family = poisson, data = affairs)
    summary(glmaffp)
    exp(coef(glmaffp))

    require(MASS)
    glmaffnb <- glm.nb(naffairs ~ kids + yrsmarr2 + yrsmarr3 + yrsmarr4 + yrsmarr5,
                       data=affairs)
    summary(glmaffnb)
    exp(coef(glmaffnb))

