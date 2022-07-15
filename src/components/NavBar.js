import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const handleActiveClass = (e) => {
    const links = document.querySelectorAll(".nav_link");
    for (let link of links) {
      link.firstChild.classList.remove("active");
    }
    e.target.classList.add("active");
  };

  return (
    <nav className="nav">
      <ul aria-label="menu" className="nav_links" id="links">
        <li className="nav_link" onClick={(e) => handleActiveClass(e)}>
          <NavLink to="/" className="active">
            HOME
          </NavLink>
          <span className="nav_link-bar nav_link-bar--green"></span>
        </li>
        <li className="nav_link">
          <NavLink to="/starships" onClick={(e) => handleActiveClass(e)}>
            STARSHIPS
          </NavLink>
          <span className="nav_link-bar nav_link-bar--red"></span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
