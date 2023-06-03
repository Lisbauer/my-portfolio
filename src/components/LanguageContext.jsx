import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isEnglish, setEnglish] = useState(true);

  const toggleLanguage = () => {
    setEnglish(!isEnglish);
  };

  return (
    <LanguageContext.Provider value={{ isEnglish, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
