import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "./certificate.css";
import "../fonts.css";

const Certificate = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);
  return (
    <div className="certificate-container">
      <h2 data-aos="fade-down">{isEnglish ? "MY CERTIFICATES" : "MIS CERTIFICADOS"}</h2>
      <div className="certificate-images">
        <div className="two-img">
          <img
            className="cert-img"
            src="../../images/devweb-cert.png"
            alt="picture"
          />

          <img
            className="cert-img"
            src="../../images/js-cert.png"
            alt="picture"
          />
        </div>
        <div className="two-img">
          <img
            className="cert-img"
            src="../../images/react-cert.png"
            alt="picture"
          />

          <img
            className="cert-img"
            src={isEnglish ? "../../images/certcarr-en.png" : "../../images/certcarr-es.png"}
            alt="picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
