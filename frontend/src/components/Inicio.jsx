import React from "react";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="Inicio">
      <div className="content-wrapper">
        <img src="logo_hitec.svg" alt="hitec" className="hitec-logo" />
        <p>¡Encuentra tu grupo estudiantil ideal!</p>
        <a href="/preguntas" className="btn btn-start">
          Iniciar
        </a>
      </div>
    </div>
  );
};

export default Inicio;
