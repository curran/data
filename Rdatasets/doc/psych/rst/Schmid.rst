+----------+-------------------+
| Schmid   | R Documentation   |
+----------+-------------------+

12 variables created by Schmid and Leiman to show the Schmid-Leiman Transformation
----------------------------------------------------------------------------------

Description
~~~~~~~~~~~

John Schmid and John M. Leiman (1957) discuss how to transform a
hierarchical factor structure to a bifactor structure. Schmid contains
the example 12 x 12 correlation matrix. schmid.leiman is a 12 x 12
correlation matrix with communalities on the diagonal. This can be used
to show the effect of correcting for attenuation. Two additional data
sets are taken from Chen et al. (2006).

Usage
~~~~~

::

    data(Schmid)

Details
~~~~~~~

Two artificial correlation matrices from Schmid and Leiman (1957). One
real and one artificial covariance matrices from Chen et al. (2006).

-  Schmid: a 12 x 12 artificial correlation matrix created to show the
   Schmid-Leiman transformation.

-  schmid.leiman: A 12 x 12 matrix with communalities on the diagonal.
   Treating this as a covariance matrix shows the 6 x 6 factor solution

-  Chen: An 18 x 18 covariance matrix of health related quality of life
   items from Chen et al. (2006). Number of observations = 403. The
   first item is a measure of the quality of life. The remaining 17
   items form four subfactors: The items are (a) Cognition subscale:
   “Have difficulty reasoning and solving problems?" “React slowly to
   things that were said or done?"; “Become confused and start several
   actions at a time?" “Forget where you put things or appointments?";
   “Have difficulty concentrating?" (b) Vitality subscale: “Feel tired?"
   “Have enough energy to do the things you want?" (R) “Feel worn out?"
   ; “Feel full of pep?" (R). (c) Mental health subscale: “Feel calm and
   peaceful?"(R) “Feel downhearted and blue?"; “Feel very happy"(R) ;
   “Feel very nervous?" ; “Feel so down in the dumps nothing could cheer
   you up? (d) Disease worry subscale: “Were you afraid because of your
   health?"; “Were you frustrated about your health?"; “Was your health
   a worry in your life?" .

-  West: A 16 x 16 artificial covariance matrix from Chen et al. (2006).

Source
~~~~~~

John Schmid Jr. and John. M. Leiman (1957), The development of
hierarchical factor solutions.Psychometrika, 22, 83-90.

F.F. Chen, S.G. West, and K.H. Sousa.(2006) A comparison of bifactor and
second-order models of quality of life. Multivariate Behavioral
Research, 41(2):189-225, 2006.

References
~~~~~~~~~~

Y.-F. Yung, D.Thissen, and L.D. McLeod. (1999) On the relationship
between the higher-order factor model and the hierarchical factor model.
Psychometrika, 64(2):113-128, 1999.

Examples
~~~~~~~~

::

    data(Schmid)
    cor.plot(Schmid,TRUE)
    print(fa(Schmid,6,rotate="oblimin"),cut=0)  #shows an oblique solution
    round(cov2cor(schmid.leiman),2)
    cor.plot(cov2cor(West),TRUE)

