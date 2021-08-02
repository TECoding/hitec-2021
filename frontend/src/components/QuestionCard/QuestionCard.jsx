import React, { useState, useEffect } from "react";
import NavigationButtons from "./../NavigationButtons/NavigationButtons.jsx";
import { createQuestionDocument } from "../../firebase/firebase.utils";
import { useLocalStorage } from "../../useLocalStorage.js";
import "./QuestionCard.scss";

/* 
id: 0 -> Arte y Cultura y Entretenimiento
id: 1 -> Deportivos y Recreativos
id: 2 -> Desarrollo Profesional y Emprendimiento
id: 3 -> Ecología y Medio Ambiente
id: 4 -> Gobierno Estudiantil
id: 5 -> Inclusión y Diversidad de Género
id: 6 -> Lugar de Origen
id: 7 -> Política, Ciudadanía y sentido humano
id: 8 -> Programas Académicos
id: 9 -> Salud y Bienestar Integral
id: 10 -> Vida Estudiantil y Alma Mater
*/

/* - - - - M O D I F I E D - - - - Categories Ids added */
const QUESTIONS = [
  {
    id: 0,
    text: "¿Cuál de estos temas te interesa más?",
    options: [
      {
        text: "Cultura",
        category: "0",
      },
      {
        text: "Deportivos",
        category: "1",
      },
      {
        text: "Liderazgo",
        category: "2",
      },
      {
        text: "Ambiental",
        category: "3",
      },
      {
        text: "Activismo",
        category: "4",
      },
      {
        text: "Político",
        category: "7",
      },
      {
        text: "Derechos humanos",
        category: "5",
      },
      {
        text: "Internacional",
        category: "6",
      },
      {
        text: "Académico",
        category: "8",
      },
      {
        text: "Salud",
        category: "9",
      },
      {
        text: "Vivencia estudiantil",
        category: "10",
      },
    ],
    answerIndex: null,
  },
  {
    id: 1,
    text: "¿Qué sueles hacer en tu tiempo libre?",
    options: [
      {
        text: "Actividad física",
        category: "1",
      },
      {
        text: "Gaming",
        category: "0",
      },
      {
        text: "Activismo",
        category: "7",
      },
      {
        text: "Cantar y bailar",
        category: "0",
      },
      {
        text: "Construir",
        category: "8",
      },
      {
        text: "Enseñar",
        category: "8",
      },
      {
        text: "Socializar",
        category: "6",
      },
      {
        text: "Aprender",
        category: "8",
      },
    ],
    answerIndex: null,
  },
  {
    id: 2,
    text: "¿Qué áreas de estudio te interesan más?",
    options: [
      {
        text: "Ingeniería",
        category: "8",
      },
      {
        text: "Salud",
        category: "9",
      },
      {
        text: "Relaciones públicas",
        category: "4",
      },
      {
        text: "Negocios",
        category: "2",
      },
      {
        text: "Política",
        category: "7",
      },
      {
        text: "Diseño",
        category: "0",
      },
    ],
    answerIndex: null,
  },
  {
    id: 3,
    text: "¿Con qué cualidad te identificas más?",
    options: [
      {
        text: "Innovador",
        category: "2",
      },
      {
        text: "Empático",
        category: "5",
      },
      {
        text: "Creativo",
        category: "0",
      },
      {
        text: "Activo",
        category: "1",
      },
      {
        text: "Ecoconsciente",
        category: "3",
      },
      {
        text: "Participativo",
        category: "4",
      },
      {
        text: "Multicultural",
        category: "6",
      },
      {
        text: "Humanista",
        category: "7",
      },
      {
        text: "Estudioso",
        category: "8",
      },
      {
        text: "Saludable",
        category: "9",
      },
      {
        text: "Extrovertido",
        category: "10",
      },
    ],
    answerIndex: null,
  },
  {
    id: 4,
    text: "¿Con cuál de las siguientes personas te gustaría cenar?",
    options: [
      {
        text: "Michael Jackson",
        category: "0",
      },
      {
        text: "Cristiano Ronaldo",
        category: "1",
      },
      {
        text: "Gandhi",
        category: "4",
      },
      {
        text: "Greta Thunberg",
        category: "3",
      },
      {
        text: "Bill Gates",
        category: "2",
      },
      {
        text: "Lili Elbe",
        category: "5",
      },
      {
        text: "Albert Einstein",
        category: "8",
      },
      {
        text: "Dr. House",
        category: "9",
      },
      {
        text: "Alan por el mundo",
        category: "6",
      },
      {
        text: "Teus (Mascota del Tec)",
        category: "10",
      },
      {
        text: "Barack Obama",
        category: "7",
      },
    ],
    answerIndex: null,
  },
  {
    id: 5,
    text: "¿Con qué personaje de Disney te identificas más?",
    options: [
      {
        text: "Mickey Mouse",
        category: "2",
      },
      {
        text: "Mérida (Valiente)",
        category: "4",
      },
      {
        text: "Rayo McQueen",
        category: "8",
      },
      {
        text: "Genio de Aladdín",
        category: "2",
      },
      {
        text: "Wall-E",
        category: "3",
      },
      {
        text: "Moana",
        category: "6",
      },
      {
        text: "Ralph el demoledor",
        category: "0",
      },
      {
        text: "Ratatouille",
        category: "0",
      },
      {
        text: "Hércules",
        category: "1",
      },
      {
        text: "Timón y Pumba",
        category: "10",
      },
    ],
    answerIndex: null,
  },
  {
    id: 6,
    text: "¿Que clase de eventos te gustaría vivir?",
    options: null,
    answerIndex: null,
  },
  {
    id: 7,
    text: "¿Cuál serie o película te gustaría ver?",
    options: [
      {
        text: "Grey's Anatomy",
        category: "9",
      },
      {
        text: "Shark Tank",
        category: "2",
      },
      {
        text: "Glee",
        category: "0",
      },
      {
        text: "RuPaul",
        category: "5",
      },
      {
        text: "House of Cards",
        category: "7",
      },
      {
        text: "Down to Earth",
        category: "3",
      },
      {
        text: "En pocas palabras",
        category: "8",
      },
      {
        text: "Élite",
        category: "10",
      },
      {
        text: "Club de cuervos",
        category: "1",
      },
      {
        text: "Rotten",
        category: "4",
      },
      {
        text: "Todo el mundo a la mesa",
        category: "6",
      },
    ],
    answerIndex: null,
  },
];

