import React from 'react'
import { useContext } from "react";
import { useTranslation } from 'react-i18next';
import Toggle from './components/toggle/Toggle'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Contact from './components/contact/Contact'

import './App.css'
import { ThemeContext } from "./context";
import LangBtn from './components/lang_btn//lang-btn';
import Skills from './components/skills/Skills';




const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
    <div
      style={{
        backgroundColor: darkMode ? "#040D11" : "#F5F5F5",
        color: darkMode && "white",
      }}
    >
      
      <Intro />
      {/* <About /> */}
      <Skills/>
      {/* <Contact/> */}
      </div>
    </>
  )
}

export default App