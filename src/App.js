import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ships from "./pages/Ships";
import Header from "./components/Header";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/starships" element={<Ships />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
