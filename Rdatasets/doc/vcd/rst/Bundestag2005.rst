+-----------------+-------------------+
| Bundestag2005   | R Documentation   |
+-----------------+-------------------+

Votes in German Bundestag Election 2005
---------------------------------------

Description
~~~~~~~~~~~

Number of votes by province in the German Bundestag election 2005 (for
the parties that eventually entered the parliament).

Usage
~~~~~

::

    data("Bundestag2005")

Format
~~~~~~

A 2-way ``"table"`` giving the number of votes for each party
(``Fraktion``) in each of the 16 German provinces (``Bundesland``):

+------+--------------+---------------------------------------------------+
| No   | Name         | Levels                                            |
+------+--------------+---------------------------------------------------+
| 1    | Bundesland   | Schleswig-Holstein, Mecklenburg-Vorpommern, ...   |
+------+--------------+---------------------------------------------------+
| 2    | Fraktion     | SPD, CDU/CSU, Gruene, FDP, Linke                  |
+------+--------------+---------------------------------------------------+

Details
~~~~~~~

In the election for the German parliament “Bundestag”, five parties
obtained enough votes to enter the parliament: the social democrats SPD,
the conservative CDU/CSU, the liberal FDP, the green party “Die Gruenen”
and the leftist party “Die Linke”. The table ``Bundestag2005`` gives the
number of votes for each party (``Fraktion``) in each of the 16 German
provinces (``Bundesland``). The provinces are ordered from North to
South.

The data have been obtained from the German statistical office
(Statistisches Bundesamt) from the Web page given below.

Note that the number of seats in the parliament cannot be computed from
the number of votes alone. The examples below show the distribution of
seats that resulted from the election.

Source
~~~~~~

Der Bundeswahlleiter, Statistisches Bundesamt.
`http://www.bundeswahlleiter.de/bundestagswahl2005/ <http://www.bundeswahlleiter.de/bundestagswahl2005/>`__

Examples
~~~~~~~~

::

    library(colorspace)
    ## The outcome of the election in terms of seats in the
    ## parliament was:
    seats <- structure(c(226, 61, 54, 51, 222),
      .Names = c("CDU/CSU", "FDP",  "Linke", "Gruene", "SPD"))

    ## Hues are chosen as metaphors for the political parties
    ## CDU/CSU: blue, FDP: yellow, Linke: purple, Gruene: green, SPD: red
    ## using the respective hues from a color wheel with
    ## chroma = 60 and luminance = 75
    parties <- rainbow_hcl(6, c = 60, l = 75)[c(5, 2, 6, 3, 1)]
    names(parties) <- names(seats)
    parties

    ## The pie chart shows that neither the SPD+Gruene coalition nor
    ## the opposition of CDU/CSU+FDP could assemble a majority.
    ## No party would enter a coalition with the leftists, leading to a
    ## big coalition.
    pie(seats, clockwise = TRUE, col = parties)

    ## The regional distribution of the votes, stratified by province,
    ## is shown in a mosaic display: first for the 10 Western then the
    ## 6 Eastern provinces.
    data("Bundestag2005")
    votes <- Bundestag2005[c(1, 3:5, 9, 11, 13:16, 2, 6:8, 10, 12),
                           c("CDU/CSU", "FDP", "SPD", "Gruene", "Linke")]
    mosaic(votes, gp = gpar(fill = parties[colnames(votes)]),
      spacing = spacing_highlighting, labeling = labeling_left,
      labeling_args = list(rot_labels = c(0, 90, 0, 0), pos_labels = "center",
      just_labels = c("center","center","center","right"), varnames = FALSE),
      margins = unit(c(2.5, 1, 1, 12), "lines"),
      keep_aspect_ratio = FALSE)

