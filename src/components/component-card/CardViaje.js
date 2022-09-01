import { Link } from "react-router-dom";
import "./cardViaje.css";

export default function CardViaje({ viaje }) {
  return (
    <div className="col-4 tarjetaCompleta" style={{ height: "10%" }}>
      <div className="card h-100">
        <div className="card-body">
          <img
            className="img-fouild rounded w-75 mb-3 imgCard"
            src="https://malevamag.com/wp-content/uploads/2020/06/Estacion.jpeg"
          />
          <h3 className="titleCard">{viaje.nombreViaje}</h3>
          <p>{viaje.descripcionViaje}</p>
          <div className="d-flex flex-row justify-content-end">
            {/* <div className="p-4">
              <a href="#">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png" />
              </a>
            </div>
            */}

            <div className="p-10 logoVerDestinos">
              <Link
                to={
                  "/destinos/" +
                  viaje.idViaje +
                  "&" +
                  viaje.nombreViaje +
                  "&" +
                  viaje.descripcionViaje
                }
                idviaje={viaje.idViaje}
                tituloViaje={viaje.nombreViaje}
              >
                <img src="https://img.icons8.com/ios-glyphs/30/000000/pencil--v1.png" />
              </Link>
            </div>

            <div className="p-6 logoMg">
              <Link to={"/guardarEsteViaje"} idviaje={viaje.idViaje}>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/hearts.png" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
