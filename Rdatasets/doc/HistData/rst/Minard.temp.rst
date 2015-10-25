+----------+-------------------+
| Minard   | R Documentation   |
+----------+-------------------+

Data from Minard's famous graphic map of Napoleon's march on Moscow
-------------------------------------------------------------------

Description
~~~~~~~~~~~

Charles Joseph Minard's graphic depiction of the fate of Napoleon's
Grand Army in the Russian campaign of 1815 has been called the "greatest
statistical graphic ever drawn" (Tufte, 1983). Friendly (2002) describes
some background for this graphic, and presented it as Minard's Chalenge:
to reproduce it using modern statistical or graphic software, in a way
that showed the elegance of some computer language to both describe and
produce this graphic.

Usage
~~~~~

::

    data(Minard.troops)
    data(Minard.cities)
    data(Minard.temp)

Format
~~~~~~

``Minard.troops``: A data frame with 51 observations on the following 5
variables giving the number of surviving troops.

``long``
    Longitude

``lat``
    Latitude

``survivors``
    Number of surviving troops, a numeric vector

``direction``
    a factor with levels ``A`` ("Advance") ``R`` ("Retreat")

``group``
    a numeric vector

``Minard.cities``: A data frame with 20 observations on the following 3
variables giving the locations of various places along the path of
Napoleon's army.

``long``
    Longitude

``lat``
    Latitude

``city``
    City name: a factor with levels ``Bobr`` ``Chjat`` ... ``Witebsk``
    ``Wixma``

``Minard.temp``: A data frame with 9 observations on the following 4
variables, giving the temperature at various places along the march of
retreat from Moscow.

``long``
    Longitude

``temp``
    Temperature

``days``
    Number of days on the retreat march

``date``
    a factor with levels ``Dec01`` ``Dec06`` ``Dec07`` ``Nov09``
    ``Nov14`` ``Nov28`` ``Oct18`` ``Oct24``

Details
~~~~~~~

``date`` in ``Minard.temp`` should be made a real date in 1815.

Source
~~~~~~

`http://www.cs.uic.edu/~wilkinson/TheGrammarOfGraphics/minard.txt <http://www.cs.uic.edu/~wilkinson/TheGrammarOfGraphics/minard.txt>`__

References
~~~~~~~~~~

Friendly, M. (2002). Visions and Re-visions of Charles Joseph Minard,
*Journal of Educational and Behavioral Statistics*, 27, No. 1, 31-51.

Friendly, M. (2003). Re-Visions of Minard.
`http://www.math.yorku.ca/SCS/Gallery/re-minard.html <http://www.math.yorku.ca/SCS/Gallery/re-minard.html>`__

Examples
~~~~~~~~

::

    data(Minard.troops); data(Minard.cities)

    ## Not run: 
    require(ggplot2)
     plot_troops <- ggplot(Minard.troops, aes(long, lat)) +
       geom_path(aes(size = survivors, colour = direction, group = group))
       
     plot_both <- plot_troops + 
       geom_text(aes(label = city), size = 4, data = Minard.cities)
       
     plot_polished <- plot_both + 
       scale_size(to = c(1, 12), 
         breaks = c(1, 2, 3) * 10^5, labels = comma(c(1, 2, 3) * 10^5)) + 
       scale_colour_manual(values = c("grey50","red")) +
       xlab(NULL) + 
       ylab(NULL)
     
    # re-scale the plot window to an aspect ratio of ~ 4 x 1
     windows(width=12, height=3)
     plot_polished
     
     ## TODO: add the plot of temperature below

    ## End(Not run)

