import { useState, useEffect } from "react";
import getShipData from "./components/getShipData";
import Ships from "./components/Ships";
import "./App.css";

const App = () => {
  const [shipsData, setShipsData] = useState([]); // an empty [] equals true

  useEffect(() => {
    const URL = "https://swapi.dev/api/starships/";
    getShipData(URL, setShipsData);
  }, []); // [] so that it only makes the request once (at the start of the app)

  return (
    <div className="App">
      <header className="App-header"></header>
      <Ships ships={shipsData.results} />
    </div>
  );
};

export default App;
