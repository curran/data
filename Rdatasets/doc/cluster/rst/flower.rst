+----------+-------------------+
| flower   | R Documentation   |
+----------+-------------------+

Flower Characteristics
----------------------

Description
~~~~~~~~~~~

8 characteristics for 18 popular flowers.

Usage
~~~~~

::

    data(flower)

Format
~~~~~~

A data frame with 18 observations on 8 variables:

+-------------+-----------+--------------+
| [ , "V1"]   | factor    | winters      |
+-------------+-----------+--------------+
| [ , "V2"]   | factor    | shadow       |
+-------------+-----------+--------------+
| [ , "V3"]   | factor    | tubers       |
+-------------+-----------+--------------+
| [ , "V4"]   | factor    | color        |
+-------------+-----------+--------------+
| [ , "V5"]   | ordered   | soil         |
+-------------+-----------+--------------+
| [ , "V6"]   | ordered   | preference   |
+-------------+-----------+--------------+
| [ , "V7"]   | numeric   | height       |
+-------------+-----------+--------------+
| [ , "V8"]   | numeric   | distance     |
+-------------+-----------+--------------+

V1
    winters, is binary and indicates whether the plant may be left in
    the garden when it freezes.

V2
    shadow, is binary and shows whether the plant needs to stand in the
    shadow.

V3
    tubers, is asymmetric binary and distinguishes between plants with
    tubers and plants that grow in any other way.

V4
    color, is nominal and specifies the flower's color (1 = white, 2 =
    yellow, 3 = pink, 4 = red, 5 = blue).

V5
    soil, is ordinal and indicates whether the plant grows in dry (1),
    normal (2), or wet (3) soil.

V6
    preference, is ordinal and gives someone's preference ranking going
    from 1 to 18.

V7
    height, is interval scaled, the plant's height in centimeters.

V8
    distance, is interval scaled, the distance in centimeters that
    should be left between the plants.

References
~~~~~~~~~~

Struyf, Hubert and Rousseeuw (1996), see ``agnes``.

Examples
~~~~~~~~

::

    data(flower)
    ## Example 2 in ref
    daisy(flower, type = list(asymm = 3))
    daisy(flower, type = list(asymm = c(1, 3), ordratio = 7))

