+--------+-------------------+
| nuts   | R Documentation   |
+--------+-------------------+

nuts
----

Description
~~~~~~~~~~~

Squirrel data set (nuts) from Zuur, Hilbe, and Ieno (2013). As
originally reported by Flaherty et al (2012), researchers recorded
information about squirrel behavior and forest attributes across various
plots in Scotland's Abernathy Forest. The study focused on the following
variables. response cones number of cones stripped by red squirrels per
plot predictor sntrees standardized number of trees per plot sheight
standardized mean tree height per plot scover standardized percentage of
canopy cover per plot The stripped cone count was only taken when the
mean diameter of trees was under 0.6m (dbh).

Usage
~~~~~

::

    data(nuts)

Format
~~~~~~

A data frame with 52 observations on the following 5 variables.

``cones``
    total fish counted per site

``ntrees``
    mean water depth per site

``dbh``
    adjusted area of site

``height``
    total fish counted per site

``cover``
    mean water depth per site

``sntrees``
    standardized mean water depth per site

``sheight``
    standardized total fish counted per site

``scover``
    standardized mean water depth per site

Details
~~~~~~~

nuts is saved as a data frame. Count models use ntrees as response
variable. Counts start at 3

Source
~~~~~~

Zuur, Hilbe, Ieno (2013), A Beginner's Guide to GLM and GLMM using R,

References
~~~~~~~~~~

Hilbe, Joseph M (2014), Modeling Count Data, Cambridge University Press
Zuur, Hilbe, Ieno (2013), A Beginner's Guide to GLM and GLMM using R,
Highlands. Flaherty, S et al (2012), "The impact of forest stand
structure on red squirrels habitat use", Forestry 85:437-444.

Examples
~~~~~~~~

::

    data(nuts)
    nut <- subset(nuts, dbh<.6)
    summary(PO <- glm(cones ~ sntrees + sheight + scover, family=quasipoisson, data=nut))

