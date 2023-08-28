import React from 'react'
import { Trans, useTranslation } from 'react-i18next';
import '../skills/skills.css'
const Disign = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
     i18n.changeLanguage(language);
   };
  return (
    <div className='skills-content'>
        <h3 className='skills-title'>UX/UI</h3>
        <div className='skills-box'>
            <div className='skills-group'>
              <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bx-badge-check' ></i>
                </div>
                <h3 className='skills-name'>Figma</h3>
                </div>
                <span className='skills-level'>{t("Intermeditate")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bx-badge-check' ></i>
                </div>
                <h3 className='skills-name'>Pixelmator</h3>
                </div>
                <span className='skills-level'>{t("Intermeditate")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bx-badge-check' ></i>
                </div>
                <h3 className='skills-name'>Three.js</h3>
                </div>
                <span className='skills-level'>{t("Basic")}</span>
                </div>

                

                
            </div>
        </div>
    </div>
  )
}

export default Disign
