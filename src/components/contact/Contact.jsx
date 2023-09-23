import "./contact.css";
import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";
import { Trans, useTranslation } from 'react-i18next';
import Toggle from "../toggle/Toggle";
import LangBtn from "../lang_btn/lang-btn";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xiomkcy",
        "template_n9betjs",
        formRef.current,
        "B36bQkIV7ZaqselQe"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const { t, i18n } = useTranslation();
  return (
    
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">{t("Let's discuss your project in ⤵")}</h1>
          <div className="c-info">
            <div className="c-info-item">
            <i class='bx bxl-linkedin' ></i>
            <a className="link-name" href="https://www.linkedin.com/in/uladzislau-hermanovich/">
            {/* <span class="text-hover-send">{t("Send message in linkedin")}</span> */}
            <span class="text-send">linkedin</span>
            </a>
            </div>
            <div className="c-info-item">
            <i class='bx bxl-zoom' ></i>
            <a className="link-name" href="https://us05web.zoom.us/profile">
            <span class="text-call">zoom</span>
            {/* <span class="text-hover-call">{t("Schedule a conference Zoom")}</span> */}
            </a>
            </div>
            <div className="c-info-item">
            <i class='bx bxl-instagram' ></i>
            <a className="link-name" href="https://www.instagram.com/0451od/">
            {/* <span class="text-hover-send">{t("Send message in instagram")}</span> */}
            <span class="text-send">instagram</span> 
            </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <div className="pre-contact_desc">{t("Whats your story?")}</div> 
            <div className="contact-desc">
            <Trans i18nKey="contact-desc"> <br/>
            Here you can contact me. And describe what interests you. Or anything at all.
            </Trans>
            </div>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#F5F5F5"}} type="text" placeholder={t("Name")} name="user_name" />
            <input style={{backgroundColor: darkMode && "#F5F5F5"}} type="text" placeholder={t("Subject")} name="user_subject" />
            <input style={{backgroundColor: darkMode && "#F5F5F5"}} type="text" placeholder={t("Email")} name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#F5F5F5"}} rows="5" placeholder={t("Type here")} name="message" required/>
            <button className="contact-btn">{t("Submit")}</button>
            <div className="thank-btn">
            {done && "🙂 Thank You"}
            </div>
          </form>
        </div>
      </div>
      <div className="footer-component">
      <Toggle/>
      <LangBtn/>
      </div>
    </div>
    
  );
};

export default Contact;
