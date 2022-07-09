const ShipsList = ({ ships, showData }) => {
  return (
    <ul className="list" aria-label="ships list" onClick={showData}>
      {ships &&
        ships.map((ship, index) => {
          return (
            <li key={index} className="list_item" data-testid={`item-${index}`}>
              <h3>{ship.name}</h3>
              <p>{ship.model}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default ShipsList;
