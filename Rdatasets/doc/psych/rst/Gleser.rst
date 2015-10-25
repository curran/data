+----------+-------------------+
| Gleser   | R Documentation   |
+----------+-------------------+

Example data from Gleser, Cronbach and Rajaratnam (1965) to show basic principles of generalizability theory.
-------------------------------------------------------------------------------------------------------------

Description
~~~~~~~~~~~

Gleser, Cronbach and Rajaratnam (1965) discuss the estimation of
variance components and their ratios as part of their introduction to
generalizability theory. This is a adaptation of their "illustrative
data for a completely matched G study" (Table 3). 12 patients are rated
on 6 symptoms by two judges. Components of variance are derived from the
ANOVA.

Usage
~~~~~

::

    data(Gleser)

Format
~~~~~~

A data frame with 12 observations on the following 12 variables. J item
by judge:

``J11``
    a numeric vector

``J12``
    a numeric vector

``J21``
    a numeric vector

``J22``
    a numeric vector

``J31``
    a numeric vector

``J32``
    a numeric vector

``J41``
    a numeric vector

``J42``
    a numeric vector

``J51``
    a numeric vector

``J52``
    a numeric vector

``J61``
    a numeric vector

``J62``
    a numeric vector

Details
~~~~~~~

Generalizability theory is the application of a components of variance
approach to the analysis of reliability. Given a G study
(generalizability) the components are estimated and then may be used in
a D study (Decision). Different ratios are formed as appropriate for the
particular D study.

Source
~~~~~~

Gleser, G., Cronbach, L., and Rajaratnam, N. (1965). Generalizability of
scores influenced by multiple sources of variance. Psychometrika,
30(4):395-418. (Table 3, rearranged to show increasing patient severity
and increasing item severity.

References
~~~~~~~~~~

Gleser, G., Cronbach, L., and Rajaratnam, N. (1965). Generalizability of
scores influenced by multiple sources of variance. Psychometrika,
30(4):395-418.

Examples
~~~~~~~~

::

    #Find the MS for each component:
    #First, stack the data
    data(Gleser)
    stack.g <- stack(Gleser)
    st.gc.df <- data.frame(stack.g,Persons=rep(letters[1:12],12),
    Items=rep(letters[1:6],each=24),Judges=rep(letters[1:2],each=12))
    #now do the ANOVA
    anov <- aov(values ~ (Persons*Judges*Items),data=st.gc.df)
    summary(anov)

