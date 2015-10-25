+---------+-------------------+
| swiss   | R Documentation   |
+---------+-------------------+

Swiss Fertility and Socioeconomic Indicators (1888) Data
--------------------------------------------------------

Description
~~~~~~~~~~~

Standardized fertility measure and socio-economic indicators for each of
47 French-speaking provinces of Switzerland at about 1888.

Usage
~~~~~

::

    swiss

Format
~~~~~~

A data frame with 47 observations on 6 variables, *each* of which is in
percent, i.e., in *[0, 100]*.

+-------------------------+-------------------------+-------------------------+
| [,1]                    | Fertility               | *Ig*, ‘                 |
|                         |                         | common standardized     |
|                         |                         | fertility measure’      |
+-------------------------+-------------------------+-------------------------+
| [,2]                    | Agriculture             | % of males involved in  |
|                         |                         | agriculture as          |
|                         |                         | occupation              |
+-------------------------+-------------------------+-------------------------+
| [,3]                    | Examination             | % draftees receiving    |
|                         |                         | highest mark on army    |
|                         |                         | examination             |
+-------------------------+-------------------------+-------------------------+
| [,4]                    | Education               | % education beyond      |
|                         |                         | primary school for      |
|                         |                         | draftees.               |
+-------------------------+-------------------------+-------------------------+
| [,5]                    | Catholic                | % ‘                     |
|                         |                         | catholic’               |
|                         |                         |                         |
|                         |                         | (as opposed to ‘        |
|                         |                         | protestant’             |
|                         |                         |                         |
|                         |                         | ).                      |
+-------------------------+-------------------------+-------------------------+
| [,6]                    | Infant.Mortality        | live births who live    |
|                         |                         | less than 1 year.       |
+-------------------------+-------------------------+-------------------------+

All variables but ‘Fertility’ give proportions of the population.

Details
~~~~~~~

(paraphrasing Mosteller and Tukey):

Switzerland, in 1888, was entering a period known as the *demographic
transition*; i.e., its fertility was beginning to fall from the high
level typical of underdeveloped countries.

The data collected are for 47 French-speaking “provinces” at about 1888.

Here, all variables are scaled to *[0, 100]*, where in the original, all
but ``"Catholic"`` were scaled to *[0, 1]*.

Note
~~~~

Files for all 182 districts in 1888 and other years have been available
at
`http://opr.princeton.edu/archive/eufert/switz.html <http://opr.princeton.edu/archive/eufert/switz.html>`__
or
`http://opr.princeton.edu/archive/pefp/switz.asp <http://opr.princeton.edu/archive/pefp/switz.asp>`__.

They state that variables ``Examination`` and ``Education`` are averages
for 1887, 1888 and 1889.

Source
~~~~~~

Project “16P5”, pages 549–551 in

Mosteller, F. and Tukey, J. W. (1977) *Data Analysis and Regression: A
Second Course in Statistics*. Addison-Wesley, Reading Mass.

indicating their source as “Data used by permission of Franice van de
Walle. Office of Population Research, Princeton University, 1976.
Unpublished data assembled under NICHD contract number No 1-HD-O-2077.”

References
~~~~~~~~~~

Becker, R. A., Chambers, J. M. and Wilks, A. R. (1988) *The New S
Language*. Wadsworth & Brooks/Cole.

Examples
~~~~~~~~

::

    require(stats); require(graphics)
    pairs(swiss, panel = panel.smooth, main = "swiss data",
          col = 3 + (swiss$Catholic > 50))
    summary(lm(Fertility ~ . , data = swiss))

