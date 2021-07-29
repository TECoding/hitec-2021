import React from "react";
import "./Inicio.css";
import { Link } from "react-router-dom";

window.onload = function () {
  window.localStorage.clear();
};

const Inicio = () => {
  return (
    <div className="Inicio">
      <div className="content-wrapper">
        <img src="logo_hitec.svg" alt="hitec" className="hitec-logo" />
        <p>¡Encuentra tu grupo estudiantil ideal!</p>
        <Link to="/preguntas" className="btn btn-start">
          Iniciar
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
