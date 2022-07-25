import Button from "./Button";
import Input from "./Input";
import "../styles/LoginForm.css";

export default function LoginForm({
  openPopup,
  closePopup,
  users,
  setLoggedIn,
  setInvalid,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password } = e.target;
    for (let user of users) {
      if (
        (name.value === user.displayName || name === user.email) &&
        password.value === user.password
      ) {
        setLoggedIn({ display: name.value, login: true });
        closePopup(false);
        return;
      }
    }
    setInvalid(true);
  };

  return (
    <form className="popup_form" onSubmit={(e) => handleSubmit(e)}>
      <Input type={"text"} id={"name"} text={"Username or Email Address"} />
      <Input type={"password"} id={"password"} text={"Password"} />
      <button className="form_submit" aria-label="Sign in">
        SIGN IN
      </button>
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
