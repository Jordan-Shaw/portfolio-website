import React, { Component } from 'react';
import './App.css';
import Introduction from './components/Introduction'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import {useScrollYPosition} from 'react-use-scroll-position'

class App extends Component {
  state = {
    windowHeight: (window.innerHeight),
    yPosition: null
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Introduction id="intro" smoothScroll={this.smoothScroll}/>
          <About id="about" scrollToTop={this.scrollToTop} smoothScroll={this.smoothScroll}/>
          <Projects id="projects" scrollToTop={this.scrollToTop} smoothScroll={this.smoothScroll} yPositionProjects={this.yPositionProjects}/>
          <Contact id="contact" scrollToTop={this.scrollToTop} />
        </main>
      </div>
    );
  }


  smoothScroll = (position) => {
    if (position === 'about') {
      window.scroll(
        {
          top: this.state.windowHeight,
          left: 0
        })
    } else if (position === 'projects') {
      window.scroll(
        {
          top: 2 * this.state.windowHeight,
          left: 0
        })
    } else if (position === 'contact') {
      window.scroll(
        {
          top: 4.5 * this.state.windowHeight,
          left: 0
        })
    }
  }


  scrollToTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  yPositionProjects = (yPosition) => {
    if (yPosition < 1652) {
      return "sectionC"
    } else if (2892 > yPosition) {
      return "sectionCfixed"
    } else {
      return "sectionCUnfixed"
    }
  }

}

export default App;
