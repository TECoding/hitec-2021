import React from "react";
import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";
import { Link, Redirect } from "react-router-dom";
import "./Resultado.css";

const CATEGORIES = [
  {
    title: "Arte y Cultura y Entretenimiento",
    color: "#f9c939",
    description:
      "Eres una persona espontánea y creativa a la que le encanta expresar su individualidad. Además," +
      " eres un ser perceptivo e imaginativo, siempre intentas pasar un buen rato sin importar la situación. Por" +
      " esta y más razones, creemos que disfrutarás formando parte de los grupos estudiantiles de esta categoría.",
  },
  {
    title: "Deportivos y Recreativos",
    color: "#f3a449",
    description:
      "Enérgico y apasionado son dos de los adjetivos que mejor te describen. Eres una persona un poco" +
      " distraída," +
      " pero cuando logras concentrarte en una tarea no hay quién te detenga. Por eso te invitamos a canalizar tu" +
      " pasión en uno de los grupos estudiantiles de esta categoría.",
  },
  {
    title: "Desarrollo Profesional y Emprendimiento",
    color: "#fd9b03",
    description:
      "Eres propositivo por naturaleza, siempre estás buscando innovar y aprovechar lo que rodea. No le" +
      " temes a los nuevos retos y no te es difícil adaptarte a cosas nuevas. Por estas razones y más, te" +
      " invitamos a utilizar tu ingenio en alguno de los grupos estudiantiles de esta categoría.",
  },
  {
    title: "Ecología y Medio Ambiente",
    color: "#fd5d09",
    description:
      "“Fanático de la naturaleza y sus encantos” es en una forma acertada de describirte. Te preocupas" +
      " mucho por el bienestar de los demás y siempre tratas de aportar tu granito de arena para hacer de este" +
      " mundo un lugar mejor. Es por esto que te invitamos a unirte a uno de los grupos estudiantiles de esta" +
      " categoría.",
  },
  {
    title: "Gobierno Estudiantil",
    color: "#fd0102",
    description:
      "Asertivo, organizado y con gran liderazgo. Te sientes cómodo hablando en público y te encanta" +
      " tomar decisiones. Siempre intentas representar a los tuyos de la mejor manera posible. Así que, si estás" +
      " leyendo esto, te invitamos a formar parte en uno de los grupos de esta categoría.",
  },
  {
    title: "Inclusión y Diversidad de Género",
    color: "#dd023f",
    description:
      "Comprometido, atento y compasivo son algunas palabras que mejor describen a tu ser. Tu grado de" +
      " empatía con los demás es destacable. Las demás personas te ven a ti como un lugar seguro al cual acudir" +
      " cuando no se sienten seguros. Por estas y otras razones creemos que los grupos estudiantiles de esta" +
      " categoría podrían ser de tu agrado.",
  },
  {
    title: "Lugar de Origen",
    color: "#d91c5c",
    description:
      "El viajar y experimentar cosas nuevas es lo que le da sentido a tu vida. Te encanta hacer amigos y" +
      " sueñas con conocer el mundo entero. Conocer acerca de otras culturas y compartir tus experiencias con los" +
      " demás son dos de las cosas que más disfrutas. Así que, si estás leyendo esto, te invitamos a formar parte" +
      " de alguno de los grupos estudiantiles de esta categoría.",
  },
  {
    title: "Política, Ciudadanía y sentido humano",
    color: "#652d90",
    description:
      "Eres un alma caritativa que se enriquece al ayudar a los demás. Te compadeces por los indefensos y" +
      " siempre tratas de apoyar sus causas. Cuando te comprometes a mejorar una situación das lo mejor de ti y no" +
      " hay quién te detenga. Por estas razones te invitamos a formar parte de los grupos estudiantiles que" +
      " conforman esta categoría.",
  },
  {
    title: "Programas Académicos",
    color: "#a773aa",
    description:
      "Ingenioso es la cualidad que le viene a la cabeza a las personas cuando tratan describirte. Te" +
      " alimentas de conocimiento y siempre estás buscando aprender más. Disfrutas mucho de la lectura y" +
      " continuamente te haces preguntas acerca de las cosas que te rodean. Con base en estas cualidades, hemos" +
      " determinado que esta categoría es la más acertada para ti. ¡Te invitamos a unirte a uno de los grupos!",
  },
  {
    title: "Salud y Bienestar Integral",
    color: "#02b6ee",
    description:
      "La disciplina y pasión son cualidades que te representan. El conocimiento es sin duda una de tus" +
      " herramientas más poderosas. Te preocupas por tu salud y bienestar, pero más por el de los demás. Es por" +
      " esto que creemos que esta categoría es la mejor para ti. ¡Únete a uno de los grupos!",
  },
  {
    title: "Vida Estudiantil y Alma Mater",
    color: "#02b3c2",
    description:
      "Te fascina conversar con tus allegados y salir con tus amigos. La convivencia es un pilar" +
      " fundamental de tu vida, por lo que la pandemia te retó a adaptarte a un nuevo estilo de vida. Disfrutas" +
      " cada momento al máximo cuando estás acompañado. Por esto y otras razones, creemos que esta categoría es la" +
      " que más va contigo. ¡Te invitamos a unirte a alguno de estos grupos!",
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
    <div className="Resultado-Container">
      {window.localStorage.length === 0 ? (
        <Redirect to="/" />
      ) : (
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
              <p className="description">
                {CATEGORIES[results[0]].description}
              </p>
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
                <p className="second-group-name">
                  {CATEGORIES[results[1]].title}
                </p>
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
      )}
    </div>
  );
};

export default Resultado;
