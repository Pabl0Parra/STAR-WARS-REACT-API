import { useState } from "react";
import Button from "./Button";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import SuccessForm from "./SuccessForm";
import useLocalStorage from "../hooks/useLocalStorage";
import popup_logo from "../assets/popup_logo.png";
import "../styles/Popup.css";

export default function Popup({ closePopup, openPopup, title }) {
  const [user, setUser] = useLocalStorage("user");
  const [success, setSuccess] = useState(false);

  return (
    <div className="popup">
      <div className="popup_container">
        {!success ? (
          <>
            <img src={popup_logo} alt="" className="popup_logo" />
            <h2 className="popup_title">{title}</h2>
            {title === "sign in" && (
              <LoginForm openPopup={openPopup} closePopup={closePopup} />
            )}
            {title === "create your account" && (
              <RegisterForm
                openPopup={openPopup}
                closePopup={closePopup}
                setUser={setUser}
                setSuccess={setSuccess}
              />
            )}
          </>
        ) : title === "sign in" ? (
          <SuccessForm text={"Welcome!"} />
        ) : (
          <SuccessForm text={"You are now a young jedi"} />
        )}
        <Button
          name={"popup_close"}
          open={() => closePopup(false)}
          text={<ion-icon name="close-outline"></ion-icon>}
        />
      </div>
    </div>
  );
}
