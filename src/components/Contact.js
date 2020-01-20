import React from 'react'

export default function Contact(props) {
  const {scrollToTop} = props

  return (
    <div className="section4">
      <div className="sectionE">
        <span className="scrollTop" id="scrollE" onClick={scrollToTop}>⇡</span>
        <h2 className="whiteH2">Scroll to top</h2>
        <h1 className="contactH1">Contact</h1>
      </div>
      <div className="sectionF">
        <h3 className="contactStuff">
          Github
        </h3>
        <a href="https://github.com/Jordan-Shaw" className="contactSectionLink">
          Jordan Shaw
        </a>
        <h3 className="contactStuff">
          Email
        </h3>
        <a href="mailto:jordan.shaw2400@gmail.com" className="contactSectionLink">
          jordan.shaw2400@gmail.com
        </a> 
        <h3 className="contactStuff">
          Mobile:
        </h3>
        <p className="contactStuff">
          07739937688
        </p>
      </div>
    </div>
  )
}
