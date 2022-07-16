import { BrowserRouter, Routes, Route } from "react-router-dom";
import useSessionStorage from "./hooks/useSessionStorage";
import Home from "./pages/Home";
import Ships from "./pages/Ships";
import ShipDetails from "./pages/ShipDetails";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  const [selectedShip, setSelectedShip] = useSessionStorage("ship");
  const [idShip, setIdShip] = useSessionStorage("id");

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <main>
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
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
