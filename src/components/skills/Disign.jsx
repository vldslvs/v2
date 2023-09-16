import React, { useState } from "react";
import './skills.css'
import { Trans, useTranslation } from 'react-i18next';


const Disign = () => {
   const { t, i18n } = useTranslation();
   const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [modal, setModal] = useState(false);

  
    return (
      <>
     <div class="container">
    <div className="interior">
      <a classname="btn" href="#open-modal"><h1>Disign ⤵</h1></a>
    </div>
  </div>
  <div id="open-modal" className="modal-window">
    <div>
      <a href="#" title="Close" className="modal-close">Close</a>
      <h1> My Disign Steck</h1>
      <div className="skills-grid">
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
  
      <div><small></small></div>
  
  
      and more coming soon...
    </div>
  </div>
  
      </>
  );
      }
export default Disign
