import React from 'react'
import frontend from "../../images/frontend.jpg";
import ScrollMagic from 'scrollmagic'


export default function NcNewsFront(props) {
  const {height} = props
  const halfHeight = height / 2;
  let controller = new ScrollMagic.Controller()

  let scene = new ScrollMagic.Scene({
    duration: 2000,
    offset: halfHeight
  })

  return (
    <div className="NcNewsFront">
      <svg id="morph2" viewBox="0 0 1980 1020" preserveAspectRatio="none">
        <path
          className="morph2"
          fill="#24305e"
          d="M1980 1080L1980 1080C1965.37 1258.05 1869.02 1295.47 1690.97 1192.25C1512.91 1089.03 1435.5 1100.64 1458.72 1227.09C1262.6 1469.66 1027.78 1503.2 754.24 1327.73C480.71 1152.25 229.3 1069.68 0 1080L0 1080L1980 1080Z"
        ></path>
      </svg>
      <h3 className="projectStuff">Frontend project</h3>
      <h4>
        Github repo:
        <a
          href="https://github.com/Jordan-Shaw/REACT-NC-News"
          className="projectLink"
        >
          React News App
        </a>
      </h4>
      <h4>
        Hosted version:
        <a
          href="https://nc-news-js-frontend.herokuapp.com/articles"
          className="projectLink"
        >
          React News App
        </a>
      </h4>
      <img src={frontend} alt="frontend" className="frontend" />
      <p>
        Mobile-responsive, single page application created using React. Designed
        to emulate a news application in the style of reddit, its associated
        backend is described below.
      </p>
      <p>
        I particularly enjoyed this project. It was a fun introduction to React,
        and getting the parallax scrolling working correctly was a rewarding
        challenge.
      </p>
    </div>
  );
}
