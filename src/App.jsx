import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import data from "./data";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Tech from "./components/Tech";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Destinations"
          element={<Destination data={data.destinations} />}
        />
        <Route path="/Crew" element={<Crew crew={data.crew} />} />
        <Route
          path="/Technologies"
          element={<Tech techno={data.technology} />}
        />
      </Routes>
    </div>
  );
}

export default App;
