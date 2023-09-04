import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import Disign from './Disign'
import { Trans, useTranslation } from 'react-i18next';
import { useContext, useRef, useState } from "react";


const Skills = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='s'>
      <div className='s-cencer'>
        <h2 className='skills-title'>
            {t("Skills")}
        </h2>
        <p className='skills-sub_title'>
            {t("My technical level")}
        </p>
        <div className='skills-container'>
        <div className="skills__component">
            <Disign/>
            <Frontend/>
            <Backend/>
        </div>
      </div>
      
      </div>
      <div className='cv-item'>
        <p>{t("Here you can download and view my CV")}</p>
        <button className='cv-button'>download</button>
        </div>
    </div>
  )
}

export default Skills
