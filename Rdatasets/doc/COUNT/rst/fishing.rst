+-----------+-------------------+
| fishing   | R Documentation   |
+-----------+-------------------+

fishing
-------

Description
~~~~~~~~~~~

The fishing data is adapted from Zuur, Hilbe and Ieno (2013) to
determine whether the data appears to be generated from more than one
generating mechanism. The data are originally adapted from Bailey et al.
(2008) who were interested in how certain deep-sea fish populations were
impacted when commercial fishing began in locations with deeper water
than in previous years. Given that there are 147 sites that were
researched, the model is of (1) the total number of fish counted per
site (totabund); ( 2) on the mean water depth per site (meandepth); (3)
adjusted by the area of the site (sweptarea); (4) the log of which is
the model offset.

Usage
~~~~~

::

    data(fishing)

Format
~~~~~~

A data frame with 147 observations on the following variables.

``totabund``
    total fish counted per site

``meandepth``
    mean water depth per site

``sweptarea``
    adjusted area of site

``density``
    folage density index

``site``
    catch site

``year``
    1977-2002

``period``
    0=1977-1989; 1=2000+

Details
~~~~~~~

fishing is saved as a data frame. Count models use totabund as response
variable. Counts start at 2

Source
~~~~~~

Zuur, Hilbe, Ieno (2013), A Beginner's Guide to GLM and GLMM using R,

References
~~~~~~~~~~

Hilbe, Joseph M (2014), Modeling Count Data, Cambridge University Press
Zuur, Hilbe, Ieno (2013), A Beginner's Guide to GLM and GLMM using R,
Highlands. Bailey M. et al (2008), "Longterm changes in deep-water fish
populations in the North East Atlantic", Proc Roy Soc B 275:1965-1969.

Examples
~~~~~~~~

::



    ## Not run: 
    library(MASS)
    library(flexmix)
    data(fishing)
    attach(fishing)
    fmm_pg <- flexmix(totabund~meandepth + offset(log(sweptarea)), data=rwm1984, k=2,
             model=list(FLXMRglm(totabund~., family="NB1"), 
                        FLXMRglm(tpdocvis~., family="NB1")))
    parameters(fmm_pg, component=1, model=1)
    parameters(fmm_pg, component=2, model=1)
    summary(fmm_pg)

    ## End(Not run)

