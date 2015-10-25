+-------------+-------------------+
| Arthritis   | R Documentation   |
+-------------+-------------------+

Arthritis Treatment Data
------------------------

Description
~~~~~~~~~~~

Data from Koch \\& Edwards (1988) from a double-blind clinical trial
investigating a new treatment for rheumatoid arthritis.

Usage
~~~~~

::

    data("Arthritis")

Format
~~~~~~

A data frame with 84 observations and 5 variables.

ID
    patient ID.

Treatment
    factor indicating treatment (Placebo, Treated).

Sex
    factor indicating sex (Female, Male).

Age
    age of patient.

Improved
    ordered factor indicating treatment outcome (None, Some, Marked).

Source
~~~~~~

Michael Friendly (2000), Visualizing Categorical Data:
`http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/arthrit.sas <http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/arthrit.sas>`__

References
~~~~~~~~~~

G. Koch \\& S. Edwards (1988), Clinical efficiency trials with
categorical data. In K. E. Peace (ed.), *Biopharmaceutical Statistics
for Drug Development*, 403–451. Marcel Dekker, New York.

M. Friendly (2000), *Visualizing Categorical Data*. SAS Institute, Cary,
NC.

Examples
~~~~~~~~

::

    data("Arthritis")
    art <- xtabs(~ Treatment + Improved, data = Arthritis, subset = Sex == "Female")
    art

    mosaic(art, gp = shading_Friendly)
    mosaic(art, gp = shading_max)

