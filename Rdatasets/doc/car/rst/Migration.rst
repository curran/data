+-------------+-------------------+
| Migration   | R Documentation   |
+-------------+-------------------+

Canadian Interprovincial Migration Data
---------------------------------------

Description
~~~~~~~~~~~

The ``Migration`` data frame has 90 rows and 8 columns.

Usage
~~~~~

::

    Migration

Format
~~~~~~

This data frame contains the following columns:

source
    Province of origin (source). A factor with levels: ``ALTA``,
    Alberta; ``BC``, British Columbia; ``MAN``, Manitoba; ``NB``, New
    Brunswick; ``NFLD``, New Foundland; ``NS``, Nova Scotia; ``ONT``,
    Ontario; ``PEI``, Prince Edward Island; ``QUE``, Quebec; ``SASK``,
    Saskatchewan.

destination
    Province of destination (1971 residence). A factor with levels:
    ``ALTA``, Alberta; ``BC``, British Columbia; ``MAN``, Manitoba;
    ``NB``, New Brunswick; ``NFLD``, New Foundland; ``NS``, Nova Scotia;
    ``ONT``, Ontario; ``PEI``, Prince Edward Island; ``QUE``, Quebec;
    ``SASK``, Saskatchewan.

migrants
    Number of migrants (from source to destination) in the period
    1966–1971.

distance
    Distance (between principal cities of provinces): NFLD, St. John;
    PEI, Charlottetown; NS, Halifax; NB, Fredricton; QUE, Montreal; ONT,
    Toronto; MAN, Winnipeg; SASK, Regina; ALTA, Edmonton; BC, Vancouver.

pops66
    1966 population of source province.

pops71
    1971 population of source province.

popd66
    1966 population of destination province.

popd71
    1971 population of destination province.

Details
~~~~~~~

There is one record in the data file for each migration stream. You can
average the 1966 and 1971 population figures for each of the source and
destination provinces.

Source
~~~~~~

Canada (1962) *Map*. Department of Mines and Technical Surveys.

Canada (1971) *Census of Canada*. Statistics Canada, Vol. 1, Part 2
[Table 32].

Canada (1972) *Canada Year Book*. Statistics Canada [p. 1369].

References
~~~~~~~~~~

Fox, J. (2008) *Applied Regression Analysis and Generalized Linear
Models*, Second Edition. Sage.
