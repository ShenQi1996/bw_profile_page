import React from "react";
import "./TimeLine.scss";
const TimeLine = () => {
  return (
    <div className="timeline">
      <div className="timeline_conainter">
        <div>
          <h1>Personal Trainer</h1>
          <p>Blink Fitness Brooklyn, NY</p>
          <h2> July 2019 – Present</h2>
        </div>
        <div>
          <h1>Web Developer/ Product Data Coordinator </h1>
          <p>BHMedWear, Brooklyn, NY</p>
          <h2> May 2017 – May 2019</h2>
        </div>
        <div>
          <h1>Full Stack Developer </h1>
          <p>Greenopia, Brooklyn, NY</p>
          <h2> June 2016 – May 2017</h2>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
