+------------+-------------------+
| Highway1   | R Documentation   |
+------------+-------------------+

Highway Accidents
-----------------

Description
~~~~~~~~~~~

The data comes from a unpublished master's paper by Carl Hoffstedt. They
relate the automobile accident rate, in accidents per million vehicle
miles to several potential terms. The data include 39 sections of large
highways in the state of Minnesota in 1973. The goal of this analysis
was to understand the impact of design variables, ``Acpts``, ``Slim``,
``Sig``, and ``Shld`` that are under the control of the highway
department, on accidents.

Usage
~~~~~

::

    Highway1

Format
~~~~~~

This data frame contains the following columns:

rate
    1973 accident rate per million vehicle miles

len
    length of the ``Highway1`` segment in miles

ADT
    average daily traffic count in thousands

trks
    truck volume as a percent of the total volume

sigs1
    (number of signalized interchanges per mile times len + 1)/len, the
    number of signals per mile of roadway, adjusted to have no zero
    values.

slim
    speed limit in 1973

shld
    width in feet of outer shoulder on the roadway

lane
    total number of lanes of traffic

acpt
    number of access points per mile

itg
    number of freeway-type interchanges per mile

lwid
    lane width, in feet

hwy
    An indicator of the type of roadway or the source of funding for the
    road, either MC, FAI, PA, or MA

Source
~~~~~~

Carl Hoffstedt. This differs from the dataset ``highway`` in the
``alr3`` package only by transformation of some of the columns.

References
~~~~~~~~~~

Fox, J. and Weisberg, S. (2011) *An R Companion to Applied Regression*,
Second Edition, Sage.

Weisberg, S. (2014) *Applied Linear Regression*, Fourth Edition, Wiley,
Section 7.2.
