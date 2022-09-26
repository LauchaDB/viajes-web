import "./pageDestinosDeUnViaje.css";
import { Link, useParams } from "react-router-dom";
import CardDestino from "../components/component-CardDestino/CardDestino";
import Menu from "../components/component-menu/Menu.js";
import { useEffect, useState } from "react";
import { viajesApi } from "../api/viajesApi";
import axios from "axios";
import BtnNuevoDestino from "../components/component-btnNuevoDestino/BtnNuevoDestino";

export default function PageDestinosDeUnViaje() {
  const parametro = useParams();

  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    getDestinos();
  }, []);

  const getDestinos = async () => {
    console.log("idViaje: " + parametro.idViaje);
    const resp = await axios.get(
      "http://localhost:8080/destinos/destinosViaje/" + parametro.idViaje
    );
    setDestinos(resp.data);
  };
  return (
    <div>
      <Menu />
      <h1>{parametro.tituloViaje}</h1>
      <h3 className="ciudadDestino">{parametro.descripcionViaje}</h3>

      <div className="contenidoCards">
        {destinos.map((destino) => (
          <CardDestino
            key={destino.idDest}
            destino={destino}
            idViaje={parametro.idViaje}
          />
        ))}
      </div>
      <Link to={"/nuevoDestino/" + parametro.idViaje} className="btn btn1">
        Nuevo Destino
      </Link>
    </div>
  );
}
