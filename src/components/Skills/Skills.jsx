import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import "../fonts.css";

const Skills = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);
  return (
    <div className="skills-container">
      <div className="tools-box">
        <h2
          className="tools-text"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          {isEnglish ? "TECHNOLOGIES I AM FAMILIAR WITH" : "TECNOLOGÍAS CON LAS QUE ESTOY FAMILIARIZADA"}
        </h2>
      </div>

      <section className="skills-section">
        <div
          data-aos="fade-down-right"
          className="skills-box"
          style={{ "--clr": "#ff22bb", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faHtml5} />
          <span>HTML</span>
        </div>
        <div
          data-aos="fade-down"
          className="skills-box"
          style={{ "--clr": "#00fff5", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faCss3Alt} />
          <span>CSS</span>
        </div>
        <div
          data-aos="fade-down"
          className="skills-box"
          style={{ "--clr": "#92D500", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faJs} />
          <span>JAVASCRIPT</span>
        </div>
        <div
          data-aos="fade-down-left"
          className="skills-box"
          style={{ "--clr": "#a200ff", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faReact} />
          <span>REACT</span>
        </div>
        <div
          data-aos="fade-right"
          className="skills-box"
          style={{ "--clr": "#ffed00", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faBootstrap} />
          <span>MUI</span>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="skills-box"
          style={{ "--clr": "#ff00c9", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faSass} />
          <span>SASS</span>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="skills-box"
          style={{ "--clr": "#ff6600", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faSquareGithub} />
          <span>GITHUB</span>
        </div>
        <div
          data-aos="fade-left"
          className="skills-box"
          style={{ "--clr": "#0060ff", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faJs} />
          <span>PHOTOSHOP</span>
        </div>
        <div
          data-aos="fade-up-right"
          className="skills-box"
          style={{ "--clr": "#f097ff", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faFigma} />
          <span>FIGMA</span>
        </div>
        <div
          data-aos="fade-up"
          className="skills-box"
          style={{ "--clr": "#ff0000", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faJs} />
          <span>POSTMAN</span>
        </div>
        <div
          data-aos="fade-up"
          className="skills-box"
          style={{ "--clr": "#f5ffa6", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faJs} />
          <span>MYSQL</span>
        </div>
        <div
          data-aos="fade-up-left"
          className="skills-box"
          style={{ "--clr": "#ce7e00", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faNode} />
          <span>NODE JS</span>
        </div>
      </section>
    </div>
  );
};

export default Skills;
