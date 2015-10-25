+-------------+-------------------+
| H\_barley   | R Documentation   |
+-------------+-------------------+

Yield data from a Minnesota barley trial
----------------------------------------

Description
~~~~~~~~~~~

Total yield in bushels per acre for 10 varieties at 6 sites in each of
two years.

Usage
~~~~~

::

    barley

Format
~~~~~~

A data frame with 120 observations on the following 4 variables.

yield
    Yield (averaged across three blocks) in bushels/acre.

variety
    Factor with levels ``"Svansota"``, ``"No. 462"``, ``"Manchuria"``,
    ``"No. 475"``, ``"Velvet"``, ``"Peatland"``, ``"Glabron"``,
    ``"No. 457"``, ``"Wisconsin No. 38"``, ``"Trebi"``.

year
    Factor with levels ``1932``, ``1931``

site
    Factor with 6 levels: ``"Grand Rapids"``, ``"Duluth"``,
    ``"University Farm"``, ``"Morris"``, ``"Crookston"``, ``"Waseca"``

Details
~~~~~~~

These data are yields in bushels per acre, of 10 varieties of barley
grown in 1/40 acre plots at University Farm, St. Paul, and at the five
branch experiment stations located at Waseca, Morris, Crookston, Grand
Rapids, and Duluth (all in Minnesota). The varieties were grown in three
randomized blocks at each of the six stations during 1931 and 1932,
different land being used each year of the test.

Immer et al. (1934) present the data for each
Year\*Site\*Variety\*Block. The data here is the average yield across
the three blocks.

Immer et al. (1934) refer (once) to the experiment as being conducted in
1930 and 1931, then later refer to it (repeatedly) as being conducted in
1931 and 1932. Later authors have continued the confusion.

Cleveland (1993) suggests that the data for the Morris site may have had
the years switched.

Author(s)
~~~~~~~~~

Documentation contributed by Kevin Wright.

Source
~~~~~~

Immer, R. F., H. K. Hayes, and LeRoy Powers. (1934). Statistical
Determination of Barley Varietal Adaptation. *Journal of the American
Society of Agronomy*, **26**, 403–419.

Wright, Kevin (2013). Revisiting Immer's Barley Data. *The American
Statistician*, **67(3)**, 129–133.

References
~~~~~~~~~~

Cleveland, William S. (1993) *Visualizing Data*. Hobart Press, Summit,
New Jersey.

Fisher, R. A. (1971) *The Design of Experiments*. Hafner, New York, 9th
edition.

See Also
~~~~~~~~

``immer`` in the MASS package for data from the same experiment
(expressed as total yield for 3 blocks) for a subset of varieties.

Examples
~~~~~~~~

::

    # Graphic suggesting the Morris data switched the years 1931 and 1932
    # Figure 1.1 from Cleveland
    dotplot(variety ~ yield | site, data = barley, groups = year,
            key = simpleKey(levels(barley$year), space = "right"),
            xlab = "Barley Yield (bushels/acre) ",
            aspect=0.5, layout = c(1,6), ylab=NULL)

