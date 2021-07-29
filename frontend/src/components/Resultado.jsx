import React from "react";
import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import "./Resultado.css";

const CATEGORIES = [
  {
    title: "Arte y Cultura y Entretenimiento",
    color: "#f9c939",
    description: "Descripción de Arte",
  },
  {
    title: "Deportivos y Recreativos",
    color: "#f3a449",
    description: "Descripción de Deportivos",
  },
  {
    title: "Desarrollo Profesional y Emprendimiento",
    color: "#fd9b03",
    description: "Descripción de Emprendimiento",
  },
  {
    title: "Ecología y Medio Ambiente",
    color: "#fd5d09",
    description: "Descripción de Ecología",
  },
  {
    title: "Gobierno Estudiantil",
    color: "#fd0102",
    description: "Descripción de Gobierno Est",
  },
  {
    title: "Inclusión y Diversidad de Género",
    color: "#dd023f",
    description: "Descripción de Inclusión",
  },
  {
    title: "Lugar de Origen",
    color: "#d91c5c",
    description: "Descripción de Lugar Origen",
  },
  {
    title: "Política, Ciudadanía y sentido humano",
    color: "#652d90",
    description: "Descripción de Política",
  },
  {
    title: "Programas Académicos",
    color: "#a773aa",
    description: "Descripción de Academicos",
  },
  {
    title: "Salud y Bienestar Integral",
    color: "#02b6ee",
    description: "Descripción de Salud",
  },
  {
    title: "Vida Estudiantil y Alma Mater",
    color: "#02b3c2",
    description: "Descripción de Vida Estudiantil",
  },
];

const Resultado = () => {
  const { width, height } = useWindowSize();

  const ans0 = window.localStorage.getItem("answer0");
  const ans1 = window.localStorage.getItem("answer1");
  const ans2 = window.localStorage.getItem("answer2");
  const ans3 = window.localStorage.getItem("answer3");
  const ans4 = window.localStorage.getItem("answer4");
  const ans5 = window.localStorage.getItem("answer5");
  const ans7 = window.localStorage.getItem("answer7");

  const ANSWERS = [ans0, ans1, ans2, ans3, ans4, ans5, ans7];

  // JavaScript implementation to find
  // k elements with max occurrence.

  function getResults(arr, n, k) {
    let category1;
    let category2;
    let category3;
    let mp = new Map();

    // Put count of all the
    // distinct elements in Map
    // with element as the key &
    // count as the value.
    for (let i = 0; i < n; i++) {
      // Get the count for the
      // element if already present in the
      // Map or get the default value which is 0.

      if (mp.has(arr[i])) {
        mp.set(arr[i], mp.get(arr[i]) + 1);
      } else {
        mp.set(arr[i], 1);
      }
    }

    // Create a list from elements of HashMap
    let list = [...mp];

    // Sort the list
    list.sort((o1, o2) => {
      if (o1[1] === o2[1]) return o2[0] - o1[0];
      else return o2[1] - o1[1];
    });

    console.log(k + " numbers with most occurrences are:<br>");
    for (let i = 0; i < k; i++) {
      if (list[i] !== undefined) {
        console.log(list[i][0] + " ");
        if (i === 0) category1 = list[i][0] + " ";
        else if (i === 1) category2 = list[i][0] + " ";
        else if (i === 2) category3 = list[i][0] + " ";
      }
    }
    return [parseInt(category1), parseInt(category2), parseInt(category3)];
  }

  // Driver Code
  let n = ANSWERS.length;
  let k = 3;

  // Function call
  let results = getResults(ANSWERS, n, k);

  return (
    <div
      className="Resultado"
      style={{ backgroundColor: CATEGORIES[results[0]].color }}
    >
      <Confetti width={width} height={height} numberOfPieces="100" />
      <div className="content-wrapper">
        <div className="top-section">
          <h1>¡Tenemos tus resultados!</h1>
          <div className="highlight-bar">
            <h2 id="group-name">{CATEGORIES[results[0]].title}</h2>
          </div>
          <h3>¿Por qué esta categoría?</h3>
          <p className="description">{CATEGORIES[results[0]].description}</p>
        </div>
        <div>
          <Link to="/" className="btn btn-back-to-home">
            Ir a Inicio
          </Link>
          <a
            className="btn link-feria"
            href="https://www.lyvgda.com/feriadegeprofesional"
            target="_blank"
            rel="noreferrer"
          >
            Revisar Grupos
          </a>
        </div>
        <div className="second-results">
          <h4>Tambien te recomendamos revisar estas categorías</h4>
          <div className="second-results--groups">
            <p className="second-group-name">{CATEGORIES[results[1]].title}</p>
            {results[2] != null ? (
              <p className="second-group-name">
                {CATEGORIES[results[2]].title}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultado;
