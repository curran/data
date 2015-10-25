+------------------------+-------------------+
| USstateAbbreviations   | R Documentation   |
+------------------------+-------------------+

Standard abbreviations for states of the United States
------------------------------------------------------

Description
~~~~~~~~~~~

The object returned by ``readUSstateAbbreviations()`` on May 20, 2013.

Usage
~~~~~

::

    data(USstateAbbreviations)

Format
~~~~~~

A ``data.frame`` containing 10 different character vectors of names or
codes for 76 different political entities including the United States,
the 50 states within the US, plus the District of Columbia, US
territories and other political designation, some of which are obsolete
but are included for historical reference.

Name
    The standard name of the entity.

Status
    description of status, e.g., state / commonwealth vs. island,
    territory, military mail code, etc.

ISO, ANSI.letters, ANSI.digits, USPS, USCG, Old.GPO, AP, Other
    Alternative abbreviations used per different standards. The most
    commmonly used among these may be the 2-letter codes officially used
    by the US Postal Service (``USPS``).

Details
~~~~~~~

This was read from `the Wikipedia article on "List of U.S. state
abbreviations" <http://en.wikipedia.org/wiki/List_of_U.S._state_abbreviations>`__

Source
~~~~~~

`the Wikipedia article on "List of U.S. state
abbreviations" <http://en.wikipedia.org/wiki/List_of_U.S._state_abbreviations>`__

See Also
~~~~~~~~

``readUSstateAbbreviations`` ``showNonASCII``
``grepNonStandardCharacters`` ``subNonStandardCharacters``

Examples
~~~~~~~~

::

    ##
    ## to use
    ##
    data(USstateAbbreviations)

    ##
    ## to update
    ##

    USstateAbb2 <- readUSstateAbbreviations()

