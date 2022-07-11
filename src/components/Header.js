import logo from "../assets/logo.jpg";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="StarWars" className="header_logo"></img>
      <div>
        <button id="logIn" name="logIn" aria-label="log in">
          LOG IN
        </button>
        <button id="signUp" name="signUp" aria-label="sign up">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Header;
