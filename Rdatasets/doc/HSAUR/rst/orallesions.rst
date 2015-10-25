+---------------+-------------------+
| orallesions   | R Documentation   |
+---------------+-------------------+

Oral Lesions in Rural India
---------------------------

Description
~~~~~~~~~~~

The distribution of the oral lesion site found in house-to-house surveys
in three geographic regions of rural India.

Usage
~~~~~

::

    data("orallesions")

Format
~~~~~~

A two-way classification, see ``table``.

Source
~~~~~~

Cyrus R. Mehta and Nitin R. Patel (2003), *StatXact-6: Statistical
Software for Exact Nonparametric Inference*, Cytel Software Cooperation,
Cambridge, USA.

Examples
~~~~~~~~

::


      data("orallesions", package = "HSAUR")
      mosaicplot(orallesions)

