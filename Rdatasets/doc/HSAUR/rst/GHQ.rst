+-------+-------------------+
| GHQ   | R Documentation   |
+-------+-------------------+

General Health Questionnaire
----------------------------

Description
~~~~~~~~~~~

Data from an psychiatric screening questionnaire

Usage
~~~~~

::

    data("GHQ")

Format
~~~~~~

A data frame with 22 observations on the following 4 variables.

``GHQ``
    the General Health Questionnaire score.

``sex``
    a factor with levels ``female`` and ``male``

``cases``
    the number of diseased subjects.

``non.cases``
    the number of healthy subjects.

Details
~~~~~~~

The data arise from a study of a psychiatric screening questionnaire
called the GHQ (General Health Questionnaire, see Goldberg, 1972). Here
the main question of interest is to see how caseness is related to
gender and GHQ score.

Source
~~~~~~

D. Goldberg (1972). *The Detection of Psychiatric Illness by
Questionnaire*, Oxford University Press, Oxford, UK.

Examples
~~~~~~~~

::


      data("GHQ", package = "HSAUR")
      male <- subset(GHQ, sex == "male")
      female <- subset(GHQ, sex == "female")
      layout(matrix(1:2, ncol = 2))
      barplot(t(as.matrix(male[,c("cases", "non.cases")])), main = "Male", xlab = "GHC score")
      barplot(t(as.matrix(male[,c("cases", "non.cases")])), main = "Female", xlab = "GHC score")

