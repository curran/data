+--------------+-------------------+
| heptathlon   | R Documentation   |
+--------------+-------------------+

Olympic Heptathlon Seoul 1988
-----------------------------

Description
~~~~~~~~~~~

Results of the olympic heptathlon competition, Seoul, 1988.

Usage
~~~~~

::

    data("heptathlon")

Format
~~~~~~

A data frame with 25 observations on the following 8 variables.

``hurdles``
    results 100m hurdles.

``highjump``
    results high jump.

``shot``
    results shot.

``run200m``
    results 200m race.

``longjump``
    results long jump.

``javelin``
    results javelin.

``run800m``
    results 800m race.

``score``
    total score.

Details
~~~~~~~

The first combined Olympic event for women was the pentathlon, first
held in Germany in 1928. Initially this consisted of the shot putt, long
jump, 100m, high jump and javelin events held over two days. The
pentathlon was first introduced into the Olympic Games in 1964, when it
consisted of the 80m hurdles, shot, high jump, long jump and 200m. In
1977 the 200m was replaced by the 800m and from 1981 the IAAF brought in
the seven-event heptathlon in place of the pentathlon, with day one
containing the events-100m hurdles, shot, high jump, 200m and day two,
the long jump, javelin and 800m. A scoring system is used to assign
points to the results from each event and the winner is the woman who
accumulates the most points over the two days. The event made its first
Olympic appearance in 1984.

In the 1988 Olympics held in Seoul, the heptathlon was won by one of the
stars of women's athletics in the USA, Jackie Joyner-Kersee. The results
for all 25 competitors are given here.

Source
~~~~~~

D. J. Hand, F. Daly, A. D. Lunn, K. J. McConway and E. Ostrowski (1994).
*A Handbook of Small Datasets*, Chapman and Hall/CRC, London.

Examples
~~~~~~~~

::


      data("heptathlon", package = "HSAUR")
      plot(heptathlon)

