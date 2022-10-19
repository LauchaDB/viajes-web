import axios from "axios";
import "./cardDestino.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { viajesApi } from "../../api/viajesApi";

export default function CardDestino({ destino }) {
  const { user, isAuthenticated } = useAuth0();
  const eliminarDestino = () => {
    axios.delete("http://localhost:8080/destinos/eliminar/" + destino.idDest);
  };

  return (
    <div className="col-4 tarjetaCompleta" style={{ height: "10%" }}>
      <div className="card h-100">
        <div className="card-body">
          <img
            className="img-fouild rounded w-75 mb-3 imgCard"
            src="https://malevamag.com/wp-content/uploads/2020/06/Estacion.jpeg"
          />
          <h3 className="titleCard">{destino.provinciaDest}</h3>
          <h5 className="titleCard">{destino.ciudadDest}</h5>
          <p>{destino.descripDest}</p>
          <div className="d-flex flex-row justify-content-end">
            {isAuthenticated && (
              <>
                <div className=" logoEditarDestino">
                  <Link
                    to={
                      "/editarDestino/" +
                      destino.idDest +
                      "&" +
                      destino.provinciaDest +
                      "&" +
                      destino.ciudadDest +
                      "&" +
                      destino.descripDest +
                      "&" +
                      destino.idViaje
                    }
                  >
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/pencil--v1.png" />
                  </Link>
                </div>
                <div className=" logoDelete">
                  <a iddestino={destino.idDestino} onClick={eliminarDestino}>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/delete-forever.png" />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
