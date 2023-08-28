import React from 'react'
import { useTranslation } from 'react-i18next';
import Toggle from '../toggle/Toggle';
import './footer.css'
import { ThemeContext } from "../../context";
import { useContext, useRef, useState } from "react";

const LangBtn = () => {
  
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className='button-lang'>
      <div className='button-list'>
      <button className='lngBtn' onClick={() => changeLanguage("en")}>EN</button>
      <button className='lngBtn' onClick={() => changeLanguage("be")}>BE</button>
      <button className='lngBtn' onClick={() => changeLanguage("pl")}>PL</button>
      </div>
    </div>
  )
}

export default LangBtn
