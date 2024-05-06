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
          {isEnglish
            ? "TECHNOLOGIES I AM FAMILIAR WITH"
            : "TECNOLOGÍAS CON LAS QUE ESTOY FAMILIARIZADA"}
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
          style={{ "--clr": "#ffed00", "--i": 0, alignItems: "center" }}
        >
          <img
            className="icon"
            style={{ width: "50px", height: "50px" }}
            src="/images/mui.png"
            alt="mui icon"
          />
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
          style={{ "--clr": "#0060ff", "--i": 0, alignItems: "center" }}
        >
          <img
            className="icon"
            style={{ width: "45px", height: "45px" }}
            src="/images/ps.png"
            alt="photoshop icon"
          />
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
          style={{ "--clr": "#ff0000", "--i": 0, alignItems: "center" }}
        >
          <img
            className="icon"
            style={{ width: "50px", height: "50px" }}
            src="/images/nextjs.png"
            alt="postman"
          />
          <span>NEXT.JS</span>
        </div>
        <div
          data-aos="fade-up"
          className="skills-box"
          style={{ "--clr": "#f5ffa6", "--i": 0, alignItems: "center" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-tailwind"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
          </svg>
          <span>TAILWINDCSS</span>
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
