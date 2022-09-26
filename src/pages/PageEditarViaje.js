import axios from "axios";
import Menu from "../components/component-menu/Menu.js";
import { useParams } from "react-router";
import { useState } from "react";

export default function PageEditarViaje() {
  const param = useParams();
  const [nombreViaje, setNombreViaje] = useState(param.tituloViaje);
  const [fechaViaje, setFechaViaje] = useState(param.fechaViaje);
  const [valorViaje, setValorViaje] = useState(param.valorTotalViaje);
  console.log(param);

  const guardarViaje = (e) => {
    e.preventDefault();
    const nomIng = document.getElementById("nomViaje").value;
    const descIng = document.getElementById("descripViaje").value;
    const fechIng = document.getElementById("fechaViaje").value;
    const valIng = document.getElementById("valorTotalViaje").value;
    const viaje = {
      nombreViaje: nombreViaje,
      descripViaje: descIng,
      fechaViaje: fechaViaje,
      valorTotalViaje: valorViaje,
      idUs: 1,
    };
    console.log(viaje);
    axios.put("http://localhost:8080/viajes/actualizar/" + param.idViaje, {
      nombreViaje: nombreViaje,
      descripViaje: descIng,
      fechaViaje: fechaViaje,
      valorTotalViaje: valorViaje,
      idUs: 1,
    });

    /*axios.post("http://localhost:8080/viajes/create", {
          params: { viaje },
        }); 
          .then((response) => {
            // Respuesta del servidor
          })
          .catch((e) => {
            console.log(e);
          });*/

    console.log("guardar viaje");
  };

  return (
    <div>
      <Menu />

      <h1>Puedes editar tu viaje aqui...</h1>

      <div id="form-main">
        <div id="form-div">
          <form className="form" id="form1">
            <p className="name">
              <input
                name="nombreViaje"
                type="text"
                className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                placeholder={param.tituloViaje}
                id="nomViaje"
                required
                value={nombreViaje}
                onChange={(ev) => setNombreViaje(ev.target.value)}
              />
            </p>

            <p className="text">
              <textarea
                name="descripViaje"
                className="validate[required,length[6,300]] feedback-input"
                id="descripViaje"
                placeholder="Descripcion del viaje...."
                required
              >
                {param.descripcionViaje}
              </textarea>
            </p>

            <p className="name">
              <input
                name="fechaViaje"
                type="date"
                className="length[0,100]] feedback-input"
                placeholder={param.fechaViaje}
                id="fechaViaje"
                required
                value={fechaViaje}
                onChange={(ev) => setFechaViaje(ev.target.value)}
              />
            </p>

            <p className="name">
              <input
                name="valorViaje"
                type="decimal"
                className="length[0,100]] feedback-input"
                placeholder={param.valorTotalViaje}
                id="valorTotalViaje"
                required
                value={valorViaje}
                onChange={(ev) => setValorViaje(ev.target.value)}
              />
            </p>

            <div clasNames="submit">
              <input
                type="submit"
                value="EDITAR VIAJE"
                id="button-blue"
                onClick={guardarViaje}
              />
              <div className="ease"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
