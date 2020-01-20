import React, { Component } from 'react';
import JordanShaw from '../images/JordanShaw.jpg'


export default class Introduction extends Component {
  state = {
    windowHeight: (window.innerHeight)
  }

  render() {
    const {smoothScroll} = this.props
    return (
      <div className="section1">
        <h2 className="whiteH2">Junior Developer</h2>
        <img src={JordanShaw} alt="profile" />
        <h1>Jordan Shaw</h1>
        <h2 className="whiteH2">
          <a href="#about" onClick={() => { smoothScroll('about') }} className="aboutLink">
            About
          </a> / 
          <a href="#projects" onClick={() => { smoothScroll('projects') }} className="projectsLink">
            Projects
          </a> / 
          <a href="#contact" onClick={() => { smoothScroll('contact') }} className="contactLink">
            Contact
          </a>
      </h2>
      </div>
    )
  }

  
}