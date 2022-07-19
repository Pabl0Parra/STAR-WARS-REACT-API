import { useState, useEffect } from "react";
import Input from "./Input";
import useValidation from "../hooks/useValidation";
import validateInputs from "../functions/validateInputs";
import validateForm from "../functions/validateForm";
import "../styles/RegisterForm.css";

export default function RegisterForm({
  openPopup,
  closePopup,
  setUser,
  setSuccess,
}) {
  const [selectAria, setSelectAria] = useState(false);
  const [displayPassword, setDisplayPassword] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const { handleBlur, errors, handleSubmit, values } = useValidation(
    validateInputs,
    validateForm,
    setIsValid
  );

  useEffect(() => {
    if (isValid) {
      setUser((user) => [...user, values]);
      setSuccess((success) => !success);
    }
  }, [isValid, setUser, values, setSuccess]);

  return (
    <form
      className="popup_form"
      onSubmit={handleSubmit}
      onClick={(e) => e.target.id !== "password" && setSelectAria(false)}
    >
      <Input
        type={"text"}
        id={"firstName"}
        text={"First Name"}
        validation={handleBlur}
        error={errors.firstname}
      />
      <Input
        type={"text"}
        id={"lastName"}
        text={"Last Name"}
        validation={handleBlur}
        error={errors.lastname}
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
        error={errors.displayname}
      />

      <div>
        <input
          type={displayPassword ? "text" : "password"}
          name="password"
          id="password"
          maxLength="60"
          className={
            !errors.password
              ? "input input--expand"
              : "input input--expand input--error"
          }
          placeholder="Password"
          onSelect={() => setSelectAria(true)}
          onBlur={handleBlur}
          onKeyUp={handleBlur}
        />
        <p className="input_errors">{errors.password}</p>
        <ul
          className={selectAria ? "form_list form_list--display" : "form_list"}
        >
          <li
            className={
              errors.password === "The password is too short."
                ? "form_condition--error"
                : ""
            }
          >
            Enter at least 6 characters.
          </li>

          <li
            className={
              errors.password === "The password is too weak."
                ? "form_condition--error"
                : ""
            }
          >
            Use letters and numbers.
          </li>
        </ul>
        <div className="form_display">
          <input
            type="checkbox"
            name="display"
            id="display"
            className="form_checkbox"
            onClick={() => setDisplayPassword(!displayPassword)}
          />
          <label htmlFor="display">Show password</label>
        </div>
      </div>

      <button className="form_submit" aria-label="create account">
        Create Account
      </button>
      <p className="form_footer">
        Do you have an account?{" "}
        <a
          href="#!"
          onClick={() => {
            openPopup(true);
            closePopup(false);
          }}
        >
          Sign In
        </a>
      </p>
    </form>
  );
}
