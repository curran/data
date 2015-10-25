+--------+-------------------+
| cpus   | R Documentation   |
+--------+-------------------+

Performance of Computer CPUs
----------------------------

Description
~~~~~~~~~~~

A relative performance measure and characteristics of 209 CPUs.

Usage
~~~~~

::

    cpus

Format
~~~~~~

The components are:

``name``
    manufacturer and model.

``syct``
    cycle time in nanoseconds.

``mmin``
    minimum main memory in kilobytes.

``mmax``
    maximum main memory in kilobytes.

``cach``
    cache size in kilobytes.

``chmin``
    minimum number of channels.

``chmax``
    maximum number of channels.

``perf``
    published performance on a benchmark mix relative to an IBM
    370/158-3.

``estperf``
    estimated performance (by Ein-Dor & Feldmesser).

Source
~~~~~~

P. Ein-Dor and J. Feldmesser (1987) Attributes of the performance of
central processing units: a relative performance prediction model.
*Comm. ACM.* **30**, 308–317.

References
~~~~~~~~~~

Venables, W. N. and Ripley, B. D. (2002) *Modern Applied Statistics with
S.* Fourth edition. Springer.
