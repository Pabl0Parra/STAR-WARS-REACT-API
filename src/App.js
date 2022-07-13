import Ships from "./components/Ships";
import Header from "./components/Header";
import "./App.css";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Ships />
    </div>
  );
};

export default App;
