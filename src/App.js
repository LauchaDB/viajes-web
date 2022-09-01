import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { viajesApi } from "./api/viajesApi";
import "./App.css";
import BtnNuevoViaje from "./components/component-btnNuevoViaje/BtnNuevoViaje";
import CardViaje from "./components/component-card/CardViaje";
import Encabezado from "./components/component-encabezado/Encabezado";
import Menu from "./components/component-menu/Menu.js";
import { BrowserRouter as Router, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PageCreateViaje from "./pages/PageCreateViaje";
import PageDestinosDeUnViaje from "./pages/PageDestinosDeUnViaje";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/nuevoViaje" element={<PageCreateViaje />} />
        <Route
          path="/destinos/:idViaje&:tituloViaje&:descripcionViaje"
          element={<PageDestinosDeUnViaje />}
        />
      </Routes>
    </Router>
  );
}

export default App;
