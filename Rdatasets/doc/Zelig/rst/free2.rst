+---------+-------------------+
| free2   | R Documentation   |
+---------+-------------------+

Freedom of Speech Data
----------------------

Description
~~~~~~~~~~~

Selection of individual-level survey data for freedom of speech.

Usage
~~~~~

::

    data(free2)

Details
~~~~~~~

A table with 150 observations and 12 variables.

-  sex1 for men and 0 for women

-  ageAge of respondent in years

-  educLevels of education, coded as a numeric variable with

   -  1No formal education

   -  2Less than primary school education

   -  3Completed primary school

   -  4Completed secondary school

   -  5Completed high school

   -  6Completed college

   -  7Completed post-graduate degree

-  countryCharacter strings consisting of "Oceana", "Eurasia", and
   "Eastasia", after Orwell's *1984*.

-  ySelf assessment (see below).

-  v1-v6Response to vignettes (see below).

Survey respondents were asked in almost the same language for a
self-assessment and for an assessment of several hypothetical persons
described by written vignettes. The self assessment (``self``, in the
data set), "How free do you think [name/you] [is/are] to express
[him-her/your]self without fear of government reprisal?" was first asked
of the survey respondent with respect to him or herself, and then after
each of vignette. The possible response categories are:

-  1Completely free

-  2Very free

-  3Moderately free

-  4Slightly free

-  5Not free at all

The vignettes, ordered from most free to least free, are:

-  vign1[Kay] does not like many of the government's policies. She
   frequently publishes her opinion in newspapers, criticizing decisions
   by officials and calling for change. She sees little reason these
   actions could lead to government reprisal.

-  vign2[Michael] disagrees with many of the government's policies.
   Though he knows criticism is frowned upon, he doesn't believe the
   government would punish someone for expressing critical views. He
   makes his opinion known on most issues without regard to who is
   listening.

-  vign3[Bob] has political views at odds with the government. He has
   heard of people occasionally being arrested for speaking out against
   the government, and government leaders sometimes make political
   speeches condemning those who criticize. He sometimes writes letters
   to newspapers about politics, but he is careful not to use his real
   name.

-  vign4[Connie] does not like the government's stance on many issues.
   She has a friend who was arrested for being too openly critical of
   governmental leaders, and so she avoids voicing her opinions in
   public places.

-  vign5[Vito] disagrees with many of the government's policies, and is
   very careful about whom he says this to, reserving his real opinions
   for family and close friends only. He knows several men who have been
   taken away by government officials for saying negative things in
   public.

-  vign6[Sonny] lives in fear of being harassed for his political views.
   Everyone he knows who has spoken out against the government has been
   arrested or taken away. He never says a word about anything the
   government does, not even when he is at home alone with his family.

References
~~~~~~~~~~

*WHO's World Health Survey* by Lydia Bendib, Somnath Chatterji, Alena
Petrakova, Ritu Sadana, Joshua A. Salomon, Margie Schneider, Bedirhan
Ustun, Maria Villanueva

Jonathan Wand, Gary King and Olivia Lau. (2007) “Anchors: Software for
Anchoring Vignettes”. *Journal of Statistical Software*. Forthcoming.
copy at http://wand.stanford.edu/research/anchors-jss.pdf

Gary King and Jonathan Wand. "Comparing Incomparable Survey Responses:
New Tools for Anchoring Vignettes," Political Analysis, 15, 1 (Winter,
2007): Pp. 46-66, copy at
http://gking.harvard.edu/files/abs/c-abs.shtml.
