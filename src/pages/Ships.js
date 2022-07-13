import { useState, useEffect } from "react";
import getShipData from "../components/GetShipData";
import ShipsList from "../components/ShipsList";
import handleSelectedShip from "../components/HandleSelectedShip";

const Ships = () => {
  const [shipsData, setShipsData] = useState([]);
  const [selectedShip, setSelectedShip] = useState(null);
  const [idShip, setIdShip] = useState();

  useEffect(() => {
    const URL = "https://swapi.dev/api/starships/";
    getShipData(URL, setShipsData);
  }, []); // [] so that it only makes the request once (at the start of the app)

  return (
    <div>
      {selectedShip ? (
        <>
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${idShip}.jpg`}
            alt=""
          />
          <h3>{selectedShip.name}</h3>
          <p>Model: {selectedShip.model}</p>
          <p>Manufacturer: {selectedShip.manufacturer}</p>
          <p>Cost in credits: {selectedShip.cost_in_credits}</p>
          <p>Length: {selectedShip.length}</p>
          <p>Atmospheric Speed: {selectedShip.max_atmosphering_speed}</p>
          <p>Crew: {selectedShip.crew}</p>
        </>
      ) : (
        <ShipsList
          ships={shipsData.results}
          showData={(e) =>
            handleSelectedShip(e, shipsData.results, setSelectedShip, setIdShip)
          }
        />
      )}
    </div>
  );
};

export default Ships;
