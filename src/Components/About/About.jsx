import React from "react";
import "./about.css";
import Marquee from "react-fast-marquee";

function About() {
  return (
    <div id="About-container">
      <div className="slidingTextContainer">
        <Marquee speed={200}>&nbsp;Amarendra Dash -</Marquee>
      </div>
    </div>
  );
}

export default About;
