import Button from "./Button";
import Input from "./Input";
import "../styles/LoginForm.css";

export default function LoginForm({ handleSubmit, openPopup, closePopup }) {
  return (
    <form className="popup_form" onSubmit={() => handleSubmit()}>
      <Input type={"text"} id={"name"} text={"Username or Email Address"} />
      <Input type={"password"} id={"password"} text={"Password"} />
      <Button name={"form_submit"} text={"Sign in"} />
      <div className="form_help">
        <a href="#!">Need help signing in?</a>
      </div>
      <Button
        name={"form_account"}
        open={() => {
          openPopup(true);
          closePopup(false);
        }}
        text={"Create an Account"}
      />
    </form>
  );
}
