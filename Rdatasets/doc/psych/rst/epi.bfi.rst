+-----------+-------------------+
| epi.bfi   | R Documentation   |
+-----------+-------------------+

13 personality scales from the Eysenck Personality Inventory and Big 5 inventory
--------------------------------------------------------------------------------

Description
~~~~~~~~~~~

A small data set of 5 scales from the Eysenck Personality Inventory, 5
from a Big 5 inventory, a Beck Depression Inventory, and State and Trait
Anxiety measures. Used for demonstrations of correlations, regressions,
graphic displays.

Usage
~~~~~

::

    data(epi.bfi)

Format
~~~~~~

A data frame with 231 observations on the following 13 variables.

``epiE``
    EPI Extraversion

``epiS``
    EPI Sociability (a subset of Extraversion items

``epiImp``
    EPI Impulsivity (a subset of Extraversion items

``epilie``
    EPI Lie scale

``epiNeur``
    EPI neuroticism

``bfagree``
    Big 5 inventory (from the IPIP) measure of Agreeableness

``bfcon``
    Big 5 Conscientiousness

``bfext``
    Big 5 Extraversion

``bfneur``
    Big 5 Neuroticism

``bfopen``
    Big 5 Openness

``bdi``
    Beck Depression scale

``traitanx``
    Trait Anxiety

``stateanx``
    State Anxiety

Details
~~~~~~~

Self report personality scales tend to measure the “Giant 2" of
Extraversion and Neuroticism or the “Big 5" of Extraversion,
Neuroticism, Agreeableness, Conscientiousness, and Openness. Here is a
small data set from Northwestern University undergraduates with scores
on the Eysenck Personality Inventory (EPI) and a Big 5 inventory taken
from the International Personality Item Pool.

Source
~~~~~~

Data were collected at the Personality, Motivation, and Cognition Lab
(PMCLab) at Northwestern by William Revelle)

References
~~~~~~~~~~

`http://personality-project.org/pmc.html <http://personality-project.org/pmc.html>`__

Examples
~~~~~~~~

::

    data(epi.bfi)
    pairs.panels(epi.bfi[,1:5])
    describe(epi.bfi)

