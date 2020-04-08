import React, { Component } from "react";
import JordanShaw from "../images/JordanShaw.jpg";
import anime from "animejs/lib/anime.es.js";

// let controller = new scrollmagic.Controller();
// let scene = new scrollmagic.Scene({triggerElement: "#scrollDown", duration: 200}).addTo(controller)

export default class Introduction extends Component {
  state = {
    windowHeight: window.innerHeight
  };

  render() {
    return (
      <div className="Home">
        <svg id="morph" viewBox="0 0 1980 1020" preserveAspectRatio="none">
          <path
            className="morph"
            fill="#f76c6c"
            d="M2000 1130C2132.38 323.36 2132.38 -69.46 2000 -48.44C1867.62 -27.43 1763.53 -32.06 1687.74 -62.35C1593.8 -3.63 1511.6 -12.44 1441.14 -88.77C1335.45 -203.27 1234.16 -234.09 1000 -88.77C765.84 56.55 925.9 -313.36 780.58 -322.17C635.26 -330.97 423.88 -212.07 485.53 -124C547.18 -35.93 278.56 43.34 282.96 -124C285.89 -235.56 191.57 -194.23 0 0L0 1130L2000 1130Z"
          ></path>
        </svg>
        <img src={JordanShaw} alt="profile" className="profilePic" />
        <h1 className="name">Jordan Shaw</h1>
        <h2 className="juniorDeveloper">Junior Developer</h2>
        <h3
          id="scrollDown"
          onClick={() => {
            return console.log("clicked");
          }}
        >
          ↓
        </h3>
      </div>
    );
  }

  componentDidMount() {
    let tl = anime.timeline({
      targets: ".morph",
      duration: 1600
    });

    tl.add({
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
      })
      .add({
        targets: "#scrollDown",
        delay: 500,
        opacity: 1,
        loop: true
      });
  }
}
