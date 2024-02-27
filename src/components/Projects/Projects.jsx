import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "./projects.css";
import "../fonts.css";

const Projects = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);
  return (
    <div className='box-body'>

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

      <div className='project-container'>
      <div className='card' style={{ "--clr": "#030ffc" }}>
        <div className='imgBx'> 
            <img
                className="project-img"
                src="../../images/project-1.png"
                alt="picture"
              />
        </div>
        <div className='content'>
            <h2>AWG</h2>
            <p>{isEnglish ? "My first landing page, my first freelance job, and my first time working together with a UX/UI designer" : "Mi primer página landing, mi primer trabajo freelance, y mi primera vez trabajando junto a una diseñadora UX/UI.  "}</p>
            <a href="https://awg-seven.vercel.app/" target="blank">{isEnglish ? "CHECK OUT" : "EXPLORAR"}</a>
        </div>
      </div>

      <div className='card' style={{ "--clr": "#ff0086" }}>
        <div className='imgBx'><img
                className="project-img"
                src="../../images/project-2.png"
                alt="picture"
              /></div>
        <div className='content'>
        <h2>GEEKWORLD</h2>
              <p>{isEnglish ? "My first website made with HTML, CSS, Bootstrap, and Sass, an ecommerce site for a fictional collectible figurine store." : "Mi primer sitio web hecho con HTML, CSS, Bootstrap y Sass, un eCommerce para una tienda ficticia dedicada a la venta de figuras coleccionables"}
              </p>
              <a href="https://geekworld-figuras.000webhostapp.com/index.html" target="blank">{isEnglish ? "CHECK OUT" : "EXPLORAR"}</a>
        </div>
      </div>

      <div className='card' style={{ "--clr": "#ae00ff" }}>
        <div className='imgBx'> <img
                className="project-img"
                src="../../images/projectma.png"
                alt="picture"
              />
        </div>
        <div className='content'>
        <h2>M.A</h2>
              <p>{isEnglish ? "An eCommerce for the brand M.A, still in progress." : "Una tienda online para la marca de ropa M.A, en progreso"}
              </p>
              <a href="">{isEnglish ? "IN PROGRESS" : "EN PROGRESO"}</a>
        </div>
      </div>

      <div className='card' style={{ "--clr": "#89FFA0" }}>
        <div className='imgBx'> 
            <img
                className="project-img"
                src="../../images/project-3.png"
                alt="picture"
              />
        </div>
        <div className='content'>
            <h2>HOLA VET</h2>
            <p>{isEnglish ? "A payment gateway for a veterinary that offers social work for animals." : "Una pasarela de pago para una veterinaria que ofrece planes de obras sociales para animales.  "}</p>
            <a href="https://payment-gateway-for-hola-vet.vercel.app/" target="blank">{isEnglish ? "CHECK OUT" : "EXPLORAR"}</a>
        </div>
      </div>

      <div className='card' style={{ "--clr": "#fc7303" }}>
        <div className='imgBx'> 
            <img
                className="project-img"
                src="../../images/magnadimenseon.png"
                alt="picture"
              />
        </div>
        <div className='content'>
            <h2>MAGNA DIMENSEON</h2>
            <p>{isEnglish ? "A landing page created for a startup, managing it's design, code, and producing the illustrations." : "Un sitio web, formato landing page, hecho para una startup, gestione su diseño, código, y realice las ilustraciones."}</p>
            <a href="https://magnadimenseon.vercel.app/" target="blank">{isEnglish ? "CHECK OUT" : "EXPLORAR"}</a>
        </div>
      </div>

      <div className='card' style={{ "--clr": "#66e3ff " }}>
        <div className='imgBx'> 
            <img
                className="project-img"
                src="../../images/iqbroker.png"
                alt="picture"
              />
        </div>
        <div className='content'>
            <h2>IQ BROKER</h2>
            <p>{isEnglish ? "I converted a WordPress website to React, fixing errors, adhering to the color palette, and adding a contact form. I managed the overall design." : "Convertí su página web de WordPress a React, corrigiendo errores, respetando la paleta de colores, y añadiendo un formulario de contacto, gestioné el diseño general."}</p>
            <a href="https://iqbroker.vercel.app/" target="blank">{isEnglish ? "CHECK OUT" : "EXPLORAR"}</a>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Projects