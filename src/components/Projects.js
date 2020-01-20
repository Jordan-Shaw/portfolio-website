import React from 'react'
import frontend from "../images/frontend.jpg"
import backend from "../images/backend.jpg"
import newcastleRefresh from "../images/newcastleRefresh.jpg"
import { useScrollYPosition } from 'react-use-scroll-position';


export default function Projects(props) {
  const { scrollToTop, smoothScroll, yPositionProjects } = props;
  const yPos = useScrollYPosition()
  console.log(yPos);



  return (
    <div className="section3">
      <div className={yPositionProjects(yPos)}>
        <span className="scrollTop" id="scrollD" onClick={scrollToTop}>⇡</span>
        <h2 className="whiteH2">
          Scroll to top
        </h2>
        <h1 className="projectsH1">
          Projects
        </h1>
        <h2 className="whiteH2">
          Contact
        </h2>
        <span className="scrollBottom" id="scrollD" onClick={() => { smoothScroll('contact') }}>⇣</span>
      </div>
      <div className="sectionD">
        <div className="proj1">
          <h3 className="projectStuff">Frontend</h3>
          <h4>Github repo:<a href="https://github.com/Jordan-Shaw/REACT-NC-News" className="projectLink">React News App</a></h4>
          <h4>Hosted version:<a href="https://nc-news-js-frontend.herokuapp.com/articles" className="projectLink">React News App</a></h4>
          <img src={frontend} alt="frontend" className="frontend" />
          <p>
            Front end created using React. Designed to emulate a news application, in the style of reddit. Associated backend is described below.
          </p>
        </div>
        <div className="proj2">
          <h3 className="projectStuff">Backend</h3>
          <h4>Github repo:<a href="https://github.com/Jordan-Shaw/REACT-NC-News" className="projectLink">Node.js Express News App Backend</a></h4>
          <h4>Hosted version:<a href="https://nc-news-js-frontend.herokuapp.com/articles" className="projectLink">React News App</a></h4>
          <img src={backend} alt="backend" className="backend" />
          <p>Backend for the news app described above. Available endpoints can be seen by following the link above.</p>
        </div>
        <div className="proj3">
          <h3 className="projectStuff">Newcastle Vision Refresh</h3>
          <img src={newcastleRefresh} alt="newcastle-uni-site" className="newcastleRefresh" />
          <p>When acting as a Digital Team assistant for the Newcastle University Corporate Web Development team, I was responsible for using the team's CMS to build the new pages according to provided brief's and wireframes. </p>
        </div>
      </div>
    </div>
  )


}
