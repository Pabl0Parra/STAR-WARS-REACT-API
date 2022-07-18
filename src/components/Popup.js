import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import useValidation from "../hooks/useValidation";
import ValidateInputs from "../functions/ValidateInputs";
import "../styles/Popup.css";
import popup_logo from "../assets/popup_logo.png";

export default function Popup({ closePopup, openPopup, title }) {
  const [selectAria, setSelectAria] = useState(false);
  const [displayPassword, setDisplayPassword] = useState(false);
  const { handleBlur, errors } = useValidation(ValidateInputs);

  return (
    <div className="popup">
      <div
        className="popup_container"
        onClick={(e) => e.target.id !== "password" && setSelectAria(false)}
      >
        <img src={popup_logo} alt="" className="popup_logo" />
        <h2 className="popup_title">{title}</h2>
        <form className="popup_form">
          {title === "sign in" ? (
            <>
              <Input
                type={"text"}
                id={"name"}
                text={"Username or Email Address"}
              />
              <Input type={"password"} id={"password"} text={"Password"} />
              <Button name={"popup_submit"} text={"Log in"} />
              <div className="popup_help">
                <a href="#!">Need help?</a>
              </div>
              <Button
                name={"popup_account"}
                open={() => {
                  closePopup(false);
                  openPopup(true);
                }}
                text={"Create an account"}
              />
            </>
          ) : (
            <>
              <Input
                type={"text"}
                id={"firstName"}
                text={"First Name"}
                validation={handleBlur}
                error={errors.firstName}
              />
              <Input
                type={"text"}
                id={"lastName"}
                text={"Last Name"}
                validation={handleBlur}
                error={errors.lastName}
              />
              <Input
                type={"email"}
                id={"email"}
                text={"Email Address"}
                validation={handleBlur}
                error={errors.email}
              />
              <Input
                type={"text"}
                id={"displayName"}
                text={"Display Name"}
                validation={handleBlur}
                error={errors.displayName}
              />
              <div>
                <input
                  type={displayPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="popup_input popup_input--expand"
                  placeholder="Password"
                  onSelect={() => setSelectAria(true)}
                />
                <ul
                  className={
                    selectAria ? "popup_list popup_list--show" : "popup_list"
                  }
                >
                  <li
                    className={
                      errors.password === "Can't be less than 6 characters.."
                        ? "popup_condition--error"
                        : ""
                    }
                  >
                    Enter at least 6 characters.
                  </li>

                  <li
                    className={
                      errors.password === "The password is too weak."
                        ? "popup_condition--error"
                        : ""
                    }
                  >
                    Use letters and numbers.
                  </li>
                </ul>
                <div className="popup_show">
                  <input
                    type="checkbox"
                    name="show"
                    id="show"
                    className="popup_checkbox"
                    onClick={() => setDisplayPassword(!displayPassword)}
                  />
                  <label htmlFor="show">Show password</label>
                </div>
              </div>
              <Button name={"popup_submit"} text={"Create Account"} />
              <p className="popup_footer">
                Do you have an account with us?{" "}
                <a
                  href="#!"
                  onClick={() => {
                    closePopup(false);
                    openPopup(true);
                  }}
                >
                  Sign In
                </a>
              </p>
            </>
          )}
        </form>
        <Button
          name={"popup_close"}
          open={() => closePopup(false)}
          text={<ion-icon name="close-outline"></ion-icon>}
        />
      </div>
    </div>
  );
}