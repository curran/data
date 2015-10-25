+----------+-------------------+
| mtcars   | R Documentation   |
+----------+-------------------+

Motor Trend Car Road Tests
--------------------------

Description
~~~~~~~~~~~

The data was extracted from the 1974 *Motor Trend* US magazine, and
comprises fuel consumption and 10 aspects of automobile design and
performance for 32 automobiles (1973–74 models).

Usage
~~~~~

::

    mtcars

Format
~~~~~~

A data frame with 32 observations on 11 variables.

+---------+--------+--------------------------------------------+
| [, 1]   | mpg    | Miles/(US) gallon                          |
+---------+--------+--------------------------------------------+
| [, 2]   | cyl    | Number of cylinders                        |
+---------+--------+--------------------------------------------+
| [, 3]   | disp   | Displacement (cu.in.)                      |
+---------+--------+--------------------------------------------+
| [, 4]   | hp     | Gross horsepower                           |
+---------+--------+--------------------------------------------+
| [, 5]   | drat   | Rear axle ratio                            |
+---------+--------+--------------------------------------------+
| [, 6]   | wt     | Weight (lb/1000)                           |
+---------+--------+--------------------------------------------+
| [, 7]   | qsec   | 1/4 mile time                              |
+---------+--------+--------------------------------------------+
| [, 8]   | vs     | V/S                                        |
+---------+--------+--------------------------------------------+
| [, 9]   | am     | Transmission (0 = automatic, 1 = manual)   |
+---------+--------+--------------------------------------------+
| [,10]   | gear   | Number of forward gears                    |
+---------+--------+--------------------------------------------+
| [,11]   | carb   | Number of carburetors                      |
+---------+--------+--------------------------------------------+

Source
~~~~~~

Henderson and Velleman (1981), Building multiple regression models
interactively. *Biometrics*, **37**, 391–411.

Examples
~~~~~~~~

::

    require(graphics)
    pairs(mtcars, main = "mtcars data")
    coplot(mpg ~ disp | as.factor(cyl), data = mtcars,
           panel = panel.smooth, rows = 1)

