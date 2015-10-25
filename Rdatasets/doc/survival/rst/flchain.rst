+-----------+-------------------+
| flchain   | R Documentation   |
+-----------+-------------------+

Assay of serum free light chain for 7874 subjects.
--------------------------------------------------

Description
~~~~~~~~~~~

This is a stratified random sample containing 1/2 of the subjects from a
study of the relationship between serum free light chain (FLC) and
mortality. The original sample contains samples on approximately 2/3 of
the residents of Olmsted County aged 50 or greater.

Usage
~~~~~

::

    data(flchain)

Format
~~~~~~

A data frame with 7874 persons containing the following variables.

``age ``
    age in years

``sex``
    F=female, M=male

``sample.yr``
    the calendar year in which a blood sample was obtained

``kappa``
    serum free light chain, kappa portion

``lambda``
    serum free light chain, lambda portion

``flc.grp``
    the FLC group for the subject, as used in the original analysis

``creatinine``
    serum creatinine

``mgus``
    1 if the subject had been diagnosed with monoclonal gammapothy
    (MGUS)

``futime``
    days from enrollment until death. Note that there are 3 subjects
    whose sample was obtained on their death date.

``death``
    0=alive at last contact date, 1=dead

``chapter``
    for those who died, a grouping of their primary cause of death by
    chapter headings of the International Code of Diseases ICD-9

Details
~~~~~~~

In 1995 Dr. Robert Kyle embarked on a study to determine the prevalence
of monoclonal gammopathy of undetermined significance (MGUS) in Olmsted
County, Minnesota, a condition which is normally only found by chance
from a test (serum electrophoresis) which is ordered for other causes.
Later work suggested that one component of immunoglobulin production,
the serum free light chain, might be a possible marker for immune
disregulation. In 2010 Dr. Angela Dispenzieri and colleagues assayed FLC
levels on those samples from the original study for which they had
patient permission and from which sufficient material remained for
further testing. They found that elevated FLC levels were indeed
associated with higher death rates.

Patients were recruited when they came to the clinic for other
appointments, with a final random sample of those who had not yet had a
visit since the study began. An interesting side question is whether
there are differences between early, mid, and late recruits.

This data set contains an age and sex stratified random sample that
includes 7874 of the original 15759 subjects. The original subject
identifiers and dates have been removed to protect patient identity.
Subsampling was done to further protect this information.

Source
~~~~~~

The primary investigator (A Dispenzieri) and statistician (T Therneau)
for the study.

References
~~~~~~~~~~

A Dispenzieri, J Katzmann, R Kyle, D Larson, T Therneau, C Colby, R
Clark, G Mead, S Kumar, LJ Melton III and SV Rajkumar (2012). Use of
monclonal serum immunoglobulin free light chains to predict overall
survival in the general population, Mayo Clinic Proceedings 87:512-523.

R Kyle, T Therneau, SV Rajkumar, D Larson, M Plevak, J Offord, A
Dispenzieri, J Katzmann, and LJ Melton, III, 2006, Prevalence of
monoclonal gammopathy of undetermined significance, New England J
Medicine 354:1362-1369.

Examples
~~~~~~~~

::

    data(flchain)
    age.grp <-  cut(flchain$age, c(49,54, 59,64, 69,74,79, 89, 110),
                   labels= paste(c(50,55,60,65,70,75,80,90),
                                 c(54,59,64,69,74,79,89,109), sep='-'))
    table(flchain$sex, age.grp)

