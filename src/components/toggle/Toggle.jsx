import "./toggle.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import { Trans, useTranslation } from 'react-i18next';

const Toggle = () => {
  const { t, i18n } = useTranslation();
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <div>{t("Dark Mode")}</div>
      <div
        className="t-button"
        onClick={handleClick}
      >
        <i class='bx bx-moon' ></i>
      </div>
    </div>
  );
};

export default Toggle;
