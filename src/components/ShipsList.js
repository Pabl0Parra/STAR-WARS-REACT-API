const ShipsList = ({ ships }) => {
  return (
    <ul className="list" aria-label="ships list">
      {!ships ? (
        <h4>No ships on sight!</h4>
      ) : (
        ships.map((ship, index) => {
          return (
            <li key={index} className="list__item">
              <h3>{ship.name}</h3>
              <p>{ship.model}</p>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default ShipsList;
