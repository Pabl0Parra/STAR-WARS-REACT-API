import logo from "../assets/logo.jpg";
import SocialNetworks from "../components/SocialNetworks";
import SearchForm from "../components/SearchForm";
import "../styles/Header.css";

const Header = ({
  openLoginPopup,
  openRegisterPopup,
  loggedIn,
  setLoggedIn,
}) => {
  return (
    <div className="container">
      <header className="header">
        <SocialNetworks />
        <a href="/">
          <img src={logo} alt="StarWars" className="header_logo" />
        </a>
        <SearchForm
          openLoginPopup={openLoginPopup}
          openRegisterPopup={openRegisterPopup}
          loggedIn={loggedIn}
          setLogged={setLoggedIn}
        />
      </header>
    </div>
  );
};

export default Header;
