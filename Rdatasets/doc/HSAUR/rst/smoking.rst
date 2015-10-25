+-----------+-------------------+
| smoking   | R Documentation   |
+-----------+-------------------+

Nicotine Gum and Smoking Cessation
----------------------------------

Description
~~~~~~~~~~~

Data from a meta-analysis on nicotine gum and smoking cessation

Usage
~~~~~

::

    data("smoking")

Format
~~~~~~

A data frame with 26 observations (studies) on the following 4
variables.

``qt``
    the number of treated subjetcs who stopped smoking.

``tt``
    the totla number of treated subjects.

``qc``
    the number of subjetcs who stopped smoking without being treated.

``tc``
    the total number of subject not being treated.

Details
~~~~~~~

Cigarette smoking is the leading cause of preventable death in the
United States and kills more Americans than AIDS, alcohol, illegal drug
use, car accidents, fires, murders and suicides combined. It has been
estimated that 430,000 Americans die from smoking every year. Fighting
tobacco use is, consequently, one of the major public health goals of
our time and there are now many programs available designed to help
smokers quit. One of the major aids used in these programs is nicotine
chewing gum, which acts as a substitute oral activity and provides a
source of nicotine that reduces the withdrawal symptoms experienced when
smoking is stopped. But separate randomized clinical trials of nicotine
gum have been largely inconclusive, leading Silagy (2003) to consider
combining the results studies found from an extensive literature search.
The results of these trials in terms of numbers of people in the
treatment arm and the control arm who stopped smoking for at least 6
months after treatment are given here.

Source
~~~~~~

C. Silagy (2003), Nicotine replacement therapy for smoking cessation
(Cochrane Review). *The Cochrane Library*, **4**, John Wiley \\& Sons,
Chichester.

Examples
~~~~~~~~

::


      data("smoking", package = "HSAUR")
      boxplot(smoking$qt/smoking$tt,
              smoking$qc/smoking$tc,
              names = c("Treated", "Control"), ylab = "Percent Quitters")

