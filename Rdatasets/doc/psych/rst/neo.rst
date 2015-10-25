+-------+-------------------+
| neo   | R Documentation   |
+-------+-------------------+

NEO correlation matrix from the NEO\_PI\_R manual
-------------------------------------------------

Description
~~~~~~~~~~~

The NEO.PI.R is a widely used personality test to assess 5 broad factors
(Neuroticism, Extraversion, Openness, Agreeableness and
Conscientiousness) with six facet scales for each factor. The
correlation matrix of the facets is reported in the NEO.PI.R manual for
1000 subjects.

Usage
~~~~~

::

    data(neo)

Format
~~~~~~

A data frame of a 30 x 30 correlation matrix with the following 30
variables.

N1
    Anxiety

N2
    AngryHostility

 N3
    Depression

 N4
    Self-Consciousness

 N5
    Impulsiveness

 N6
    Vulnerability

 E1
    Warmth

 E2
    Gregariousness

 E3
    Assertiveness

 E4
    Activity

 E5
    Excitement-Seeking

 E6
    PositiveEmotions

 O1
    Fantasy

 O2
    Aesthetics

 O3
    Feelings

 O4
    Ideas

 O5
    Actions

 O6
    Values

 A1
    Trust

 A2
    Straightforwardness

 A3
    Altruism

 A4
    Compliance

 A5
    Modesty

 A6
    Tender-Mindedness

 C1
    Competence

 C2
    Order

 C3
    Dutifulness

 C4
    AchievementStriving

 C5
    Self-Discipline

 C6
    Deliberation

Details
~~~~~~~

The past thirty years of personality research has led to a general
consensus on the identification of major dimensions of personality.
Variously known as the “Big 5" or the “Five Factor Model", the general
solution represents 5 broad domains of personal and interpersonal
experience. Neuroticism and Extraversion are thought to reflect
sensitivity to negative and positive cues from the environment and the
tendency to withdraw or approach. Openness is sometimes labeled as
Intellect and reflects an interest in new ideas and experiences.
Agreeableness and Conscientiousness reflect tendencies to get along with
others and to want to get ahead.

The factor structure of the NEO suggests five correlated factors as well
as two higher level factors. The NEO was constructed with 6 “facets" for
each of the five broad factors.

Source
~~~~~~

Costa, Paul T. and McCrae, Robert R. (1992) (NEO PI-R) professional
manual. Psychological Assessment Resources, Inc. Odessa, FL. (with
permission of the author and the publisher)

References
~~~~~~~~~~

Digman, John M. (1990) Personality structure: Emergence of the
five-factor model. Annual Review of Psychology. 41, 417-440.

John M. Digman (1997) Higher-order factors of the Big Five. Journal of
Personality and Social Psychology, 73, 1246-1256.

McCrae, Robert R. and Costa, Paul T., Jr. (1999) A Five-Factor theory of
personality. In Pervin, Lawrence A. and John, Oliver P. (eds) Handbook
of personality: Theory and research (2nd ed.) 139-153. Guilford Press,
New York. N.Y.

Revelle, William (1995), Personality processes, Annual Review of
Psychology, 46, 295-328.

Joshua Wilt and William Revelle (2009) Extraversion and Emotional
Reactivity. In Mark Leary and Rick H. Hoyle (eds). Handbook of
Individual Differences in Social Behavior. Guilford Press, New York,
N.Y.

Examples
~~~~~~~~

::

    data(neo)
    n5 <- fa(neo,5)
    neo.keys <- make.keys(30,list(N=c(1:6),E=c(7:12),O=c(13:18),A=c(19:24),C=c(25:30)))
    n5p <- target.rot(n5,neo.keys) #show a targeted rotation for simple structure
    n5p

