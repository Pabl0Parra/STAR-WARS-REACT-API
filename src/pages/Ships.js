import { useState, useEffect } from "react";
import getShipData from "../components/GetShipData";
import ShipsList from "../components/ShipsList";

const Ships = ({ changeShip, changeId }) => {
  const [shipsData, setShipsData] = useState([]);

  useEffect(() => {
    const URL = "https://swapi.dev/api/starships/";
    getShipData(URL, setShipsData);
  }, []); // [] so that it only makes the request once (at the start of the app)

  return (
    <ShipsList
      ships={shipsData.results}
      changeShip={changeShip}
      changeId={changeId}
    />
  );
};

export default Ships;
