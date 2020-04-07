import React from 'react'
import backend from "../../images/backend.jpg";


export default function NcNewsBack() {
  return (
    <div className="NcNewsBack">
      <h3 className="projectStuff">Backend project</h3>
      <h4>
        Github repo:
        <a
          href="https://github.com/Jordan-Shaw/REACT-NC-News"
          className="projectLink"
        >
          Node.js Express News App Backend
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
      <img src={backend} alt="backend" className="backend" />
      <p>
        Backend for the news app described above. Available endpoints can be
        seen by following the link above.
      </p>
      <p>
        This Node.js backend employs Express and Knex to serve data via a
        RESTful API.{" "}
      </p>
    </div>
  );
}
