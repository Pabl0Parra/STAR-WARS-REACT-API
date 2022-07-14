import { useState, useEffect } from "react";
import axios from "axios";
import ShipsList from "../components/ShipsList";
import FetchShips from "../functions/FetchShips";

const Ships = ({ changeShip, changeId }) => {
  const [shipsData, setShipsData] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getShipsData = async () => setShipsData(await FetchShips());
    getShipsData();

    return () => {
      source.cancel();
    };
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
