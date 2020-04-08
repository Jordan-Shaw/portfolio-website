import React, { Component } from "react";
import Home from "./components/Home.js";
import "./App.css";
import NcNewsFront from "./components/projects/NcNewsFront.js";
import NcNewsBack from "./components/projects/NcNewsBack.js";
import NUVisionRefresh from "./components/projects/NUVisionRefresh.js";
import Interface from "./components/projects/Interface.js";


class App extends Component {

  
  render() {
    const height = window.innerHeight;
    return (
      <div className="App">
          <Home/>
          <Interface height={height}/>
          <NcNewsFront height={height}/>
          <NcNewsBack height={height}/>
          <NUVisionRefresh height={height}/>
      </div>
    );
  }
}
export default App;
