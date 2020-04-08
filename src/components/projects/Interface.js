import React from "react";



export default function Interface() {
  return (
    <div className="interface">
      <h3 className="projectTitle">Interface</h3>
      <p className="projectText">
        Interface was a project which aimed to use real-time face and emotion detection to improve productivity and mental wellbeing.
      </p>
      <iframe
        title="Interface YouTube  Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1xZvq_L23YY"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope;"
        allowfullscreen
        className="projectVideo"
      ></iframe>
      <p className="projectText">I had a hand in almost every part of the project, but took particular responsibility for getting the facial recognititon working correctly.</p>
    </div>
  );
}
