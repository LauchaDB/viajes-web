import { useAuth0 } from "@auth0/auth0-react";
import Menu from "../components/component-menu/Menu";
import { useEffect, useState } from "react";
import axios from "axios";
import CardViaje from "../components/component-card/CardViaje";

export default function PagePerfilUsuario() {
  const [viajesUsuario, setViajesUsuario] = useState([]);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    getViajesUsuario();
  }, []);

  const getViajesUsuario = async () => {
    console.log(user.email);
    const resp = await axios.get(
      "http://localhost:8080/viajes/viajesUsuario/" + user.email
    );
    console.log(resp.data);
    setViajesUsuario(resp.data);
  };
  return (
    <div>
      <Menu />

      <h1>Bienvenido a tu perfil, estos son tus viajes</h1>

      <div className="contenidoCards">
        {viajesUsuario.map((viajeUsuario) => (
          <CardViaje key={viajeUsuario.idViaje} viaje={viajeUsuario} />
        ))}
      </div>
    </div>
  );
}
