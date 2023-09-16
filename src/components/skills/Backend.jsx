import React, { useState } from "react";
import './skills.css'
import { Trans, useTranslation } from 'react-i18next';


const Backend = () => {
   const { t, i18n } = useTranslation();
   const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [modal, setModal] = useState(false);

  
    return (
      <>
     <div class="container">
    <div className="interior">
      <a classname="btn" href="#open-modal-backend"><h1>Backend ⤵</h1></a>
    </div>
  </div>
  <div id="open-modal-backend" className="modal-window">
    <div>
      <a href="#" title="Close" className="modal-close">Close</a>
      <h1> My Backend Steck</h1>
      <div className="skills-grid">
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
  
      <div><small></small></div>
  
  
      and more coming soon...
    </div>
  </div>
  
      </>
  );
      }
export default Backend
