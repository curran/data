+---------+-------------------+
| BtheB   | R Documentation   |
+---------+-------------------+

Beat the Blues Data
-------------------

Description
~~~~~~~~~~~

Data from a clinical trial of an interactive multimedia program called
‘Beat the Blues’.

Usage
~~~~~

::

    data("BtheB")

Format
~~~~~~

A data frame with 100 observations of 100 patients on the following 8
variables.

drug
    did the patient take anti-depressant drugs (``No`` or ``Yes``).

length
    the length of the current episode of depression, a factor with
    levels ``<6m`` (less than six months) and ``>6m`` (more than six
    months).

treatment
    treatment group, a factor with levels ``TAU`` (treatment as usual)
    and ``BtheB`` (Beat the Blues)

bdi.pre
    Beck Depression Inventory II before treatment.

bdi.2m
    Beck Depression Inventory II after two months.

bdi.4m
    Beck Depression Inventory II after four months.

bdi.6m
    Beck Depression Inventory II after six months.

bdi.8m
    Beck Depression Inventory II after eight months.

Details
~~~~~~~

Longitudinal data from a clinical trial of an interactive, multimedia
program known as "Beat the Blues" designed to deliver cognitive
behavioural therapy to depressed patients via a computer terminal.
Patients with depression recruited in primary care were randomised to
either the Beating the Blues program, or to "Treatment as Usual (TAU)".

Note that the data are stored in the wide form, i.e., repeated
measurments are represented by additional columns in the data frame.

Source
~~~~~~

J. Proudfoot, D. Goldberg and A. Mann (2003). Computerised, interactive,
multimedia CBT reduced anxiety and depression in general practice: A
RCT. *Psychological Medicine*, **33**, 217–227.

Examples
~~~~~~~~

::


      data("BtheB", package = "HSAUR")
      layout(matrix(1:2, nrow = 1))   
      ylim <- range(BtheB[,grep("bdi", names(BtheB))], na.rm = TRUE)
      boxplot(subset(BtheB, treatment == "TAU")[,grep("bdi", names(BtheB))],
              main = "Treated as usual", ylab = "BDI", 
              xlab = "Time (in months)", names = c(0, 2, 4, 6, 8), ylim = ylim)
      boxplot(subset(BtheB, treatment == "BtheB")[,grep("bdi", names(BtheB))], 
              main = "Beat the Blues", ylab = "BDI", xlab = "Time (in months)",
              names = c(0, 2, 4, 6, 8), ylim = ylim)

