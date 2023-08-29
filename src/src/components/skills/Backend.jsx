import React from 'react'
import { Trans, useTranslation } from 'react-i18next';


const Backend = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className='skills-content'>
        <h3 className='skills-title'>Backend</h3>
        <div className='skills-box'>
            <div className='skills-group'>
            <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bx-badge-check' ></i>
                </div>
                <h3 className='skills-name'>Python</h3>
                </div>
                <span className='skills-level'>{t("Basic")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bx-badge-check' ></i>
                </div>
                <h3 className='skills-name'>MySQL</h3>
                </div>
                <span className='skills-level'>{t("Basic")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bx-badge-check' ></i>
                </div>
                <h3 className='skills-name'>MongoDB</h3>
                </div>
                <span className='skills-level'>{t("Basic")}</span>
                </div>
                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bx-badge-check' ></i>
                </div>
                <h3 className='skills-name'>Node JS</h3>
                </div>
                <span className='skills-level'>{t("Intermeditate")}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend
