import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "./aboutMe.css";
import '../fonts.css'

const AboutMe = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);
  const getCVFile = () => {
    if (isEnglish) {
      return "../../images/cv-en.pdf";
    } else {
      return "../../images/cv-es.pdf";
    }
  };
  return (
    <div className="container">
      <div className="about-container"></div>
      <div className="text-img-box">
        <div className="h2-pic-cv">
        <h2 className="h2-abt" data-aos="fade-right"> <span>{isEnglish ? "ABOUT " : "SOBRE "}</span>{isEnglish ? "ME" : "MI"}</h2>
        <div className="pic-cv" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="70"
     data-aos-offset="0">
          <img
            className="linkedin-pic"
            src="../../images/linkedin.png"
            alt="picture"
          />
          <a  data-aos="flip-left"
            className="a-neon"
            href=""
            style={{ "--clr": "#ff22bb", "--i": 0 }}
          >
            <a href={getCVFile()} download>
        <span>CV</span>
      </a>
          </a>
        </div></div>

        <div className="container2">
          <div className="box2">
            <span></span>
            <div className="content">
              <h2>{isEnglish ? "WHO AM I?" : "QUIÉN SOY?"}</h2>
              <p>{isEnglish ? "I am a 27 year old girl living in Buenos Aires, Argentina. I have a background in veterinary studies, having worked and studied in that field for six years. However, my passion lies in frontend development with a keen interest in design. In 2022, I started my journey as a developer, focusing on expanding my skills in programming and pursuing a career in the tech industry." : "Soy una chica de 27 años de Buenos Aires, Argentina. Tengo formación en estudios veterinarios y trabajé y estudié en ese campo durante seis años. Sin embargo, mi pasión se encuentra en el desarrollo frontend, con un gran interés en el diseño. En 2022, comencé mi camino como desarrolladora, enfocándome en expandir mis habilidades en programación y persiguiendo una carrera en la industria tecnológica."}
              </p>
            </div>
          </div>

          <div className="box2">
            <span></span>
            <div className="content">
              <h2>{isEnglish ? "WHAT ARE MY GOALS?" : "CUÁLES SON MIS METAS?"}</h2>
              <p>{isEnglish ? "I aspire to become proficient in the latest technologies and frameworks, constantly staying updated with industry trends. Ultimately, my goal is to secure challenging projects or employment opportunities that allow me to utilize my programmingand design skills effectively, contributing to innovative anduser-friendly digital experiences. Currently, I am taking a UX/UI design course at Coder house." : "Mi objetivo es destacarme en tecnología y diseño, busco proyectos desafiantes u oportunidades laborales donde pueda aplicar de manera efectiva mis habilidades en programación y diseño, contribuyendo a la creación de experiencias digitales innovadoras y amigables para los usuarios.  Actualmente, estoy realizando un curso de diseño UX/UI en Coderhouse."}
              </p>
            </div>
          </div>

          <div className="box2">
            <span></span>
            <div className="content">
              <h2 className="gettoknowme">{isEnglish ? "GET TO KNOW ME A LITTLE MORE!" : "CONOCEME UN POCO MÁS!"}</h2>
              <p>{isEnglish ? "In my free time, I love playing videogames. I've been a gamer since I was 15, so I'm very familiar with technology. I have two cats who love to lean on my keyboard and erase my code. I'm passionate about digital art, I've always wanted a graphics tablet. My favorite place in the world is my workspace, as I consider it incredibly useful and supportive in nurturing inspiration." : "En mi tiempo libre, me encanta jugar videojuegos. Soy jugadora desde los 15 años, así que estoy muy familiarizada con la tecnología. Tengo dos gatos que les encanta apoyarse en mi teclado y borrar mi código. Siento pasión por el arte digital, siempre he querido tener una tableta gráfica. Mi lugar favorito en el mundo es mi espacio de trabajo, ya que lo considero extremadamente útil y un apoyo para nutrir la inspiración."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
