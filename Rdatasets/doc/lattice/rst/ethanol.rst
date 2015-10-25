+--------------+-------------------+
| H\_ethanol   | R Documentation   |
+--------------+-------------------+

Engine exhaust fumes from burning ethanol
-----------------------------------------

Description
~~~~~~~~~~~

Ethanol fuel was burned in a single-cylinder engine. For various
settings of the engine compression and equivalence ratio, the emissions
of nitrogen oxides were recorded.

Usage
~~~~~

::

    ethanol

Format
~~~~~~

A data frame with 88 observations on the following 3 variables.

NOx
    Concentration of nitrogen oxides (NO and NO2) in micrograms/J.

C
    Compression ratio of the engine.

E
    Equivalence ratio–a measure of the richness of the air and ethanol
    fuel mixture.

Author(s)
~~~~~~~~~

Documentation contributed by Kevin Wright.

Source
~~~~~~

Brinkman, N.D. (1981) Ethanol Fuel—A Single-Cylinder Engine Study of
Efficiency and Exhaust Emissions. *SAE transactions*, **90**, 1410–1424.

References
~~~~~~~~~~

Cleveland, William S. (1993) *Visualizing Data*. Hobart Press, Summit,
New Jersey.

Examples
~~~~~~~~

::

    ## Constructing panel functions on the fly
    EE <- equal.count(ethanol$E, number=9, overlap=1/4)
    xyplot(NOx ~ C | EE, data = ethanol,
           prepanel = function(x, y) prepanel.loess(x, y, span = 1),
           xlab = "Compression ratio", ylab = "NOx (micrograms/J)",
           panel = function(x, y) {
               panel.grid(h=-1, v= 2)
               panel.xyplot(x, y)
               panel.loess(x,y, span=1)
           },
           aspect = "xy")

    # Wireframe loess surface fit.  See Figure 4.61 from Cleveland.
    require(stats)
    with(ethanol, {
      eth.lo <- loess(NOx ~ C * E, span = 1/3, parametric = "C", 
                      drop.square = "C", family="symmetric")
      eth.marginal <- list(C = seq(min(C), max(C), length.out = 25), 
                           E = seq(min(E), max(E), length.out = 25))
      eth.grid <- expand.grid(eth.marginal)
      eth.fit <- predict(eth.lo, eth.grid)
      wireframe(eth.fit ~ eth.grid$C * eth.grid$E,
                shade=TRUE,
            screen = list(z = 40, x = -60, y=0),
            distance = .1,
            xlab = "C", ylab = "E", zlab = "NOx")
    })

