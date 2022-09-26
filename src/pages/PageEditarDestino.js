import Menu from "../components/component-menu/Menu.js";
import axios from "axios";
import { useParams } from "react-router";
import { useState } from "react";

export default function PageEditarDestino() {
  const param = useParams();

  const [provinciaDest, setProvinciaDest] = useState(param.provinciaDest);
  const [ciudadDest, setCiudadDest] = useState(param.ciudadDest);

  const guardarDestino = (e) => {
    e.preventDefault();
    const provIng = document.getElementById("provinciaDest").value;
    const ciudIng = document.getElementById("ciudadDest").value;
    const descIng = document.getElementById("descripDest").value;

    const destino = {
      provinciaDest: provinciaDest,
      ciudadDest: ciudadDest,
      descripDest: descIng,
      idViaje: param.idViaje,
    };
    console.log(destino);

    axios.put("http://localhost:8080/destinos/actualizar/" + param.idDest, {
      provinciaDest: provinciaDest,
      ciudadDest: ciudadDest,
      descripDest: descIng,
      idViaje: param.idViaje,
    });

    console.log("guardar destino");
  };

  return (
    <div>
      <Menu />

      <h1>Edita el destino aqui...</h1>

      <div id="form-main">
        <div id="form-div">
          <form className="form" id="form1">
            <p className="name">
              <select
                name="provianciaDest"
                id="provinciaDest"
                required
                className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                value={provinciaDest}
                onChange={(ev) => setProvinciaDest(ev.target.value)}
              >
                <option value="BuenosAires">Buenos Aires</option>
                <option value="Catamarca" selected>
                  Catamarca
                </option>
                <option value="Chaco">Chaco</option>
                <option value="Chubut">Chubut</option>
                <option value="Cordoba">Cordoba</option>
                <option value="Corrientes">Corrientes</option>
                <option value="EntreRios">Entre Rios</option>
                <option value="Formosa">Formosa</option>
                <option value="Jujuy">Jujuy</option>
                <option value="La Pampa">La Pampa</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Misiones">Misiones</option>
                <option value="Neuquen">Neuquen</option>
                <option value="RioNegro">Rio Negro</option>
                <option value="Salta">Salta</option>
                <option value="SanJuan">San Juan</option>
                <option value="SantaCruz">Santa Cruz</option>
                <option value="SantaFe">Santa Fe</option>
                <option value="SantiagoDelEstero">Santiago Del Estero</option>
                <option value="TierraDelFuego">Tierra Del Fuego</option>
                <option value="Tucuman">Tucuman</option>
              </select>
            </p>

            <p className="name">
              <input
                name="ciudadDest"
                type="text"
                className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                placeholder="Ciudad del destino..."
                id="ciudadDest"
                required
                value={ciudadDest}
                onChange={(ev) => setCiudadDest(ev.target.value)}
              />
            </p>

            <p className="text">
              <textarea
                name="descripDest"
                className="validate[required,length[6,300]] feedback-input"
                id="descripDest"
                placeholder="Descripcion del destino...."
                required
              >
                {param.descripDest}
              </textarea>
            </p>

            <div clasNames="submit">
              <input
                type="submit"
                value="SEND"
                id="button-blue"
                onClick={guardarDestino}
              />
              <div className="ease"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
