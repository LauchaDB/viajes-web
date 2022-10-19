import Menu from "../components/component-menu/Menu.js";
import CardViaje from "../components/component-card/CardViaje";
import Encabezado from "../components/component-encabezado/Encabezado";
import BtnNuevoViaje from "../components/component-btnNuevoViaje/BtnNuevoViaje";
import { useEffect, useState } from "react";
import axios from "axios";
import LoginButton from "../Login.js";
import LogoutButton from "../Logout.js";
import Profile from "../Profile.js";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [viajes, setViajes] = useState([]);
  const { isAuthenticated } = useAuth0();

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

      {/*{isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />*/}
      <div className="inicioPag">
        <Encabezado />
      </div>
      <div className="contenidoCards">
        {viajes.map((viaje) => (
          <CardViaje key={viaje.idViaje} viaje={viaje} />
        ))}
      </div>
      {isAuthenticated && (
        <>
          <BtnNuevoViaje />
          <Link to={"/createViajeConDestinos"} className="btn btn-primary">
            Nuevo Viaje Con Destinos
          </Link>
        </>
      )}
    </div>
  );
}
