+----------+-------------------+
| Jevons   | R Documentation   |
+----------+-------------------+

W. Stanley Jevons' data on numerical discrimination
---------------------------------------------------

Description
~~~~~~~~~~~

In a remarkable brief note in *Nature*, 1871, W. Stanley Jevons
described the results of an experiment he had conducted on himself to
determine the limits of the number of objects an observer could
comprehend immediately without counting them. This was an important
philosophical question: How many objects can the mind embrace at once?

He carried out 1027 trials in which he tossed an "uncertain number" of
uniform black beans into a box and immediately attempted to estimate the
number "without the least hesitation". His questions, procedure and
analysis anticipated by 75 years one of the most influential papers in
modern cognitive psychology by George Miller (1956), "The magical number
7 plus or minus 2: Some limits on ..." For Jevons, the magical number
was 4.5, representing an empirical law of complete accuracy.

Usage
~~~~~

::

    data(Jevons)

Format
~~~~~~

A frequency data frame with 50 observations on the following 4
variables.

``actual``
    Actual number: a numeric vector

``estimated``
    Estimated number: a numeric vector

``frequency``
    Frequency of this combination of (actual, estimated): a numeric
    vector

``error``
    ``actual``-``estimated``: a numeric vector

Details
~~~~~~~

The original data were presented in a two-way, 13 x 13 frequency table,
``estimated`` (3:15) x ``actual`` (3:15).

Source
~~~~~~

Jevons, W. S. (1871). The Power of Numerical Discrimination, *Nature*,
1871, III (281-282)

References
~~~~~~~~~~

Miller, G. A. (1956). The Magical Number Seven, Plus or Minus Two: Some
Limits on Our Capacity for Processing Information, *Psychological
Review*, 63, 81-97,
`http://www.musanim.com/miller1956/ <http://www.musanim.com/miller1956/>`__

Examples
~~~~~~~~

::

    data(Jevons)
    # show as tables
    xtabs(frequency ~ estimated+actual, data=Jevons)
    xtabs(frequency ~ error+actual, data=Jevons)

    # show as sunflowerplot with regression line
    with(Jevons, sunflowerplot(actual, estimated, frequency, 
      main="Jevons data on numerical estimation"))
    Jmod <-lm(estimated ~ actual, data=Jevons, weights=frequency)
    abline(Jmod)

    # show as balloonplots
    if (require(gplots)) {

    with(Jevons, balloonplot(actual, estimated, frequency, xlab="actual", ylab="estimated", 
      main="Jevons data on numerical estimation\nBubble area proportional to frequency",
      text.size=0.8))

    with(Jevons, balloonplot(actual, error, frequency, xlab="actual", ylab="error", 
      main="Jevons data on numerical estimation: Errors\nBubble area proportional to frequency", 
      text.size=0.8))
    }

    # plot average error
    if(require(reshape)) {
    unJevons <- untable(Jevons, Jevons$frequency)
    str(unJevons)

    require(plyr)
    mean_error <- function(df) mean(df$error, na.rm=TRUE)
    Jmean <- ddply(unJevons, .(actual), mean_error)
    with(Jmean, plot(actual, V1, ylab='Mean error', xlab='Actual number', type='b', main='Jevons data'))
    abline(h=0)
    }

