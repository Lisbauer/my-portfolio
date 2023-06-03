import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="explore-box">
        <a
          className="explore"
          href="./"
          style={{ "--clr": "#8100ff", "--i": 0 }}
        >
          <span>EXPLORE</span>
        </a>
      </div>

      <img className="moon2" src="../../images/moonanime.png" alt="" />
      <img className="astro" src="../../images/astro.png" alt="" />

      <section className="section-intro">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </section>
      <section className="stars-section">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </section>
    </div>
  );
};

export default Intro;
