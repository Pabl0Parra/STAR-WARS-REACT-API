import { Link } from "react-router-dom";
import handleSelectedShip from "./HandleSelectedShip";
import "../styles/ShipsList.css";

const ShipsList = ({ ships, changeShip, changeId }) => {
  return (
    <ul className="list" aria-label="ships list">
      {ships &&
        ships.map((ship, index) => {
          return (
            <li key={index} className="list_item" data-testid={`item-${index}`}>
              <Link
                onClick={(e) =>
                  handleSelectedShip(e, ships, changeShip, changeId)
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
