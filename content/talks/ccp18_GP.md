---
title: "Quantifying the Oscillatory Evolution of Simulated Boundary-Layer Cloud Fields Using Gaussian Processes"
author: "Gun Ho Oh and Phil Austin"
date: "July 2018"
type: "talk"
link: "https://ams.confex.com/ams/15CLOUD15ATRAD/webprogram/Paper347741.html"
---

Oscillatory motions of boundary-layer clouds can be seen at multiple scales. Many cumulus clouds can be described as a series of pulsating plumes, and this periodic nature has long been thought to be a crucial factor in understanding the life cycle of moist convection (Malkus, QJR, 1952; Zhao and Austin, JAS, 2005a, 2005b; Heus et al., JGR, 2009). The cloud size distribution, a macro-scale property of cloud fields, has also been observed to oscillate over time; clouds grow larger and deeper as smaller plumes aggregate, which is followed by a breakup of larger clouds and an abundance of smaller clouds (Feingold et al., JGR, 2017).

We present a data analysis method to identify oscillating motions in moist convection by means of Gaussian Processes, motivated by a recent study by Phillips et al. (PCB, 2017). We use the results from a series of model runs using the System for Atmospheric Modelling (SAM; Khairoutdinov and Randall, JAS, 2003). Our analysis includes boundary-layer simulations of three CGILS (Blossey et al., JAM, 2013) cases on an approximately 10 km x 10 km x 5 km domain over 6 hours, BOMEX (Holland and Rasmusson, MWR, 1973) on a 13 km x 13 km x 3 km domain over 12 hours, and ARM (Brown et al., QJR, 2002) on a 7.5 km x 7.5 km x 4.5 km domain over 9 hours, all at 25 m resolution.

We use Gaussian process regression to identify oscillations in these cloud size distributions, as represented a negative power-law distribution fit to the simulated cloud area probability density function. The modelled cloud size distributions are consistent with the cloud fraction decompositions from observed cloud fields. The time series of cloud size distributions in BOMEX is shown to have a prominent periodicity of 76 minutes, which is in good agreement with Feingold et al. (JGR, 2017). The new method allows us to also model the time series as a multi-period oscillation.

We also apply Gaussian process regression to multiple pulsating thermals for these runs. Our regression shows that cloud top heights also oscillate, with periods ranging between 14 and 17 minutes, which correspond well to the expected eddy turnover time, as well as to the behaviour of documented pulsations in individual shallow cumulus clouds (Heus et al., JGR, 2009).

These results suggest that the use of Gaussian processes to identify oscillations is a useful tool for distinguishing underlying oscillatory motions in the presence of noise with a quantitative uncertainty estimate.