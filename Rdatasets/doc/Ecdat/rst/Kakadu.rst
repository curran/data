+----------+-------------------+
| Kakadu   | R Documentation   |
+----------+-------------------+

Willingness to Pay for the Preservation of the Kakadu National Park
-------------------------------------------------------------------

Description
~~~~~~~~~~~

a cross-section

*number of observations* : 1827

*observation* : individuals

*country* : Australia

Usage
~~~~~

::

    data(Kakadu)

Format
~~~~~~

A dataframe containing :

lower
    lowerbound of willingness to pay, 0 if observation is left censored

upper
    upper bound of willingness to pay, 999 if observation is right
    censored

answer
    an ordered factor with levels nn (respondent answers no, no), ny
    (respondent answers no, yes or yes, no), yy (respondent answers yes,
    yes)

recparks
    the greatest value of national parks and nature reserves is in
    recreation activities (from 1 to 5)

jobs
    jobs are the most important thing in deciding how to use our natural
    ressources (from 1 to 5)

lowrisk
    development should be allowed to proceed where environmental damage
    from activities such as mining is possible but very unlikely (from 1
    to 5)

wildlife
    it's important to have places where wildlife is preserved (from 1 to
    5)

future
    it's important to consider future generations (from 1 to 5)

aboriginal
    in deciding how to use areas such as Kakadu national park, their
    importance to the local aboriginal people should be a major factor
    (from 1 to 5)

finben
    in deciding how to use our natural ressources such as mineral
    deposits and forests, the most important thing is the financial
    benefits for Australia (from 1 to 5)

mineparks
    if areas within natural parks are set aside for development projects
    such as mining, the value of the parks is greatly reduced (from 1 to
    5)

moreparks
    there should be more national parks created from state forests (from
    1 to 5)

gov
    the government pays little attention to the people in making
    decisions (from 1 to 4)

envcon
    the respondent recycles things such as paper or glass and regularly
    buys unbleached toilet paper or environmentally friendly products ?

vparks
    the respondent has visited a national park or bushland recreation
    area in the previous 12 months ?

tvenv
    the respondent watchs tv programs about the environment ? (from 1 to
    9)

conservation
    the respondent is member of a conservation organization ?

sex
    male,female

age
    age

schooling
    years of schooling

income
    respondent's income in thousands of dollars

major
    the respondent received the major–impact scenario of the Kakadu
    conservation zone survey ?

Source
~~~~~~

Werner, Megan (1999) “Allowing for zeros in dichotomous–choice
contingent–valuation models”, *Journal of Business and Economic
Statistics*, **17(4)**, october, 479–486.

References
~~~~~~~~~~

Journal of Business Economics and Statistics web site :
`http://www.amstat.org/publications/jbes/ <http://www.amstat.org/publications/jbes/>`__.

See Also
~~~~~~~~

``Index.Source``, ``Index.Economics``, ``Index.Econometrics``,
``Index.Observations``
