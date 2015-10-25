+----------+-------------------+
| clouds   | R Documentation   |
+----------+-------------------+

Cloud Seeding Data
------------------

Description
~~~~~~~~~~~

Data from an experiment investigating the use of massive amounts of
silver iodide (100 to 1000 grams per cloud) in cloud seeding to increase
rainfall.

Usage
~~~~~

::

    data("clouds")

Format
~~~~~~

A data frame with 24 observations on the following 7 variables.

seeding
    a factor indicating whether seeding action occured (``no`` or
    ``yes``).

time
    number of days after the first day of the experiment.

sne
    suitability criterion.

cloudcover
    the percentage cloud cover in the experimental area, measured using
    radar.

prewetness
    the total rainfall in the target area one hour before seeding (in
    cubic metres times ``1e+8``).

echomotion
    a factor showing whether the radar echo was ``moving`` or
    ``stationary``.

rainfall
    the amount of rain in cubic metres times ``1e+8``.

Details
~~~~~~~

Weather modification, or cloud seeding, is the treatment of individual
clouds or storm systems with various inorganic and organic materials in
the hope of achieving an increase in rainfall. Introduction of such
material into a cloud that contains supercooled water, that is, liquid
water colder than zero Celsius, has the aim of inducing freezing, with
the consequent ice particles growing at the expense of liquid droplets
and becoming heavy enough to fall as rain from clouds that otherwise
would produce none.

The data available in ``cloud`` were collected in the summer of 1975
from an experiment to investigate the use of massive amounts of silver
iodide 100 to 1000 grams per cloud) in cloud seeding to increase
rainfall. In the experiment, which was conducted in an area of Florida,
24 days were judged suitable for seeding on the basis that a measured
suitability criterion (``SNE``).

Source
~~~~~~

W. L. Woodley, J. Simpson, R. Biondini and J. Berkeley (1977), Rainfall
results 1970-75: Florida area cumulus experiment. *Science* **195**,
735–742.

R. D. Cook and S. Weisberg (1980), Characterizations of an empirical
influence function for detecting influential cases in regression.
*Technometrics* **22**, 495–508.

Examples
~~~~~~~~

::


      data("clouds", package = "HSAUR")
      layout(matrix(1:2, nrow = 2))
      boxplot(rainfall ~ seeding, data = clouds, ylab = "Rainfall")
      boxplot(rainfall ~ echomotion, data = clouds, ylab = "Rainfall")    

