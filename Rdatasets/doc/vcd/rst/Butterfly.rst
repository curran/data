+-------------+-------------------+
| Butterfly   | R Documentation   |
+-------------+-------------------+

Butterfly Species in Malaya
---------------------------

Description
~~~~~~~~~~~

Data from Fisher et al. (1943) giving the number of tokens found for
each of 501 species of butterflies collected in Malaya.

Usage
~~~~~

::

    data("Butterfly")

Format
~~~~~~

A 1-way table giving the number of tokens for 501 species of
butterflies. The variable and its levels are

No

Name

Levels

1

nTokens

0, 1, ..., 24

Source
~~~~~~

Michael Friendly (2000), Visualizing Categorical Data, pages 21–22.

References
~~~~~~~~~~

R. A. Fisher, A. S. Corbet, C. B. Williams (1943), The relation between
the number of species and the number of individuals, *Journal of Animal
Ecology*, **12**, 42–58.

M. Friendly (2000), *Visualizing Categorical Data*. SAS Institute, Cary,
NC.

Examples
~~~~~~~~

::

    data("Butterfly")
    Ord_plot(Butterfly)

