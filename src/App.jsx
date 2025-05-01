import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./StyleAPP.css";
import "./Style/Navbar.css";
import "./Style/Objectif.css";
import "./Style/home.css";
import "./Style/exo.css";
import Home from "./Composant/Home";
import Objectif from "./Composant/Objectif";
import Exercices from "./Composant/Exercices";
import Conseil from "./Composant/Conseil";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/objectifs" element={<Objectif />} />
          <Route path="/Exercices" element={<Exercices />} />
          <Route path="/Conseils" element={<Conseil />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
