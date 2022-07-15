import { BrowserRouter, Routes, Route } from "react-router-dom";
import useSessionStorage from "./hooks/useSessionStorage";
import Ships from "./pages/Ships";
import Header from "./components/Header";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ShipDetails from "./pages/ShipDetails";

const App = () => {
  const [selectedShip, setSelectedShip] = useSessionStorage("ship");
  const [idShip, setIdShip] = useSessionStorage("id");

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/starships"
            element={
              <Ships changeShip={setSelectedShip} changeId={setIdShip} />
            }
          />
          <Route
            path="/starships/:id"
            element={<ShipDetails info={selectedShip} id={idShip} />}
          />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
