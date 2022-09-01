import "./pageDestinosDeUnViaje.css";
import { Link, useParams } from "react-router-dom";
import CardDestino from "../components/component-CardDestino/CardDestino";
import Menu from "../components/component-menu/Menu.js";
import { useEffect, useState } from "react";
import { viajesApi } from "../api/viajesApi";

export default function PageDestinosDeUnViaje() {
  const parametro = useParams();
  const { idViaje } = useParams();

  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    getDestinos();
  }, []);

  const getDestinos = async () => {
    console.log("idViaje: " + idViaje);
    const resp = await viajesApi.get("http://localhost:8080/usuarios");
    console.log("respuesta: " + resp.datadata);
    setDestinos(resp.datadata);
  };
  return (
    <div>
      <Menu />
      <h1>{parametro.tituloViaje}</h1>
      <h3 className="ciudadDestino">{parametro.descripcionViaje}</h3>
      <CardDestino />
    </div>
  );
}
