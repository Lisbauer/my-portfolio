import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "./projects.css";
import "../fonts.css";

const Projects = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);
  return (
    <div className="projectmain">
      <div className="project-main">
      <div className="myproject" data-aos="zoom-in">
  <span>{isEnglish ? "M" : "M"}</span>
  <span>{isEnglish ? "Y " : "I "}</span>
  <span>{isEnglish ? "P" : "S "}</span>
  <span>{isEnglish ? "R" : "P"}</span>
  <span>{isEnglish ? "O" : "R"}</span>
  <span>{isEnglish ? "J" : "O"}</span>
  <span>{isEnglish ? "E" : "Y"}</span>
  <span>{isEnglish ? "C" : "E"}</span>
  <span>{isEnglish ? "T" : "C"}</span>
  <span>{isEnglish ? "S" : "T"}</span>
  <span>{isEnglish ? "" : "O"}</span>
  <span>{isEnglish ? "" : "S"}</span>
</div>

        <h2 className="project-text" data-aos="zoom-out-down">
        {isEnglish ? "MY PROJECTS" : "MIS PROYECTOS"}
        </h2>

        <div className="project-container">
          <div
            className="project-card"
            style={{ "--clr": "#66e3ff" }}
            data-aos="zoom-out-right"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/project-1.png"
                alt="awg project"
              />
            </div>
            <div className="project-content">
              <h2>AWG</h2>
              <p>{isEnglish ? "My first landing page, my first freelance job, and my first time working together with a UX/UI designer" : "Mi primer página landing, mi primer trabajo freelance, y mi primera vez trabajando junto a una diseñadora UX/UI.  "}
              </p>
              <a href="">{isEnglish ? "CHECK OUT" : "EXPLORAR"}</a>
            </div>
          </div>

          <div
            className="project-card"
            style={{ "--clr": "#ff0086" }}
            data-aos="zoom-out"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/project-2.png"
                alt="picture"
              />
            </div>
            <div className="project-content">
              <h2>GEEKWORLD</h2>
              <p>{isEnglish ? "My first website made with HTML, CSS, Bootstrap, and Sass, an ecommerce site for a fictional collectible figurine store." : "Mi primer sitio web hecho con HTML, CSS, Bootstrap y Sass, un eCommerce para una tienda ficticia dedicada a la venta de figuras coleccionables"}
              </p>
              <a href="https://lisbauer.github.io/geekworld/index.html" target="blank">{isEnglish ? "CHECK OUT" : "EXPLORAR"}</a>
            </div>
          </div>

          <div
            className="project-card"
            style={{ "--clr": "#ae00ff" }}
            data-aos="zoom-out-left"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/projectma.png"
                alt="picture"
              />
            </div>
            <div className="project-content">
              <h2>M.A</h2>
              <p>{isEnglish ? "An eCommerce for the brand M.A, still in progress." : "Una tienda online para la marca de ropa M.A, en progreso"}
              </p>
              <a href="">{isEnglish ? "IN PROGRESS" : "EN PROGRESO"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
