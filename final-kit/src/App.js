// src/App.js
import "./App.css";
import React from "react";
import { useTranslation } from "react-i18next";
import translations from "./locales/translations";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng); // Save our value to local storage so that it remains in the selected language in which we refreshed the page.
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t(translations.header)}</h1>
        <p>{t(translations.paragraph)}</p>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("de")}>Deutsch</button>
      </header>
    </div>
  );
}

export default App;
