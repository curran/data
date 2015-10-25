+-----------+-------------------+
| smoking   | R Documentation   |
+-----------+-------------------+

smoking
-------

Description
~~~~~~~~~~~

A simple data set with only 6 observations.

Usage
~~~~~

::

    data(smoking)

Format
~~~~~~

A data frame with 6 observations on the following 4 variables.

``sbp``
    systolic blood pressure of subject

``male``
    1=male; 0=female

``smoker``
    1=hist of smoking; 0= no hist of smoking

``age``
    age of subject

Details
~~~~~~~

smoking is saved as a data frame.

Source
~~~~~~

none

References
~~~~~~~~~~

Hilbe, Joseph M (2014), Modeling Count Data, Cambridge University Press

Examples
~~~~~~~~

::

    sbp    <- c(131,132,122,119,123,115)
    male   <- c(1,1,1,0,0,0)
    smoker <- c(1,1,0,0,1,0)
    age    <- c(34,36,30,32,26,23)
    summary(reg1 <- lm(sbp~ male+smoker+age))

