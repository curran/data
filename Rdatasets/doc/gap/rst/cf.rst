+------+-------------------+
| cf   | R Documentation   |
+------+-------------------+

Cystic fibrosis data
--------------------

Description
~~~~~~~~~~~

This data set contains a case-control indicator and 23 SNPs.

The inter-marker distances (Morgan) are as follows

0.000090, 0.000158, 0.005000, 0.000100, 0.000200, 0.000150, 0.000250,
0.000200, 0.000050, 0.000350, 0.000300, 0.000250, 0.000350, 0.000350,
0.000800, 0.000100, 0.000200, 0.000150, 0.000550, 0.006000, 0.000700,
0.001000

Usage
~~~~~

::

    data(cf)

Format
~~~~~~

A data frame containing 186 rows and 24 columns

Note
~~~~

This can be used as an example of converting PL-EM to matrix format,

::

    cfdata <- vector("numeric")
    cfname <- vector("character")
    for (i in 2:dim(cf)[2])
    {
        tmp <- plem2m(cf[,i])
        a1 <- tmp[[1]]
        a2 <- tmp[[2]]
        cfdata <- cbind(cfdata,a1,a2)
        a1name <- paste("loc",i-1,".a1",sep="")
        a2name <- paste("loc",i-1,".a2",sep="")
        cfname <- cbind(cfname,a1name,a2name)
    }
    cfdata <- as.data.frame(cfdata)
    names(cfdata) <- cfname

Source
~~~~~~

Liu JS, Sabatti C, Teng J, Keats BJB, Risch N (2001). Bayesian Analysis
of Haplotypes for Linkage Disequilibrium Mapping. Genome Research
11:1716-1724
