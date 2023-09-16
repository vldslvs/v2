import React, { useState } from "react";
import './skills.css'
import { Trans, useTranslation } from 'react-i18next';


const Frontend = () => {
   const { t, i18n } = useTranslation();
   const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [modal, setModal] = useState(false);

  
  return (
    <>
            <div class="container">
  <div className="interior">
    <a classname="btn" href="#open-modal-frontend"><h1>Frontend ⤵</h1></a>
  </div>
</div>
<div id="open-modal-frontend" className="modal-window">
  <div>
    <a href="#" title="Close" className="modal-close">Close</a>
    <h1> My Frontend Steck</h1>
    <div className="skills-grid">
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

    <div><small></small></div>


    and more coming soon...
  </div>
</div>

    </>
  );
}


export default Frontend
