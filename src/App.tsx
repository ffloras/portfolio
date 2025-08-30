import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MyPetPlant from "./pages/MyPetPlant";
import RiskMapper from "./pages/RiskMapper";
import TheEscape from "./pages/TheEscape";
import PawsAndHomes from "./pages/PawsAndHomes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyPetPlant" element={<MyPetPlant />} />
        <Route path="/RiskMapper" element={<RiskMapper />} />
        <Route path="/theEscape" element={<TheEscape />} />
        <Route path="/PawsAndHomes" element={<PawsAndHomes />} />
      </Routes>
    </Router>
  );
}

export default App;
