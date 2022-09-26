import React from "react";
import "./btnNuevoDestino.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default function BtnNuevoDestino({ idViaje }) {
  return (
    <div className="middle">
      <Link
        to={"/nuevoDestino/" + { idViaje }}
        className="btn btn1"
        idViaje={idViaje}
      >
        Nuevo Destino
      </Link>
    </div>
  );
}
