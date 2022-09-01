import "./cardDestino.css";

export default function CardDestino() {
  return (
    <div className="col-4 tarjetaCompleta" style={{ height: "10%" }}>
      <div className="card h-100">
        <div className="card-body">
          <img
            className="img-fouild rounded w-75 mb-3 imgCard"
            src="https://malevamag.com/wp-content/uploads/2020/06/Estacion.jpeg"
          />
          <h3 className="titleCard">provincia</h3>
          <h5 className="titleCard">ciudad</h5>
          <p>descripcin</p>
          {/*<div className="d-flex flex-row justify-content-end">
             <div className="p-4">
            <a href="#">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png" />
            </a>
          </div>
          

            <div className="p-10 logoVerDestinos">
              <a>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/pencil--v1.png" />
              </a>
            </div>

            <div className="p-6 logoMg">
              <a>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/hearts.png" />
              </a>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
}
