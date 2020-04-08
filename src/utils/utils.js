import anime from "animejs/lib/anime.es.js";
import scrollmagic from 'scrollmagic'

export let svgAnimation = anime
  .timeline({
    targets: ".morph",
    duration: 1600
  })
  .add({
    d: [
      {
        value:
          "M2000 1130C2132.38 848.33 2132.38 718 2000 739.01C1867.62 760.03 1789.72 653.05 1766.31 418.1C1761 303.62 1723.12 208.22 1652.66 131.89C1546.97 17.39 1494.04 355.23 1259.88 500.55C1025.71 645.87 956.12 93.29 810.8 84.48C665.47 75.67 526.62 330.02 588.27 418.1C649.92 506.17 254.38 585.44 258.78 418.1C261.72 306.53 175.46 355.5 0 565L0 1130L2000 1130Z"
      },
      {
        value:
          "M2000 1130C2132.38 1142.45 2132.38 1159.18 2000 1180.2C1867.62 1201.21 1763.53 1238.88 1687.74 1293.2C1593.8 1381 1511.6 1386.73 1441.14 1310.4C1335.45 1195.9 1342.95 1255.73 1108.79 1401.05C874.62 1546.37 913.81 1205.31 768.49 1196.51C623.17 1187.7 423.88 1490.4 485.53 1578.47C547.18 1666.55 278.56 1745.81 282.96 1578.47C285.89 1466.91 191.57 1350.07 0 1227.94L0 1130L2000 1130Z"
      }
    ],
    easing: "linear",
    loop: false,
    duration: 3000
  })
  .add({
    targets: ".name",
    opacity: 1,
    easing: "easeInOutExpo"
  })
  .add({
    targets: ".juniorDeveloper",
    opacity: 1,
    easing: "easeInOutExpo"
  });

export let flashingArrowAnimation = anime
  .timeline({
    delay: anime.stagger(250, { start: 5000 }),
    targets: ".scrollDown",
    duration: 1000,
    loop: true
  })
  .add({
    // delay: 250,
    opacity: 1
    // easing: "none",
  })
  .add({
    // delay: 250,
    opacity: 0
  });


