import React, { useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "./contact.css";
import "../fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

emailjs.init("c-8emIEBk9zCo1zHo");

const Contact = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);
  const [selectedNombre, setSelectedNombre] = useState("");
  const [selectedCorreo, setSelectedCorreo] = useState("");
  const [selectedAsunto, setSelectedAsunto] = useState("");
  const [selectedMensaje, setSelectedMensaje] = useState("");
  const [showValidationError, setShowValidationError] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsClose, setModalIsClose] = useState(false);

  const sendForm = (event) => {
    event.preventDefault();

    if (
      !selectedNombre ||
      !selectedCorreo ||
      !selectedAsunto ||
      !selectedMensaje
    ) {
      setShowValidationError(true);
      setShowMessage(false);
      return;
    }
    const templateParams = {
      nombre: selectedNombre,
      correo: selectedCorreo,
      asunto: selectedAsunto,
      mensaje: selectedMensaje,
    };

    emailjs
      .send("service_bvernjq", "template_7qfvucu", templateParams)
      .then((response) => {
        console.log("Correo enviado con éxito", response.status, response.text);
        setShowMessage(true);
        setShowValidationError(false);
        setModalIsOpen(true);
      })
      .catch((error) => {
        console.error("Error al enviar el correo", error);
      })
      .finally(() => {
        setSelectedNombre("");
        setSelectedCorreo("");
        setSelectedAsunto("");
        setSelectedMensaje("");
        setShowValidationError(false);
      });
  };

  const closeModal = () => {
    setModalIsClose(true);
    setModalIsOpen(false);
  };

  return (
    <div className="container-max">
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>
      <span className="bg-span"></span>

      <div className="contact-container" data-aos="fade-down">
        <div className="content-contact">
          <h2>{isEnglish ? "CONTACT ME" : "CONTÁCTAME"}</h2>
          <div className="form">
            <div className="input-box">
              <input
                type="text"
                required
                value={selectedNombre}
                style={{
                  border:
                    showValidationError && !selectedNombre
                      ? "1px solid red"
                      : "none",
                }}
                onChange={(event) => setSelectedNombre(event.target.value)}
              />
              <i>{isEnglish ? "Name" : "Nombre"}</i>
            </div>

            <div className="input-box">
              <input
                type="text"
                required
                value={selectedCorreo}
                style={{
                  border:
                    showValidationError && !selectedCorreo
                      ? "1px solid red"
                      : "none",
                }}
                onChange={(event) => setSelectedCorreo(event.target.value)}
              />
              <i>Mail</i>
            </div>

            <div className="input-box">
              <input
                type="text"
                required
                value={selectedAsunto}
                style={{
                  border:
                    showValidationError && !selectedAsunto
                      ? "1px solid red"
                      : "none",
                }}
                onChange={(event) => setSelectedAsunto(event.target.value)}
              />
              <i>{isEnglish ? "Subject" : "Asunto"}</i>
            </div>

            <div className="input-box-message" value={selectedMensaje}>
              <textarea
                value={selectedMensaje}
                style={{
                  border:
                    showValidationError && !selectedMensaje
                      ? "1px solid red"
                      : "none",
                }}
                onChange={(event) => setSelectedMensaje(event.target.value)}
              ></textarea>
              <i>{isEnglish ? "Message" : "Mensaje"}</i>
            </div>

            <div className="input-box">
              <button onClick={sendForm}>{isEnglish ? "SEND" : "ENVIAR"}</button>
            </div>
            <div className="btn-p">
              {showValidationError && (
                <p className="error-p">{isEnglish ? "Please fill out all the required fields." : "Complete todos los campos por favor."}</p>
              )}
              {showMessage && (
                <div
                  className={`modal ${
                    modalIsOpen ? "modal" : modalIsClose ? "modal-show" : ""
                  }`}
                >
                  <span></span>
                  <img
                    className="astro5"
                    src="../../images/astro5.png"
                    alt="astro message"
                  />
                  <p className="success-p">{isEnglish ? "Message sent." : "Mensaje enviado."}</p>
                  <button className="modal-close" onClick={closeModal}>
                    Ok
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <ul className="effect3">
          <li className="red-li" style={{ "--clr": "#00afff" }}>
            <a href="https://www.linkedin.com/in/lisbauer/" target="blank" alt="linkedin-icon">
              <FontAwesomeIcon className="fonticon" icon={faLinkedin} />
              <span className="icon-span">Linkedin</span>
            </a>
          </li>
          <li className="red-li" style={{ "--clr": "#b900ff" }}>
            <a href="https://github.com/Lisbauer" target="blank" alt="github-icon">
              <FontAwesomeIcon className="fonticon" icon={faSquareGithub} />
              <span className="icon-span">Github</span>
            </a>
          </li>
          <li className="red-li" style={{ "--clr": "#8fce00" }}>
            <a href="mailto:lisabauer.dev@gmail.com" target="blank" alt="gmail-icon">
              <FontAwesomeIcon className="fonticon" icon={faEnvelope} />
              <span className="icon-span">Gmail</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
