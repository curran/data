+-----------------+-------------------+
| schizophrenia   | R Documentation   |
+-----------------+-------------------+

Age of Onset of Schizophrenia Data
----------------------------------

Description
~~~~~~~~~~~

Data on sex differences in the age of onset of schizophrenia.

Usage
~~~~~

::

    data("schizophrenia")

Format
~~~~~~

A data frame with 251 observations on the following 2 variables.

``age``
    age at the time of diagnosis.

``gender``
    a factor with levels ``female`` and ``male``

Details
~~~~~~~

A sex difference in the age of onset of schizophrenia was noted by
Kraepelin (1919). Subsequently epidemiological studies of the disorder
have consistently shown an earlier onset in men than in women. One model
that has been suggested to explain this observed difference is know as
the subtype model which postulates two type of schizophrenia, one
characterised by early onset, typical symptoms and poor premorbid
competence, and the other by late onset, atypical symptoms, and good
premorbid competence. The early onset type is assumed to be largely a
disorder of men and the late onset largely a disorder of women.

Source
~~~~~~

E. Kraepelin (1919), *Dementia Praecox and Paraphrenia*. Livingstone,
Edinburgh.

Examples
~~~~~~~~

::


      data("schizophrenia", package = "HSAUR")
      boxplot(age ~ gender, data = schizophrenia)

