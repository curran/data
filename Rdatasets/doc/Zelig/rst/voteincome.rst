+--------------+-------------------+
| voteincome   | R Documentation   |
+--------------+-------------------+

Sample Turnout and Demographic Data from the 2000 Current Population Survey
---------------------------------------------------------------------------

Description
~~~~~~~~~~~

This data set contains turnout and demographic data from a sample of
respondents to the 2000 Current Population Survey (CPS). The states
represented are South Carolina and Arkansas. The data represent only a
sample and results from this example should not be used in publication.

Usage
~~~~~

::

    data(voteincome)

Format
~~~~~~

A data frame containing 7 variables ("state", "year", "vote", "income",
"education", "age", "female") and 1500 observations.

``state``
    a factor variable with levels equal to "AR" (Arkansas) and "SC"
    (South Carolina)

``year``
    an integer vector

``vote``
    an integer vector taking on values "1" (Voted) and "0" (Did Not
    Vote)

``income``
    an integer vector ranging from "4" (Less than \\$5000) to "17"
    (Greater than \\$75000) denoting family income. See the CPS codebook
    for more information on variable coding

``education``
    an integer vector ranging from "1" (Less than High School Education)
    to "4" (More than a College Education). See the CPS codebook for
    more information on variable coding

``age``
    an integer vector ranging from "18" to "85"

``female``
    an integer vector taking on values "1" (Female) and "0" (Male)

Source
~~~~~~

Census Bureau Current Population Survey

References
~~~~~~~~~~

`http://www.census.gov/cps <http://www.census.gov/cps>`__
