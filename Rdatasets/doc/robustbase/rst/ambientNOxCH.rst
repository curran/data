+----------------+-------------------+
| ambientNOxCH   | R Documentation   |
+----------------+-------------------+

Daily Means of NOx (mono-nitrogen oxides) in air
------------------------------------------------

Description
~~~~~~~~~~~

This dataset contains daily means (from midnight to midnight) of NOx,
i.e., mono-nitrogen oxides, in [ppb] at 13 sites in central Switzerland
and Aarau for the year 2004.

Usage
~~~~~

::

    data(ambientNOxCH)

Format
~~~~~~

A data frame with 366 observations on the following 14 variables.

``date``
    date of day, of class ``"Date"``.

``ad``
    Site is located north of Altdorf 100 meters east of motorway A2, on
    an open field at the beginning of a more than 2000m deep valley
    (690.175, 193.55; 438; inLuft)

``ba``
    Site is located in the centre of the little town of Baden in a
    residential area. Baden has 34'000 inhabitants and is situated on
    the swiss plateau (666.075, 257.972; 377; inLuft).

``ef``
    Site is located 6 km south of altdorf and 800 m north of the village
    of Erstfeld. The motorway A2 passes 5 m west of the measuring site.
    Over 8 million vehicles have passed Erstfeld in 2004 where 13% of
    the counts were attributed to trucks (691.43, 187.69; 457; MFM-U).

``la``
    Site is located on a wooded hill in a rural area called Laegern,
    about 190 m above Baden, which is about 5 km away (669.8, 259; 690;
    NABEL).

``lu``
    Site is located in the center of town of Lucerne, which has 57'000
    inhabitants (666.19, 211.975; 460; inLuft).

``re``
    Site is located 1 km west of Reiden on the Swiss plateau. The
    motorway A2 passes 5 m west of the measuring site (639.56, 232.11;
    462; MFM-U).

``ri``
    Site is located at Rigi Seebodenalp, 649 m above the lake of Lucerne
    on an alp with half a dozen small houses (677.9, 213.5; 1030;
    NABEL).

``se``
    Site is located in Sedel next to town of Lucerne 35m above and 250m
    south of motorway A14 from Zug to Lucerne on a low hill with free
    360° panorama (665.5, 213.41; 484; inLuft).

``si``
    Site is located at the border of a small industrial area in Sisseln,
    300 m east of a main road (640.725, 266.25; 305; inLuft).

``st``
    Site is located at the south east border of Stans with 7'000
    inhabitants (670.85, 201.025; 438; inLuft).

``su``
    Site is located in the center of Suhr (8700 inhabitants), 10 m from
    the main road (648.49, 246.985; 403; inLuft).

``sz``
    Site is located in Schwyz (14'200 inhabitants) near a shopping
    center (691.92, 208.03; 470; inLuft).

``zg``
    Site is located in the centre of Zug with 22'000 inhabitants, 24 m
    from the main road (681.625, 224.625; 420; inLuft).

Details
~~~~~~~

| The 13 sites are part of one of the three air quality monitoring
networks: inLuft (regional authorities of central Switzerland and canton
Aargau)
|  NABEL (Swiss federal network)
|  MFM-U (Monitoring flankierende Massnahmen Umwelt), special Swiss
federal network along transit motorways A2 and A13 from Germany to Italy
through Switzerland
|  The information within the brackets means: Swiss coordinates km east,
km north; m above sea level; network

When the measuring sites are exposed to the same atmospheric condition
and when there is no singular emission event at any site,
``log(mean(NOx) of a specific day at each site)`` is a linear function
of ``log(yearly.mean(NOx) at the corresponding site)``. The offset and
the slope of the straight line reflects the atmospheric conditions at
this specific day. During winter time, often an inversion prevents the
emissions from being diluted vertically, so that there evolve two
separate atmospheric compartements: One below the inversion boundary
with polluted air and one above with relatively clean air. In our
example below, Rigi Seebodenalp is above the inversion boundary between
December 10th and 12th.

Source
~~~~~~

| http://www.in-luft.ch/
|  http://www.empa.ch/plugin/template/empa/\*/6794
|  http://www.bafu.admin.ch/umweltbeobachtung/02272/02280

See Also
~~~~~~~~

another NOx dataset, ``NOxEmissions``.

Examples
~~~~~~~~

::

    data(ambientNOxCH)
    str (ambientNOxCH)

    yearly <- log(colMeans(ambientNOxCH[,-1], na.rm=TRUE))
    xlim <- range(yearly)
    lNOx <- log(ambientNOxCH[, -1])
    days <-     ambientNOxCH[, "date"]

    ## Subset of 9 days starting at April 4:
    idays <- seq(which(ambientNOxCH$date=="2004-12-04"), length=9)
    ylim <- range(lNOx[idays,],na.rm=TRUE)
    op <- par(mfrow=c(3,3),mar=rep(1,4), oma = c(0,0,2,0))

    for (id in idays) {
      daily <- unlist(lNOx[id,])
      plot(NA, xlim=xlim,ylim=ylim, ann=FALSE, type = "n")
      abline(0:1, col="light gray")
      abline(lmrob(daily~yearly, na.action=na.exclude),
             col="red", lwd=2)
      text(yearly, daily, names(yearly), col="blue")
      mtext(days[id], side=1, line=-1.2, cex=.75, adj=.98)
    }
    mtext("Daily ~ Yearly  log( NOx mean values ) at 13 Swiss locations",
          outer=TRUE)
    par(op)

    ## do all 366 regressions:  Least Squares and Robust:
    LS <- lapply(1:nrow(ambientNOxCH), function(id)
                 lm(unlist(lNOx[id,]) ~ yearly,
                    na.action = na.exclude))
    R <- lapply(1:nrow(ambientNOxCH),
                function(id) lmrob(unlist(lNOx[id,]) ~ yearly,
                                   na.action = na.exclude))
    ## currently 4 warnings about non-convergence;
    ## which ones?
    days[notOk <- ! sapply(R, `[[`, "converged") ]
    ## "2004-01-10" "2004-05-12" "2004-05-16" "2004-11-16"

    ## first problematic case:
    daily <- unlist(lNOx[which(notOk)[1],])
    plot(daily ~ yearly,
         main = paste("lmrob() non-convergent:",days[notOk[1]]))
    rr <- lmrob(daily ~ yearly, na.action = na.exclude,
                control = lmrob.control(trace=3, max.it = 100))
    ##-> 53 iter.

    ## Look at all coefficients:
    R.cf <- t(sapply(R, coef))
    C.cf <- t(sapply(LS, coef))
    plot(C.cf, xlim=range(C.cf[,1],R.cf[,1]),
               ylim=range(C.cf[,2],R.cf[,2]))
    mD1 <- rowMeans(abs(C.cf - R.cf))
    lrg <- mD1 > quantile(mD1, 0.80)
    arrows(C.cf[lrg,1], C.cf[lrg,2],
           R.cf[lrg,1], R.cf[lrg,2], length=.1, col="light gray")
    points(R.cf, col=2)

    ## All robustness weights
    aW <- t(sapply(R, weights, type="robustness"))
    colnames(aW) <- names(yearly)
    summary(aW)
    sort(colSums(aW < 0.05, na.rm = TRUE)) # how often "clear outlier":
    # lu st zg ba se sz su si re la ef ad ri
    #  0  0  0  1  1  1  2  3  4 10 14 17 48

    lattice::levelplot(aW, asp=1/2, main="Robustness weights",
                       xlab= "day", ylab= "site")

