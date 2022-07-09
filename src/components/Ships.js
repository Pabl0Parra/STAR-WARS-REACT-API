import { useState, useEffect } from "react";
import getShipData from "./getShipData";
import ShipsList from "./ShipsList";

const Ships = () => {
  const [shipsData, setShipsData] = useState([]); // an empty [] equals true
  const [ship, setShip] = useState("");

  useEffect(() => {
    const URL = "https://swapi.dev/api/starships/";
    getShipData(URL, setShipsData);
  }, []); // [] so that it only makes the request once (at the start of the app)

  const handleName = (e) => {
    console.log(e.target.classList);
  };

  return (
    <div>
      <ShipsList ships={shipsData.results} showData={handleName} />
    </div>
  );
};

export default Ships;
