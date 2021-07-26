import React from "react";
import "./Resultado.css";

const Resultado = () => {
  return (
    <div className="Resultado">
      <div className="content-wrapper">
        <div className="top-section">
          <h1>¡Tenemos tus resultados!</h1>
          <div className="highlight-bar">
            <h2 id="group-name">Nombre del grupo</h2>
          </div>
          <h3>¿Por qué este grupo?</h3>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
            turpis sit amet augue ultrices consequat. Quisque vitae sem
            lobortis, euismod odio nec, pretium augue. Morbi quis scelerisque
            dolor, vel rhoncus dui.
          </p>
        </div>
        <div className="second-results">
          <h4>Tambien te recomendamos revisar estos grupos</h4>
          <div className="second-results--groups">
            <p className="second-group-name">Grupo 1</p>
            <p className="second-group-name">Grupo 2</p>
            <p className="second-group-name">Grupo 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultado;
