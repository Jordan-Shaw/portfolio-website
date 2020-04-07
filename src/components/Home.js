import React, { Component } from "react";
import JordanShaw from "../images/JordanShaw.jpg";
// import { Link } from "@reach/router";
import anime from "animejs/lib/anime.es.js";

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
            fill="#a8d0e6"
            d="M1980 1080L1980 1080C1965.37 1258.05 1869.02 1295.47 1690.97 1192.25C1512.91 1089.03 1435.5 1100.64 1458.72 1227.09C1262.6 1469.66 1027.78 1503.2 754.24 1327.73C480.71 1152.25 229.3 1069.68 0 1080L0 1080L1980 1080Z"
          ></path>
        </svg>
        <div className="basicInfo">
          <p>Manchester, UK</p>
          <p>jordan.shaw2400@gmail.com</p>
        </div>
        <h1 className="name">Jordan Shaw</h1>
        <h1 className="portfolio">Portfolio</h1>
        {/* <img src={JordanShaw} alt="profile" className="profilePic" /> */}
        {/* <h2>Junior Developer</h2> */}

        {/* <nav className="linksList">
          <Link to="projects" className="projectsLink">Projects</Link>
          <Link to="about" className="aboutLink">About</Link>
          <Link to="contact" className="contactLink">Contact</Link>
        </nav> */}
        <h2 className="downArrow">↓</h2>
      </div>
    );
  }

  componentDidMount() {
    anime({
      targets: ".morph",
      d: [
        // {
        //   value:
        //     "M1980 1080L1980 1080C1965.37 1258.05 1869.02 1295.47 1690.97 1192.25C1512.91 1089.03 1435.5 1100.64 1458.72 1227.09C1262.6 1469.66 1027.78 1503.2 754.24 1327.73C480.71 1152.25 229.3 1069.68 0 1080L0 1080L1980 1080Z"
        // },
        {
          value:
            "M1980 1080L1980 646.73C1936.98 718.99 1826.44 703.5 1648.39 600.28C1470.33 497.06 1342.6 528.03 1265.18 693.18C1247.12 878.98 1101.32 884.14 827.79 708.66C554.26 533.19 278.33 528.03 0 693.18L0 1080L1980 1080Z"
        },
        {
          value:
            "M1980 1080L1980 0C2166.59 -292.76 2170.86 -490.75 1992.81 -593.97C1814.75 -697.19 1586.15 -720.93 1307 -665.19C946.21 -544.97 629.05 -572.6 355.52 -748.07C81.98 -923.54 -36.52 -674.19 0 0L0 1080L1980 1080Z"
        }
      ],
      easing: "linear",
      duration: 2000,
      loop: false
    });
  }
}
