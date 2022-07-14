import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <ul aria-label="menu" className="nav">
      <li>
        <Link to="/" className="nav_item">
          HOME
        </Link>
      </li>
      <li>
        <Link to="/starships" className="nav_item">
          STARSHIPS
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
