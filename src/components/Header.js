import logo from "../assets/logo.jpg";
import Button from "./Button";
import "../styles/Header.css";

const Header = () => {
  const handleOpenLogin = () => {
    console.log("open Log in");
  };

  const handleOpenSignup = () => {
    console.log("open Sign up");
  };

  return (
    <header className="header">
      <img src={logo} alt="StarWars" className="header_logo"></img>
      <div>
        <Button open={handleOpenLogin} text={"log in"} />
        <Button open={handleOpenSignup} text={"sign up"} />
      </div>
    </header>
  );
};

export default Header;