function QuestionCard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [textAreaAnswer, setTextAreaAnswer] = useState("");

  /* - - - - M O D I F I E D - - - - answers added to send to local storage */
  const [answer0, setAnswer0] = useLocalStorage("answer0", null);
  const [answer1, setAnswer1] = useLocalStorage("answer1", null);
  const [answer2, setAnswer2] = useLocalStorage("answer2", null);
  const [answer3, setAnswer3] = useLocalStorage("answer3", null);
  const [answer4, setAnswer4] = useLocalStorage("answer4", null);
  const [answer5, setAnswer5] = useLocalStorage("answer5", null);
  const [answer7, setAnswer7] = useLocalStorage("answer7", null);

  const currentQuestion = QUESTIONS[currentStep];

  useEffect(() => {
    setCurrentAnswer(currentQuestion.answerIndex);
  }, [currentQuestion.answerIndex]);

  const handleQuestionsNavClick = (ev) => {
    setCurrentStep(Number(ev.target.value));
  };

  const handleOptionClick = (ev) => {
    currentQuestion.answerIndex = Number(ev.target.value);
    setCurrentAnswer(currentQuestion.answerIndex);
  };

  const handleNavigationButtonsClick = (ev) => {
    setCurrentStep(Number(currentStep) + Number(ev.target.value));
  };

  const handleTextareaChange = (ev) => {
    currentQuestion.answerIndex = ev.target.value !== "" ? 1 : null;
    setTextAreaAnswer(ev.target.value);
  };

  const handleSubmit = () => {
    createQuestionDocument(textAreaAnswer);
    /* - - - - M O D I F I E D - - - - setting Answers */
    setAnswer0(QUESTIONS[0].options[QUESTIONS[0].answerIndex].category);
    setAnswer1(QUESTIONS[1].options[QUESTIONS[1].answerIndex].category);
    setAnswer2(QUESTIONS[2].options[QUESTIONS[2].answerIndex].category);
    setAnswer3(QUESTIONS[3].options[QUESTIONS[3].answerIndex].category);
    setAnswer4(QUESTIONS[4].options[QUESTIONS[4].answerIndex].category);
    setAnswer5(QUESTIONS[5].options[QUESTIONS[5].answerIndex].category);
    setAnswer7(QUESTIONS[7].options[QUESTIONS[7].answerIndex].category);
    /* opt */
    console.log(answer0);
    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);
    console.log(answer5);
    console.log(answer7);
  };

  const questionsNav = QUESTIONS.map((question, i) => {
    return (
      <button
        className={question.answerIndex != null ? "active" : ""}
        key={"question_" + i + "_nav"}
        onClick={handleQuestionsNavClick}
        value={i}
      >
        {i + 1}
      </button>
    );
  });

  const questionOptions =
    currentQuestion.options != null
      ? currentQuestion.options.map((option, i) => {
          return (
            <button
              className={
                currentAnswer === i || currentQuestion.answerIndex === i
                  ? "active"
                  : ""
              }
              key={"option_" + i}
              value={i}
              onClick={handleOptionClick}
            >
              {option.text}
            </button>
          );
        })
      : null;

  return (
    <div className={"QuestionCard"}>
      {/*--NAV--*/}
      <div className="navigation">{questionsNav}</div>
      {/*--QUESTION--*/}
      <div className="question-content">
        {/*QUESTION --TEXT--*/}
        <h1>Pregunta {currentQuestion.id + 1}</h1>
        <p>{currentQuestion.text}</p>
        {/*QUESTION --OPTIONS--*/}
        {questionOptions != null ? (
          <div className={"options-content"}>{questionOptions}</div>
        ) : (
          <textarea
            placeholder="Ingresa tu respuesta aqui..."
            onChange={handleTextareaChange}
            value={textAreaAnswer}
          />
        )}
      </div>
      {/*--BUTTONS--*/}
      <div>
        <NavigationButtons
          currentStep={currentStep}
          handleSubmit={handleSubmit}
          questions={QUESTIONS}
          handleNavigationButtonsClick={handleNavigationButtonsClick}
        />
      </div>
    </div>
  );
}

export default QuestionCard;
