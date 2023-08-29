import "./intro.css";
import Me from "../../assets/me.png";
import AboutBg from "../../assets/BG_ABOUT.png";
import { Trans, useTranslation } from 'react-i18next';



const Intro = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  
  return (
    <>
    <div className="i">
      <img src={AboutBg} alt="" className="i-bg" />
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">{t("Hello, My name is")}</h2>
          <h1 className="i-name">{t("Uladzislau")}</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Frontend DEV</div>
              <div className="i-title-item">Backend DEV</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Photographer</div>
            </div>
          </div>
          <div className="i-desc">
          <div>{t("I am a developer from Gdansk / Minsk. I actively develop my skills in the field of design of Internet products and their functioning. I also actively study Polish and English.")}</div>
          </div>
        </div>
        
        
      </div>
      <div className="i-right">
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
    </>
  );
};

export default Intro;