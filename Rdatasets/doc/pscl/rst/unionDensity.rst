+----------------+-------------------+
| unionDensity   | R Documentation   |
+----------------+-------------------+

cross national rates of trade union density
-------------------------------------------

Description
~~~~~~~~~~~

Cross-national data on relative size of the trade unions and predictors,
in 20 countries. Two of the predictors are highly collinear, and are the
source of a debate between Stephens and Wallerstein (1991), later
reviewed by Western and Jackman (1994).

Usage
~~~~~

::

    data(unionDensity)

Format
~~~~~~

-  ``union``\ numeric, percentage of the total number of wage and salary
   earners plus the unemployed who are union members, measured between
   1975 and 1980, with most of the data drawn from 1979

-  ``left``\ numeric, an index tapping the extent to which parties of
   the left have controlled governments since 1919, due to Wilensky
   (1981).

-  ``size``\ numeric, log of labor force size, defined as the number of
   wage and salary earners, plus the unemployed

-  ``concen``\ numeric, percentage of employment, shipments, or
   production accounted for by the four largest enterprises in a
   particular industry, averaged over industries (with weights
   proportional to the size of the industry) and the resulting measure
   is normalized such that the United States scores a 1.0, and is due to
   Pryor (1973). Some of the scores on this variable are imputed using
   procedures described in Stephens and Wallerstein (1991, 945).

Source
~~~~~~

Pryor, Frederic. 1973. *Property and Industrial Organization in
Communist and Capitalist Countries*. Bloomington: Indiana University
Press.

Stephens, John and Michael Wallerstein. 1991. Industrial Concentration,
Country Size and Trade Union Membership. *American Political Science
Review* 85:941-953.

Western, Bruce and Simon Jackman. 1994. Bayesian Inference for
Comparative Research. *American Political Science Review* 88:412-423.

Wilensky, Harold L. 1981. Leftism, Catholicism, Democratic Corporatism:
The Role of Political Parties in Recemt Welfare State Development. In
*The Development of Welfare States in Europe and America*, ed. Peter
Flora and Arnold J. Heidenheimer. New Brunswick: Transaction Books.

References
~~~~~~~~~~

Jackman, Simon. 2009. *Bayesian Analysis for the Social Sciences*.
Wiley: Hoboken, New Jersey.

Examples
~~~~~~~~

::

    data(unionDensity)
    summary(unionDensity)
    pairs(unionDensity,
          labels=c("Union\nDensity",
            "Left\nGovernment",
            "log Size of\nLabor Force",
            "Economic\nConcentration"),
          lower.panel=function(x,y,digits=2){
            r <- cor(x,y)
            par(usr=c(0,1,0,1))
            text(.5,.5,
                 format(c(r,0.123456789),digits=digits)[1],
                 cex=1.5)
          }
          )
    ols <- lm(union ~ left + size + concen,
              data=unionDensity)
    summary(ols)

