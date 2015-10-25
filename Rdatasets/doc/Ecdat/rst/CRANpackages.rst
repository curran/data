+----------------+-------------------+
| CRANpackages   | R Documentation   |
+----------------+-------------------+

Growth of CRAN
--------------

Description
~~~~~~~~~~~

Data casually collected on the number of packages on the Comprehensive R
Archive Network (CRAN) at different dates.

NOTE: This could change in the future. See Details below.

Usage
~~~~~

::

    data(CRANpackages)

Format
~~~~~~

A ``data.frame`` containing:

Version
    an ordered factor of the R version number primarily in use at the
    time. This was taken from archives of the major releases at
    `https://svn.r-project.org/R/branches/R-1-3-patches/tests/internet.Rout.save <https://svn.r-project.org/R/branches/R-1-3-patches/tests/internet.Rout.save>`__,
    ...
    `https://svn.r-project.org/R/branches/R-3-1-branch/tests/internet.Rout.save <https://svn.r-project.org/R/branches/R-3-1-branch/tests/internet.Rout.save>`__

Date
    an object of class ``Date`` giving the date on which the count of
    the number of CRAN packages was determined.

Packages
    an integer number of packages on the CRAN mirror checked on the
    indicated ``Date``.

Source
    A factor giving the source (person) who collected the data.

Details
~~~~~~~

This seems to provide the most widely available source for data on the
growth of CRAN, manually recorded by John Fox and Spencer Graves. For a
discussion of these and related data, see Fox (2009).

For more detail, see the `CRAN
packages <https://github.com/hadley/cran-packages>`__ data on Github
maintained by Hadley Wickham. This contains the description file of
every package uploaded to CRAN prior to the date of Hadley's most recent
update. The current maintainer of the ``Ecdat`` and ``Ecfun`` packages
would consider contributions along the following lines:

1. It might be nice to have a more complete dataset or datasets showing
CRAN growth. This might include code fitting multiple models and
predicting future growth with error bounds computed using Bayesian Model
Averaging. These model fits might make an interesting addition to the
examples in this help file. With a little more effort, it might make an
interesting note for *R Journal*. Functions written to fit those models
might be added to the ``Ecfun`` package.

2. It might be nice to have a function in ``Ecfun`` to download the
`CRAN packages <https://github.com/hadley/cran-packages>`__ data from
Github and convert it to a format suitable for updating this dataset.

The current maintainer for ``Ecdat`` and ``Ecfun`` (Spencer Graves)
might be willing to accept code and documentation for this but is not
ready to do it himself at the present time.

Source
~~~~~~

John Fox, "Aspects of the Social Organization and Trajectory of the R
Project", *R Journal*, 1(2), Dec. 2009, 5-13.
`http://journal.r-project.org/archive/2009-2/RJournal\_2009-2\_Fox.pdf <http://journal.r-project.org/archive/2009-2/RJournal_2009-2_Fox.pdf>`__,
accessed 2014-04-13.

Examples
~~~~~~~~

::

    plot(Packages~Date, CRANpackages, log='y')
    # almost exponential growth

