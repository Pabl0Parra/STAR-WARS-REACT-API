import { Link } from "react-router-dom";
import FilteredShips from "./FilteredShips";
import "../styles/ShipsList.css";

const ShipsList = ({ ships, changeShip, changeId }) => {
  const handleSelectShip = (name) => {
    const filteredItem = FilteredShips(name, ships);
    changeShip(filteredItem[0]);
    changeId(filteredItem[0].url.match(/\d+/));
  };

  return (
    <ul className="list" aria-label="ships list">
      {ships &&
        ships.map((ship, index) => {
          return (
            <li
              key={index}
              className="list_item"
              data-testid={`element-${index}`}
            >
              <Link
                onClick={(e) =>
                  handleSelectShip(e.target.firstChild.textContent)
                }
                to={`/starships/${ship.name}`}
              >
                <h3>{ship.name}</h3>
                <p>{ship.model}</p>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default ShipsList;
