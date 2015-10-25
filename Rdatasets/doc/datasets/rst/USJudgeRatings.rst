+------------------+-------------------+
| USJudgeRatings   | R Documentation   |
+------------------+-------------------+

Lawyers' Ratings of State Judges in the US Superior Court
---------------------------------------------------------

Description
~~~~~~~~~~~

Lawyers' ratings of state judges in the US Superior Court.

Usage
~~~~~

::

    USJudgeRatings

Format
~~~~~~

A data frame containing 43 observations on 12 numeric variables.

+---------+--------+--------------------------------------------+
| [,1]    | CONT   | Number of contacts of lawyer with judge.   |
+---------+--------+--------------------------------------------+
| [,2]    | INTG   | Judicial integrity.                        |
+---------+--------+--------------------------------------------+
| [,3]    | DMNR   | Demeanor.                                  |
+---------+--------+--------------------------------------------+
| [,4]    | DILG   | Diligence.                                 |
+---------+--------+--------------------------------------------+
| [,5]    | CFMG   | Case flow managing.                        |
+---------+--------+--------------------------------------------+
| [,6]    | DECI   | Prompt decisions.                          |
+---------+--------+--------------------------------------------+
| [,7]    | PREP   | Preparation for trial.                     |
+---------+--------+--------------------------------------------+
| [,8]    | FAMI   | Familiarity with law.                      |
+---------+--------+--------------------------------------------+
| [,9]    | ORAL   | Sound oral rulings.                        |
+---------+--------+--------------------------------------------+
| [,10]   | WRIT   | Sound written rulings.                     |
+---------+--------+--------------------------------------------+
| [,11]   | PHYS   | Physical ability.                          |
+---------+--------+--------------------------------------------+
| [,12]   | RTEN   | Worthy of retention.                       |
+---------+--------+--------------------------------------------+

Source
~~~~~~

New Haven Register, 14 January, 1977 (from John Hartigan).

Examples
~~~~~~~~

::

    require(graphics)
    pairs(USJudgeRatings, main = "USJudgeRatings data")

