import "./HomePage.css";

import React from "react";

export default function HomePage() {
  return (
    <body className="body-home">
      <div>
        <h1 className="titulo-home">Pagina Principal</h1>
      </div>
      <div className="contenedor-linea-home">
        <hr className="linea-home"></hr>
      </div>
      <h3 className="subtitulo">Acciones Rapidas</h3>
      <div className="container-slider"></div>
      <div className="contenedor-linea-home">
        <hr className="linea-home"></hr>
      </div>
    </body>
  );
}
