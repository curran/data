+---------+-------------------+
| immer   | R Documentation   |
+---------+-------------------+

Yields from a Barley Field Trial
--------------------------------

Description
~~~~~~~~~~~

The ``immer`` data frame has 30 rows and 4 columns. Five varieties of
barley were grown in six locations in each of 1931 and 1932.

Usage
~~~~~

::

    immer

Format
~~~~~~

This data frame contains the following columns:

``Loc``
    The location.

``Var``
    The variety of barley (``"manchuria"``, ``"svansota"``,
    ``"velvet"``, ``"trebi"`` and ``"peatland"``).

``Y1``
    Yield in 1931.

``Y2``
    Yield in 1932.

Source
~~~~~~

Immer, F.R., Hayes, H.D. and LeRoy Powers (1934) Statistical
determination of barley varietal adaptation. *Journal of the American
Society for Agronomy* **26**, 403–419.

Fisher, R.A. (1947) *The Design of Experiments.* 4th edition. Edinburgh:
Oliver and Boyd.

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (1999) *Modern Applied Statistics with
S-PLUS.* Third Edition. Springer.

Examples
~~~~~~~~

::

    immer.aov <- aov(cbind(Y1,Y2) ~ Loc + Var, data = immer)
    summary(immer.aov)

    immer.aov <- aov((Y1+Y2)/2 ~ Var + Loc, data = immer)
    summary(immer.aov)
    model.tables(immer.aov, type = "means", se = TRUE, cterms = "Var")

