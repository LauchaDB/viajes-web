import Menu from "../components/component-menu/Menu";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default function PageCreateViajeConDestinos() {
  const { user } = useAuth0();

  const guardarViaje = (e) => {
    e.preventDefault();
    const nomIngViaje = document.getElementById("nomViaje").value;
    const descIngViaje = document.getElementById("descripViaje").value;
    const fechIngViaje = document.getElementById("fechaViaje").value;
    const valIngViaje = document.getElementById("valorTotalViaje").value;

    const viaje = {
      nombreViaje: nomIngViaje,
      descripViaje: descIngViaje,
      fecha_viaje: fechIngViaje,
      valorTotal_viaje: valIngViaje,
      emailUs: user.email,
    };

    console.log(viaje);

    const provIng = document.getElementById("provinciaDest").value;
    const ciudIng = document.getElementById("ciudadDest").value;
    const descIng = document.getElementById("descripDest").value;

    const destino = {
      provinciaDestino: provIng,
      ciudadDestino: ciudIng,
      descDestino: descIng,
    };

    console.log(destino);

    axios.post("http://localhost:8080/viajes/createViajeConDestino/", {
      viaje: viaje,
      destino: destino,
    });
  };

  return (
    <div>
      <Menu />
      <h1>CREA TU VIAJE CON DESTINOS....</h1>
      <div id="form-main">
        <div id="form-div">
          <h2>Viaje</h2>
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

            <h2>Destinos..</h2>

            <form className="form" id="form1">
              <p className="name">
                <select
                  name="provianciaDest"
                  id="provinciaDest"
                  required
                  className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
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
                />
              </p>

              <p className="text">
                <textarea
                  name="descripDest"
                  className="validate[required,length[6,300]] feedback-input"
                  id="descripDest"
                  placeholder="Descripcion del destino...."
                  required
                ></textarea>
              </p>
            </form>

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
