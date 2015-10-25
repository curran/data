+------------+-------------------+
| toxicity   | R Documentation   |
+------------+-------------------+

Toxicity of Carboxylic Acids Data
---------------------------------

Description
~~~~~~~~~~~

The aim of the experiment was to predict the toxicity of carboxylic
acids on the basis of several molecular descriptors.

Usage
~~~~~

::

    data(toxicity)

Format
~~~~~~

A data frame with 38 observations on the following 10 variables which
are attributes for carboxylic acids:

``toxicity``
    aquatic toxicity, defined as *log(IGC50^(-1))*; typically the
    “response”.

``logKow``
    *log Kow*

    , the partition coefficient

``pKa``
    pKa: the dissociation constant

``ELUMO``
    **E**\ nergy of the **l**\ owest **u**\ noccupied **m**\ olecular
    **o**\ rbital

``Ecarb``
    Electrotopological state of the **carb**\ oxylic group

``Emet``
    Electrotopological state of the **met**\ hyl group

``RM``
    Molar refractivity

``IR``
    Refraction index

``Ts``
    Surface tension

``P``
    Polarizability

Source
~~~~~~

The website accompanying the MMY-book:
`http://www.wiley.com/legacy/wileychi/robust\_statistics <http://www.wiley.com/legacy/wileychi/robust_statistics>`__

References
~~~~~~~~~~

Maguna, F.P., Núñez, M.B., Okulik, N.B. and Castro, E.A. (2003) Improved
QSAR analysis of the toxicity of aliphatic carboxylic acids; *Russian
Journal of General Chemistry* **73**, 1792–1798.

Examples
~~~~~~~~

::

    data(toxicity)
    summary(toxicity)
    plot(toxicity)
    plot(toxicity ~ pKa, data = toxicity)

    ## robustly scale the data (to scale 1) using Qn
    (scQ.tox <- sapply(toxicity, Qn))
    scTox <- scale(toxicity, center = FALSE, scale = scQ.tox)
    csT <- covOGK(scTox, n.iter = 2,
                  sigmamu = s_Qn, weight.fn = hard.rejection)
    as.dist(round(cov2cor(csT$cov), 2))

