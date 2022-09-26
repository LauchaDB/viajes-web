import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "../components/component-menu/Menu.js";
import CardViaje from "../components/component-card/CardViaje";

export default function PageViajesGuardados() {
  const [viajesGuardados, setViajesGuardados] = useState([]);

  useEffect(() => {
    getViajesGuardados();
  }, []);

  const getViajesGuardados = async () => {
    console.log("pasa");
    const resp = await axios.get("http://localhost:8080/viajes/viajesLike");
    setViajesGuardados(resp.data);
  };
  return (
    <div>
      <Menu />

      <h1>Viajes a los que le diste like....</h1>

      <div className="contenidoCards">
        {viajesGuardados.map((viaje) => (
          <CardViaje key={viaje.idViaje} viaje={viaje} />
        ))}
      </div>
    </div>
  );
}
