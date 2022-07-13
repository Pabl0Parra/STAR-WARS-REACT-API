import logo from "../assets/logo.jpg";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="StarWars" className="header_logo"></img>
      <div>
        <button>LOG IN</button>
        <button>SIGN UP</button>
      </div>
    </header>
  );
};

export default Header;
