
import React, { useState } from "react";
import './skills.css'
import { Trans, useTranslation } from 'react-i18next';


const Frontend = () => {
   const { t, i18n } = useTranslation();
   const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <div className='skills-content'>
      <button onClick={toggleModal} className="btn-modal">
      <h3 className='skills-title'>{t("Frontend")} ⤵</h3>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <h3 className='skills-title'>{t("My Frontend steck")}</h3>
            <div className='skills-group-frontend'>
                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bxl-html5' ></i>
                </div>
                <h3 className='skills-name'>HTML</h3>
                </div>
                <span className='skills-level'>{t("Intermeditate")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bxl-css3' ></i>
                </div>
                <h3 className='skills-name'>CSS</h3>
                </div>
                <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bxl-sass' ></i>
                </div>
                <h3 className='skills-name'>SASS</h3>
                </div>
                
                <span className='skills-level'>{t("Intermeditate")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bxl-tailwind-css' ></i>
                </div>
                <h3 className='skills-name'>Tailwind css</h3>
                </div>
                <span className='skills-level'>{t("Intermeditate")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bxl-javascript' ></i>
                </div>
                <h3 className='skills-name'>JavaScript</h3>
                </div>
                <span className='skills-level'>{t("Intermeditate")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bxl-react'></i>
                </div>
                <h3 className='skills-name'>React</h3>
                </div>
                <span className='skills-level'>{t("Intermeditate")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bxl-typescript' ></i>
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
                <i class='bx bxl-react'></i>
                </div>
                <h3 className='skills-name'>React Native</h3>
                </div>
                <span className='skills-level'>{t("Basic")}</span>
                </div>

                <div className='skills-item-block'>
              <div className='skills-item-name'>
                <div className='skills-data'>
                <i class='bx bxl-angular' ></i>
                </div>
                <h3 className='skills-name'>Angular</h3>
                </div>
                <span className='skills-level'>{t("Basic")}</span>
                </div>
            </div>
            <button className="close-modal" onClick={toggleModal}>
            <i class='bx bx-x'></i>
            </button>
          </div>
        </div>
      )}
      </div>
  );
}


export default Frontend
