+-------+-------------------+
| OME   | R Documentation   |
+-------+-------------------+

Tests of Auditory Perception in Children with OME
-------------------------------------------------

Description
~~~~~~~~~~~

Experiments were performed on children on their ability to differentiate
a signal in broad-band noise. The noise was played from a pair of
speakers and a signal was added to just one channel; the subject had to
turn his/her head to the channel with the added signal. The signal was
either coherent (the amplitude of the noise was increased for a period)
or incoherent (independent noise was added for the same period to form
the same increase in power).

The threshold used in the original analysis was the stimulus loudness
needs to get 75% correct responses. Some of the children had suffered
from otitis media with effusion (OME).

Usage
~~~~~

::

    OME

Format
~~~~~~

The ``OME`` data frame has 1129 rows and 7 columns:

``ID``
    Subject ID (1 to 99, with some IDs missing). A few subjects were
    measured at different ages.

``OME``
    ``"low"`` or ``"high"`` or ``"N/A"`` (at ages other than 30 and 60
    months).

``Age``
    Age of the subject (months).

``Loud``
    Loudness of stimulus, in decibels.

``Noise``
    Whether the signal in the stimulus was ``"coherent"`` or
    ``"incoherent"``.

``Correct``
    Number of correct responses from ``Trials`` trials.

``Trials``
    Number of trials performed.

Background
~~~~~~~~~~

The experiment was to study otitis media with effusion (OME), a very
common childhood condition where the middle ear space, which is normally
air-filled, becomes congested by a fluid. There is a concomitant
fluctuating, conductive hearing loss which can result in various
language, cognitive and social deficits. The term ‘binaural hearing’ is
used to describe the listening conditions in which the brain is
processing information from both ears at the same time. The brain
computes differences in the intensity and/or timing of signals arriving
at each ear which contributes to sound localisation and also to our
ability to hear in background noise.

Some years ago, it was found that children of 7–8 years with a history
of significant OME had significantly worse binaural hearing than
children without such a history, despite having equivalent sensitivity.
The question remained as to whether it was the timing, the duration, or
the degree of severity of the otitis media episodes during critical
periods, which affected later binaural hearing. In an attempt to begin
to answer this question, 95 children were monitored for the presence of
effusion every month since birth. On the basis of OME experience in
their first two years, the test population was split into one group of
high OME prevalence and one of low prevalence.

Source
~~~~~~

Sarah Hogan, Dept of Physiology, University of Oxford, via Dept of
Statistics Consulting Service

Examples
~~~~~~~~

::

    # Fit logistic curve from p = 0.5 to p = 1.0
    fp1 <- deriv(~ 0.5 + 0.5/(1 + exp(-(x-L75)/scal)),
                 c("L75", "scal"),
                 function(x,L75,scal)NULL)
    nls(Correct/Trials ~ fp1(Loud, L75, scal), data = OME,
        start = c(L75=45, scal=3))
    nls(Correct/Trials ~ fp1(Loud, L75, scal),
        data = OME[OME$Noise == "coherent",],
        start=c(L75=45, scal=3))
    nls(Correct/Trials ~ fp1(Loud, L75, scal),
        data = OME[OME$Noise == "incoherent",],
        start = c(L75=45, scal=3))

    # individual fits for each experiment

    aa <- factor(OME$Age)
    ab <- 10*OME$ID + unclass(aa)
    ac <- unclass(factor(ab))
    OME$UID <- as.vector(ac)
    OME$UIDn <- OME$UID + 0.1*(OME$Noise == "incoherent")
    rm(aa, ab, ac)
    OMEi <- OME

    library(nlme)
    fp2 <- deriv(~ 0.5 + 0.5/(1 + exp(-(x-L75)/2)),
                "L75", function(x,L75) NULL)
    dec <- getOption("OutDec")
    options(show.error.messages = FALSE, OutDec=".")
    OMEi.nls <- nlsList(Correct/Trials ~ fp2(Loud, L75) | UIDn,
       data = OMEi, start = list(L75=45), control = list(maxiter=100))
    options(show.error.messages = TRUE, OutDec=dec)
    tmp <- sapply(OMEi.nls, function(X)
                  {if(is.null(X)) NA else as.vector(coef(X))})
    OMEif <- data.frame(UID = round(as.numeric((names(tmp)))),
             Noise = rep(c("coherent", "incoherent"), 110),
             L75 = as.vector(tmp), stringsAsFactors = TRUE)
    OMEif$Age <- OME$Age[match(OMEif$UID, OME$UID)]
    OMEif$OME <- OME$OME[match(OMEif$UID, OME$UID)]
    OMEif <- OMEif[OMEif$L75 > 30,]
    summary(lm(L75 ~ Noise/Age, data = OMEif, na.action = na.omit))
    summary(lm(L75 ~ Noise/(Age + OME), data = OMEif,
               subset = (Age >= 30 & Age <= 60),
               na.action = na.omit), cor = FALSE)

    # Or fit by weighted least squares
    fpl75 <- deriv(~ sqrt(n)*(r/n - 0.5 - 0.5/(1 + exp(-(x-L75)/scal))),
                   c("L75", "scal"),
                   function(r,n,x,L75,scal) NULL)
    nls(0 ~ fpl75(Correct, Trials, Loud, L75, scal),
        data = OME[OME$Noise == "coherent",],
        start = c(L75=45, scal=3))
    nls(0 ~ fpl75(Correct, Trials, Loud, L75, scal),
        data = OME[OME$Noise == "incoherent",],
        start = c(L75=45, scal=3))

    # Test to see if the curves shift with age
    fpl75age <- deriv(~sqrt(n)*(r/n -  0.5 - 0.5/(1 +
                      exp(-(x-L75-slope*age)/scal))),
                      c("L75", "slope", "scal"),
                      function(r,n,x,age,L75,slope,scal) NULL)
    OME.nls1 <-
    nls(0 ~ fpl75age(Correct, Trials, Loud, Age, L75, slope, scal),
        data = OME[OME$Noise == "coherent",],
        start = c(L75=45, slope=0, scal=2))
    sqrt(diag(vcov(OME.nls1)))

    OME.nls2 <-
    nls(0 ~ fpl75age(Correct, Trials, Loud, Age, L75, slope, scal),
        data = OME[OME$Noise == "incoherent",],
        start = c(L75=45, slope=0, scal=2))
    sqrt(diag(vcov(OME.nls2)))

    # Now allow random effects by using NLME
    OMEf <- OME[rep(1:nrow(OME), OME$Trials),]
    OMEf$Resp <- with(OME, rep(rep(c(1,0), length(Trials)),
                              t(cbind(Correct, Trials-Correct))))
    OMEf <- OMEf[, -match(c("Correct", "Trials"), names(OMEf))]

    ## Not run: ## these fail in R on most platforms
    fp2 <- deriv(~ 0.5 + 0.5/(1 + exp(-(x-L75)/exp(lsc))),
                 c("L75", "lsc"),
                 function(x, L75, lsc) NULL)
    try(summary(nlme(Resp ~ fp2(Loud, L75, lsc),
         fixed = list(L75 ~ Age, lsc ~ 1),
         random = L75 + lsc ~ 1 | UID,
         data = OMEf[OMEf$Noise == "coherent",], method = "ML",
         start = list(fixed=c(L75=c(48.7, -0.03), lsc=0.24)), verbose = TRUE)))

    try(summary(nlme(Resp ~ fp2(Loud, L75, lsc),
         fixed = list(L75 ~ Age, lsc ~ 1),
         random = L75 + lsc ~ 1 | UID,
         data = OMEf[OMEf$Noise == "incoherent",], method = "ML",
         start = list(fixed=c(L75=c(41.5, -0.1), lsc=0)), verbose = TRUE)))

    ## End(Not run)

