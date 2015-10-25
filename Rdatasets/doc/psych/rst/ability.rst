+-----------+-------------------+
| ability   | R Documentation   |
+-----------+-------------------+

16 ability items scored as correct or incorrect.
------------------------------------------------

Description
~~~~~~~~~~~

16 multiple choice ability items 1525 subjects taken from the Synthetic
Aperture Personality Assessment (SAPA) web based personality assessment
project are saved as ``iqitems``. Those data are shown as examples of
how to score multiple choice tests and analyses of response
alternatives. When scored correct or incorrect, the data are useful for
demonstrations of tetrachoric based factor analysis ``irt.fa`` and
finding tetrachoric correlations.

Usage
~~~~~

::

    data(iqitems)

Format
~~~~~~

A data frame with 1525 observations on the following 16 variables. The
number following the name is the item number from SAPA.

``reason.4``
    Basic reasoning questions

``reason.16``
    Basic reasoning question

``reason.17``
    Basic reasoning question

``reason.19``
    Basic reasoning question

``letter.7``
    In the following alphanumeric series, what letter comes next?

``letter.33``
    In the following alphanumeric series, what letter comes next?

``letter.34``
    In the following alphanumeric series, what letter comes next

``letter.58``
    In the following alphanumeric series, what letter comes next?

``matrix.45``
    A matrix reasoning task

``matrix.46``
    A matrix reasoning task

``matrix.47``
    A matrix reasoning task

``matrix.55``
    A matrix reasoning task

``rotate.3``
    Spatial Rotation of type 1.2

``rotate.4``
    Spatial Rotation of type 1.2

``rotate.6``
    Spatial Rotation of type 1.1

``rotate.8``
    Spatial Rotation of type 2.3

Details
~~~~~~~

16 items were sampled from 80 items given as part of the SAPA
(`http://sapa-project.org <http://sapa-project.org>`__) project
(Revelle, Wilt and Rosenthal, 2009; Condon and Revelle, 2014) to develop
online measures of ability. These 16 items reflect four lower order
factors (verbal reasoning, letter series, matrix reasoning, and spatial
rotations. These lower level factors all share a higher level factor
('g').

This data set may be used to demonstrate item response functions,
``tetrachoric`` correlations, or ``irt.fa`` as well as ``omega``
estimates of of reliability and hierarchical structure.

In addition, the data set is a good example of doing item analysis to
examine the empirical response probabilities of each item alternative as
a function of the underlying latent trait. When doing this, it appears
that two of the matrix reasoning problems do not have monotonically
increasing trace lines for the probability correct. At moderately high
ability (theta = 1) there is a decrease in the probability correct from
theta = 0 and theta = 2.

Source
~~~~~~

The example data set is taken from the Synthetic Aperture Personality
Assessment personality and ability test at
`http://sapa-project.org <http://sapa-project.org>`__. The data were
collected with David Condon from 8/08/12 to 8/31/12.

References
~~~~~~~~~~

Revelle, William, Wilt, Joshua, and Rosenthal, Allen (2010) Personality
and Cognition: The Personality-Cognition Link. In Gruszka, Alexandra and
Matthews, Gerald and Szymura, Blazej (Eds.) Handbook of Individual
Differences in Cognition: Attention, Memory and Executive Control,
Springer.

Condon, David and Revelle, William, (2014) The International Cognitive
Ability Resource: Development and initial validation of a public-domain
measure. Intelligence, 43, 52-64.

Examples
~~~~~~~~

::

    data(ability)
    #not run
    # ability.irt <- irt.fa(ability)
    # ability.scores <- score.irt(ability.irt,ability)

