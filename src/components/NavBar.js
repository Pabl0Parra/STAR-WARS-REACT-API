import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <ul aria-label="menu" className="nav">
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/starships">STARSHIPS</Link>
      </li>
    </ul>
  );
};

export default NavBar;
