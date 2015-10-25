+----------+-------------------+
| Tucker   | R Documentation   |
+----------+-------------------+

9 Cognitive variables discussed by Tucker and Lewis (1973)
----------------------------------------------------------

Description
~~~~~~~~~~~

Tucker and Lewis (1973) introduced a reliability coefficient for ML
factor analysis. Their example data set was previously reported by
Tucker (1958) and taken from Thurstone and Thurstone (1941). The
correlation matrix is a 9 x 9 for 710 subjects and has two correlated
factors of ability: Word Fluency and Verbal.

Usage
~~~~~

::

    data(Tucker)

Format
~~~~~~

A data frame with 9 observations on the following 9 variables.

``t42``
    Prefixes

``t54``
    Suffixes

``t45``
    Chicago Reading Test: Vocabulary

``t46``
    Chicago Reading Test: Sentences

``t23``
    First and last letters

``t24``
    First letters

``t27``
    Four letter words

``t10``
    Completion

``t51``
    Same or Opposite

Details
~~~~~~~

The correlation matrix from Tucker (1958) was used in Tucker and Lewis
(1973) for the Tucker-Lewis Index of factoring reliability.

Source
~~~~~~

Tucker, Ledyard (1958) An inter-battery method of factor analysis,
Psychometrika, 23, 111-136.

References
~~~~~~~~~~

L.~Tucker and C.~Lewis. (1973) A reliability coefficient for maximum
likelihood factor analysis. Psychometrika, 38(1):1–10.

F.~J. Floyd and K.~F. Widaman. (1995) Factor analysis in the development
and refinement of clinical assessment instruments., Psychological
Assessment, 7(3):286 – 299.

Examples
~~~~~~~~

::

    data(Tucker)
    fa(Tucker,2,n.obs=710)
    omega(Tucker,2)

