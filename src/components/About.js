import React from 'react'


export default function About(props) {
  const { scrollToTop, smoothScroll} = props;

  return (
    <div className="section2" >
      <div className="sectionA">
        <span className="scrollTop" id="scrollA" onClick={scrollToTop}>⇡</span>
        <h2 className="whiteH2">Scroll to top</h2>
        <h1 className="aboutH1">About</h1>
        <h2 className="whiteH2">Projects</h2>
        <span className="scrollBottom" id="scrollA" onClick={() => {smoothScroll('projects')}}>⇣</span>
      </div>
      <div className="sectionB">
        <h3 className="aboutStuff">Bio</h3>
        <p>
          I am a Junior Developer based in Manchester, a (soon-to-be) graduate of <strong>Northcoders</strong> with a <strong>1st Class BSc</strong> in Cellular & Molecular Biology from Newcastle University.
          </p> 
        <p> My primary language is <strong>Javascript</strong> and I have experience using React, Express and Knex. 
        </p>
        <h3 className="aboutStuff">Experience</h3>
        <p>
          I was introduced to development through <strong>working with Newcastle University's Corporate Web Development team</strong> while studying for my degree. The entire site was revamped as part of a new marketing strategy, meaning <strong>I was involved in every stage of the development pipeline</strong>; from designing wireframes and site structure to implementing new components. 
        </p>
        <p>
          After leaving university I completed the Northcoders' Developer pathway. Creating both frontend and backend projects which can be seen below.   
        </p>
        <h3 className="aboutStuff">What Next?</h3>
        <p>
          Now, I'm looking for my first job in development. <strong>Please get in touch if you think there's a position I might be suitable for!</strong>
        </p>
      </div>
    </div>
  )
}
