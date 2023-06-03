import React, { useContext, useState } from "react";
import "./navbar.css";
import { Link, animateScroll } from "react-scroll";
import { LanguageContext } from "../LanguageContext";
import "../fonts.css";

const Navbar = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const [isMenuOpen, setMenuOpen] = useState(false);
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  const handleLanguageClick = (language) => {
    if ((language === "en" && !isEnglish) || (language === "es" && isEnglish)) {
      toggleLanguage();
    }
  };

  return (
    <div className="nav-container">
      <div className="burger-link-container">
        <button
          className={`burger-btn ${isMenuOpen ? "active" : ""}`}
          onClick={handleMenuClick}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
        <div className={`li-container ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <div></div>
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={handleLinkClick}
              >
                {isEnglish ? "HOME" : "INICIO"}
              </Link>
            </li>
            <li>
              <Link
                to="aboutme"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={handleLinkClick}
              >
                {isEnglish ? "ABOUT ME" : "SOBRE MÍ"}
              </Link>
            </li>

            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={handleLinkClick}
              >
                {isEnglish ? "SKILLS" : "CONOCIMIENTOS"}
              </Link>
            </li>

            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={handleLinkClick}
              >
                {isEnglish ? "PORTFOLIO" : "PORTAFOLIO"}
              </Link>
            </li>

            <li>
              <Link
                to="art"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={handleLinkClick}
              >
                {isEnglish ? "ART GALLERY" : "GALERÍA"}
              </Link>
            </li>

            <li>
              <Link
                to="certificate"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={handleLinkClick}
              >
                {isEnglish ? "CERTIFICATES" : "CERTIFICADOS"}
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={handleLinkClick}
              >
                {isEnglish ? "CONTACT ME" : "CONTÁCTAME"}
              </Link>
            </li><div className="language-container">
            <h3
       className={`languageEn ${isEnglish ? "active" : ""}`}
       onClick={() => handleLanguageClick("en")}
       disabled={isEnglish}
            >
              EN
            </h3>
            <span style={{color: "white"}}>/</span>
            <h3
        className={`languageEs ${isEnglish ? "" : "active"}`}
        onClick={() => handleLanguageClick("es")}
        disabled={!isEnglish}v
            >
              ES
            </h3>
          </div>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
