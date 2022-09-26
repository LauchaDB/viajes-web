import Menu from "../components/component-menu/Menu.js";
import CardViaje from "../components/component-card/CardViaje";
import Encabezado from "../components/component-encabezado/Encabezado";
import BtnNuevoViaje from "../components/component-btnNuevoViaje/BtnNuevoViaje";
import { useEffect, useState } from "react";
import { viajesApi } from "../api/viajesApi";
import axios from "axios";

export default function HomePage() {
  const [viajes, setViajes] = useState([]);

  useEffect(() => {
    getViajes();
  }, []);

  const getViajes = async () => {
    console.log("pasa");
    const resp = await axios.get("http://localhost:8080/viajes");
    setViajes(resp.data);
  };

  return (
    <div>
      <Menu />

      <div className="inicioPag">
        <Encabezado />
      </div>

      <div className="contenidoCards">
        {viajes.map((viaje) => (
          <CardViaje key={viaje.idViaje} viaje={viaje} />
        ))}
      </div>

      <BtnNuevoViaje />
    </div>
  );
}
