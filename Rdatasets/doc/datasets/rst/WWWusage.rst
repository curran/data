+------------+-------------------+
| WWWusage   | R Documentation   |
+------------+-------------------+

Internet Usage per Minute
-------------------------

Description
~~~~~~~~~~~

A time series of the numbers of users connected to the Internet through
a server every minute.

Usage
~~~~~

::

    WWWusage

Format
~~~~~~

A time series of length 100.

Source
~~~~~~

Durbin, J. and Koopman, S. J. (2001) *Time Series Analysis by State
Space Methods.* Oxford University Press.
`http://www.ssfpack.com/dkbook/ <http://www.ssfpack.com/dkbook/>`__

References
~~~~~~~~~~

Makridakis, S., Wheelwright, S. C. and Hyndman, R. J. (1998)
*Forecasting: Methods and Applications.* Wiley.

Examples
~~~~~~~~

::

    require(graphics)
    work <- diff(WWWusage)
    par(mfrow = c(2, 1)); plot(WWWusage); plot(work)
    ## Not run: 
    require(stats)
    aics <- matrix(, 6, 6, dimnames = list(p = 0:5, q = 0:5))
    for(q in 1:5) aics[1, 1+q] <- arima(WWWusage, c(0, 1, q),
        optim.control = list(maxit = 500))$aic
    for(p in 1:5)
       for(q in 0:5) aics[1+p, 1+q] <- arima(WWWusage, c(p, 1, q),
           optim.control = list(maxit = 500))$aic
    round(aics - min(aics, na.rm = TRUE), 2)

    ## End(Not run)

