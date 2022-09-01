import React from "react";
import "./btnNuevoViaje.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default function BtnNuevoViaje() {
  return (
    <div className="middle">
      <Link to="/nuevoViaje" className="btn btn1">
        Nuevo viaje
      </Link>
    </div>
  );
}
