import React, { Component } from "react";
import Introduction from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default class Home extends Component {
  state = {
    windowHeight: window.innerHeight,
    yPosition: null
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <main>
          <Introduction id="intro" smoothScroll={this.smoothScroll} />
          <About
            id="about"
            scrollToTop={this.scrollToTop}
            smoothScroll={this.smoothScroll}
          />
          <Projects
            id="projects"
            scrollToTop={this.scrollToTop}
            smoothScroll={this.smoothScroll}
            yPositionProjects={this.yPositionProjects}
          />
          <Contact id="contact" scrollToTop={this.scrollToTop} />
        </main>
      </div>
    );
  }

  smoothScroll = position => {
    if (position === "about") {
      window.scroll({
        top: this.state.windowHeight,
        left: 0
      });
    } else if (position === "projects") {
      window.scroll({
        top: 2 * this.state.windowHeight,
        left: 0
      });
    } else if (position === "contact") {
      window.scroll({
        top: 4.5 * this.state.windowHeight,
        left: 0
      });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };

  determineWindowHeight = () => {};

  yPositionProjects = yPosition => {
    if (yPosition < 2 * this.state.windowHeight) {
      return "sectionC";
    } else if (3.5 * this.state.windowHeight > yPosition) {
      return "sectionCfixed";
    } else {
      return "sectionCUnfixed";
    }
  };
}
