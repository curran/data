+------------+-------------------+
| suicides   | R Documentation   |
+------------+-------------------+

Crowd Baiting Behaviour and Suicides
------------------------------------

Description
~~~~~~~~~~~

Data from a study carried out to investigate the causes of jeering or
baiting behaviour by a crowd when a person is threatening to commit
suicide by jumping from a high building.

Usage
~~~~~

::

    data("suicides")

Format
~~~~~~

A two-way classification, see ``table``.

Source
~~~~~~

L. Mann (1981), The baiting crowd in episodes of threatened suicide.
*Journal of Personality and Social Psychology*, **41**, 703–709.

Examples
~~~~~~~~

::


      data("suicides", package = "HSAUR")
      mosaicplot(suicides)

