import logo from "../assets/logo.jpg";
import SocialNetworks from "../components/SocialNetworks";
import SearchForm from "../components/SearchForm";
import "../styles/Header.css";

const Header = ({ openLoginPopup, openRegisterPopup }) => {
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
        />
      </header>
    </div>
  );
};

export default Header;
