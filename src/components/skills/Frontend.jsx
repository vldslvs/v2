import React from 'react'
import { Trans, useTranslation } from 'react-i18next';


const Frontend = () => {
   const { t, i18n } = useTranslation();
   const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className='skills-content'>
      <i class='bx bxs-keyboard'></i>
        <h3 className='skills-title'>{t("Frontend")}</h3>
        <div className='skills-box'>
            <div className='skills-group-frontend'>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bx-badge-check' ></i>
                </div>
                <h3 className='skills-name'>HTML</h3>
                </div>
                <span className='skills-level'>{t("Intermeditate")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bx-badge-check' ></i>
                </div>
                <h3 className='skills-name'>CSS / SASS </h3>
                </div>
                <span className='skills-level'>{t("Intermeditate")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bx-badge-check' ></i>
                </div>
                <h3 className='skills-name'>Tailwind css</h3>
                </div>
                <span className='skills-level'>{t("Intermeditate")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bx-badge-check' ></i>
                </div>
                <h3 className='skills-name'>JavaScript</h3>
                </div>
                <span className='skills-level'>{t("Intermeditate")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bx-badge-check' ></i>
                </div>
                <h3 className='skills-name'>React</h3>
                </div>
                <span className='skills-level'>{t("Intermeditate")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bx-badge-check' ></i>
                </div>
                <h3 className='skills-name'>Typescript</h3>
                </div>
                <span className='skills-level'>{t("Basic")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bx-badge-check' ></i>
                </div>
                <h3 className='skills-name'>Next JS</h3>
                </div>
                <span className='skills-level'>{t("Basic")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bx-badge-check' ></i>
                </div>
                <h3 className='skills-name'>React Native</h3>
                </div>
                <span className='skills-level'>{t("Basic")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bx-badge-check' ></i>
                </div>
                <h3 className='skills-name'>Angular</h3>
                </div>
                <span className='skills-level'>{t("Basic")}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend
