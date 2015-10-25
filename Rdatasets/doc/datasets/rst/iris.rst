+--------+-------------------+
| iris   | R Documentation   |
+--------+-------------------+

Edgar Anderson's Iris Data
--------------------------

Description
~~~~~~~~~~~

This famous (Fisher's or Anderson's) iris data set gives the
measurements in centimeters of the variables sepal length and width and
petal length and width, respectively, for 50 flowers from each of 3
species of iris. The species are *Iris setosa*, *versicolor*, and
*virginica*.

Usage
~~~~~

::

    iris
    iris3

Format
~~~~~~

``iris`` is a data frame with 150 cases (rows) and 5 variables (columns)
named ``Sepal.Length``, ``Sepal.Width``, ``Petal.Length``,
``Petal.Width``, and ``Species``.

``iris3`` gives the same data arranged as a 3-dimensional array of size
50 by 4 by 3, as represented by S-PLUS. The first dimension gives the
case number within the species subsample, the second the measurements
with names ``Sepal L.``, ``Sepal W.``, ``Petal L.``, and ``Petal W.``,
and the third the species.

Source
~~~~~~

Fisher, R. A. (1936) The use of multiple measurements in taxonomic
problems. *Annals of Eugenics*, **7**, Part II, 179–188.

The data were collected by Anderson, Edgar (1935). The irises of the
Gaspe Peninsula, *Bulletin of the American Iris Society*, **59**, 2–5.

References
~~~~~~~~~~

Becker, R. A., Chambers, J. M. and Wilks, A. R. (1988) *The New S
Language*. Wadsworth & Brooks/Cole. (has ``iris3`` as ``iris``.)

See Also
~~~~~~~~

``matplot`` some examples of which use ``iris``.

Examples
~~~~~~~~

::

    dni3 <- dimnames(iris3)
    ii <- data.frame(matrix(aperm(iris3, c(1,3,2)), ncol = 4,
                            dimnames = list(NULL, sub(" L.",".Length",
                                            sub(" W.",".Width", dni3[[2]])))),
        Species = gl(3, 50, labels = sub("S", "s", sub("V", "v", dni3[[3]]))))
    all.equal(ii, iris) # TRUE

