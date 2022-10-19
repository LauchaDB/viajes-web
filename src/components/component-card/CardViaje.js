import axios from "axios";
import { Link } from "react-router-dom";
import "./cardViaje.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function CardViaje({ viaje }) {
  const { isAuthenticated, user } = useAuth0();
  const eliminarViaje = () => {
    axios.delete("http://localhost:8080/viajes/eliminar/" + viaje.idViaje);
  };
  const guardarViaje = () => {
    axios.put(
      "http://localhost:8080/viajes/viajeLike/" +
        viaje.idViaje +
        "/" +
        viaje.isGuardadoViaje
    );
  };

  const imgDeViajeGuardado = () => {
    if (viaje.isGuardadoViaje) {
      return (
        <img src="https://img.icons8.com/ios-filled/30/000000/like--v1.png" />
      );
    } else {
      return (
        <img
          id="imgMg"
          src="https://img.icons8.com/ios/30/000000/like--v1.png"
        />
      );
    }
  };

  const editAndDelete = () => {
    if (isAuthenticated) {
      if (user.email == viaje.emailUs) {
        return (
          <>
            <div className=" logoEditarDestino">
              <Link
                to={
                  "/editarViaje/" +
                  viaje.idViaje +
                  "&" +
                  viaje.nombreViaje +
                  "&" +
                  viaje.descripViaje +
                  "&" +
                  viaje.fechaViaje +
                  "&" +
                  viaje.valorTotalViaje
                }
                idviaje={viaje.idViaje}
              >
                <img src="https://img.icons8.com/ios/30/000000/edit--v1.png" />
              </Link>
            </div>

            <div className=" logoDelete">
              <a idviaje={viaje.idViaje} onClick={eliminarViaje} href="/">
                <img src="https://img.icons8.com/ios/30/000000/delete-forever--v1.png" />
              </a>
            </div>
          </>
        );
      }
    }
  };

  return (
    <div className="col-4 tarjetaCompleta" style={{ height: "10%" }}>
      <div className="card h-100">
        <div className="card-body">
          <img
            className="img-fouild rounded w-75 mb-3 imgCard"
            src="https://malevamag.com/wp-content/uploads/2020/06/Estacion.jpeg"
          />
          <h3 className="titleCard">{viaje.nombreViaje}</h3>
          <p>{viaje.descripViaje}</p>
          <p>{viaje.fechaViaje}</p>
          <p>${viaje.valorTotalViaje}</p>
          <div className="d-flex flex-row justify-content-end ">
            {/* <div className="p-4">
              <a href="#">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png" />
              </a>
            </div>
            */}

            <div className=" logoVerDestinos">
              <Link
                to={
                  "/destinos/" +
                  viaje.idViaje +
                  "&" +
                  viaje.nombreViaje +
                  "&" +
                  viaje.descripViaje
                }
                idviaje={viaje.idViaje}
                tituloViaje={viaje.nombreViaje}
              >
                <img src="https://img.icons8.com/ios/30/000000/enter-2.png" />
              </Link>
            </div>
            {isAuthenticated && (
              <div className=" logoMg">
                <a idviaje={viaje.idViaje} onClick={guardarViaje} href="/">
                  {imgDeViajeGuardado()}
                </a>
              </div>
            )}
            {editAndDelete()}
          </div>
        </div>
      </div>
    </div>
  );
}
