import "./encabezado.css";

export default function encabezado() {
  return (
    <div className="encabezado">
      <div className="divDelTitulo">
        <h1 className="titulo">Searchme</h1>
      </div>

      <div className="divDeLoDeAbajo">
        <h4>"Viajar para encontrarse"</h4>
        <p>Recorré nuestra web y descubrí maravillosos viaje.</p>
        <p className="segP">
          Elegi los destinos que mas te gusten y arma tu propio viaje!
        </p>
      </div>
    </div>
  );
}
