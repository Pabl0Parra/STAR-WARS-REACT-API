import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useSessionStorage from "./hooks/useSessionStorage";
import Home from "./pages/Home";
import Ships from "./pages/Ships";
import ShipDetails from "./pages/ShipDetails";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import ScrollStart from "./components/ScrollStart";

import "./App.css";

const App = () => {
  const [selectedShip, setSelectedShip] = useSessionStorage("ship");
  const [idShip, setIdShip] = useSessionStorage("id");
  const [loginPopup, setLoginPopup] = useState(false);
  const [registerPopup, setRegisterPopup] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {loginPopup && (
          <Popup
            closePopup={setLoginPopup}
            openPopup={setRegisterPopup}
            title={"sign in"}
          />
        )}
        {registerPopup && (
          <Popup
            closePopup={setRegisterPopup}
            openPopup={setLoginPopup}
            title={"create your account"}
          />
        )}

        <Header
          openLoginPopup={setLoginPopup}
          openRegisterPopup={setRegisterPopup}
        />
        <NavBar />
        <main>
          <ScrollStart />
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
