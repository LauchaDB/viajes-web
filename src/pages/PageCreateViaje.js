import Menu from "../components/component-menu/Menu.js";
import "./pageCreateViaje.css";
import { viajesApi } from "../api/viajesApi";
import axios from "axios";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function PageCreateViaje() {
  const { user } = useAuth0();
  const guardarViaje = (e) => {
    const nomIng = document.getElementById("nomViaje").value;
    const descIng = document.getElementById("descripViaje").value;
    const fechIng = document.getElementById("fechaViaje").value;
    const valIng = document.getElementById("valorTotalViaje").value;
    const viaje = {
      nombreViaje: nomIng,
      descripViaje: descIng,
      fecha_viaje: fechIng,
      valorTotal_viaje: valIng,
      emailUs: user.email,
    };
    console.log(viaje);

    if (valIng > 0) {
      axios.post("http://localhost:8080/viajes/create/" + user.email, {
        nombreViaje: nomIng,
        descripViaje: descIng,
        fechaViaje: fechIng,
        valorTotalViaje: valIng,
        emailUs: user.email,
      });
    } else {
      e.preventDefault();
      alert("ingrese un valor valido");
    }

    //axios.post("http://localhost:8080/viajes/create/", { params: { viaje } });
    /*
    axios.post("http://localhost:8080/viajes/create", {
      params: {
        nombreViaje: document.getElementById("nomViaje").value,
        descripViaje: document.getElementById("descripViaje").value,
        fecha_viaje: document.getElementById("fechaViaje").value,
        valorTotal_viaje: document.getElementById("valorTotalViaje").value,
        idUs: 1,
      },
    });
    
    
      .then((response) => {
        // Respuesta del servidor
      })
      .catch((e) => {
        console.log(e);
      });*/
  };

  return (
    <div>
      <Menu />

      <h1>Crea tu magnifico viaje...</h1>

      <div id="form-main">
        <div id="form-div">
          <form className="form" id="form1">
            <p className="name">
              <input
                name="nombreViaje"
                type="text"
                className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                placeholder="Nombre del viaje..."
                id="nomViaje"
                required
                autoComplete="off"
              />
            </p>

            <p className="text">
              <textarea
                name="descripViaje"
                className="validate[required,length[6,300]] feedback-input"
                id="descripViaje"
                placeholder="Descripcion del viaje...."
                required
              ></textarea>
            </p>

            <p className="name">
              <input
                name="fechaViaje"
                type="date"
                className="length[0,100]] feedback-input"
                placeholder="fecha del viaje..."
                id="fechaViaje"
                required
              />
            </p>

            <p className="name">
              <input
                name="valorViaje"
                type="decimal"
                className="feedback-input"
                placeholder="valor del viaje..."
                id="valorTotalViaje"
                required
              />
            </p>

            <div clasNames="submit">
              <input
                type="submit"
                value="CREAR VIAJE"
                id="button-blue"
                onClick={guardarViaje}
                href={"/"}
              />
              <div className="ease"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
