+--------------+-------------------+
| friendship   | R Documentation   |
+--------------+-------------------+

Simulated Example of Schoolchildren Friendship Network
------------------------------------------------------

Description
~~~~~~~~~~~

This data set contains six sociomatrices of simulated data on friendship
ties among schoolchildren.

Usage
~~~~~

::

    data(friendship)

Format
~~~~~~

Each variable in the dataset is a 15 by 15 matrix representing some form
of social network tie held by the fictitious children. The matrices are
labeled "friends", "advice", "prestige", "authority", "perpower" and
"per".

The sociomatrices were combined into the friendship dataset using the
format.network.data function from the netglm package by Skyler Cranmer
as shown in the example.

Source
~~~~~~

fictitious

Examples
~~~~~~~~

::

        ## Not run: 
    friendship <- format.network.data(friends, advice, prestige, authority, perpower, per)

    ## End(Not run)

