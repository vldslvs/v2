import React, { useState } from "react";
import { Trans, useTranslation } from 'react-i18next';
import './skills.css'

const Disign = () => {
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
      <h3 className='skills-title'>{t("UX/UI")} ⤵</h3>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <h3 className='skills-title'>{t("My Des steck")}</h3>
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
            <button className="close-modal" onClick={toggleModal}>
            <i class='bx bx-x'></i>
            </button>
          </div>
        </div>
      )}
      </div>
  );
      }
export default Disign
