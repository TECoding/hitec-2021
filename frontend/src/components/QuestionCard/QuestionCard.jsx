import React, {useState, useEffect} from 'react';
import NavigationButtons from './../NavigationButtons/NavigationButtons.jsx'
import { createQuestionDocument } from './../../firebase/firebase.utils';
import './QuestionCard.scss'
// Only testing purpose, delete for final build.
const QUESTIONS = [
    {
        id: 0,
        text: "¿Cuál de estos temas te interesa más?",
        options: [
            {
                text: "Cultura"
            },
            {
                text: "Deportivos"
            },
            {
                text: "Liderazgo"
            },
            {
                text: "Ambiental"
            },
            {
                text: "Activismo"
            },
            {
                text: "Político"
            },
            {
                text: "Derechos humanos"
            },
            {
                text: "Internacional"
            },
            {
                text: "Académico"
            },
            {
                text: "Salud"
            },
            {
                text: "Vivencia estudiantil"
            },

        ],
        answerIndex: null,
    }, {
        id: 1,
        text: "¿Qué sueles hacer en tu tiempo libre?",
        options: [
            {
                text: "Actividad física"
            },
            {
                text: "Gaming"
            },
            {
                text: "Activismo"
            },
            {
                text: "Cantar y bailar"
            },
            {
                text: "Construir"
            },
            {
                text: "Enseñar"
            },
            {
                text: "Socializar"
            },
            {
                text: "Aprender"
            },
        ],
        answerIndex: null
    }, {
        id: 2,
        text: "¿Qué áreas de estudio te interesan más?",
        options: [
            {
                text: "Ingeniería"
            },
            {
                text: "Salud"
            },
            {
                text: "Relaciones públicas"
            },
            {
                text: "Negocios"
            },
            {
                text: "Política"
            },
            {
                text: "Diseño"
            },

        ],
        answerIndex: null,
    }, {
        id: 3,
        text: "¿Con qué cualidad te identificas más?",
        options: [
            {
                text: "Innovador"
            },
            {
                text: "Creativo"
            },
            {
                text: "Activo"
            },
            {
                text: "Ecoconsciente"
            },
            {
                text: "Participativo"
            },
            {
                text: "Multicultural"
            },
            {
                text: "Humanista"
            },
            {
                text: "Estudioso"
            },
            {
                text: "Saludable"
            },
            {
                text: "Extrovertido"
            },
        ],
        answerIndex: null,
    }, {
        id: 4,
        text: "¿Con cuál de las siguientes personas te gustaría cenar?",
        options: [
            {
                text: "Michael Jackson"
            },
            {
                text: "Cristiano Ronaldo"
            },
            {
                text: "Gandhi"
            },
            {
                text: "Greta Thunberg"
            },
            {
                text: "Bill Gates"
            },
            {
                text: "Lili Elbe"
            },
            {
                text: "Albert Einstein"
            },
            {
                text: "Dr. House"
            },
            {
                text: "Alan por el mundo"
            },
            {
                text: "Teus (Mascota del Tec)"
            },
            {
                text: "Barack Obama"
            },
        ],
        answerIndex: null,
    },{
        id: 5,
        text: "¿Con qué personaje de Disney te identificas más?",
        options: [
            {
                text: "Mickey Mouse"
            },
            {
                text: "Mérida (Valiente)"
            },
            {
                text: "Rayo McQueen"
            },
            {
                text: "Genio de Aladdín"
            },
            {
                text: "Wall-E"
            },
            {
                text: "Moana"
            },
            {
                text: "Ralph el demoledor"
            },
            {
                text: "Ratatouille"
            },
            {
                text: "Hércules"
            },
            {
                text: "Timón y Pumba"
            }
        ],
        answerIndex: null,
    },{
        id: 6,
        text: "¿Que clase de eventos te gustaría vivir?",
        options: null,
        answerIndex: null,
    },{
        id: 7,
        text: "¿Cuál serie o película te gustaría ver?",
        options: [
            {
                text: "Grey's Anatomy"
            },
            {
                text: "Shark Tank"
            },
            {
                text: "Glee"
            },
            {
                text: "RuPaul"
            },
            {
                text: "House of Cards"
            },
            {
                text: "Down to Earth"
            },
            {
                text: "En pocas palabras"
            },
            {
                text: "Élite"
            },
            {
                text: "Club de cuervos"
            },
            {
                text: "Rotten"
            },
            {
                text: "Todo el mundo a la mesa"
            },
        ],
        answerIndex: null,
    }
];

function QuestionCard() {
    const [currentStep, setCurrentStep] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [textAreaAnswer, setTextAreaAnswer] = useState("");

    const currentQuestion = QUESTIONS[currentStep];

    useEffect(() => {
        setCurrentAnswer(currentQuestion.answerIndex);
    },[currentQuestion.answerIndex])

    const handleQuestionsNavClick = (ev) => {
        setCurrentStep(Number(ev.target.value))
    }

    const handleOptionClick = (ev) => {
        currentQuestion.answerIndex = Number(ev.target.value);
        setCurrentAnswer(currentQuestion.answerIndex);
    }

    const handleNavigationButtonsClick = (ev) => {
        setCurrentStep(Number(currentStep) + Number(ev.target.value));
    }

    const handleTextareaChange = (ev) => {
        currentQuestion.answerIndex = ev.target.value !== "" ? 1 : null;
        setTextAreaAnswer(ev.target.value);
    }

    const handleSubmit = () => {
        createQuestionDocument(textAreaAnswer);
    }

    const questionsNav = QUESTIONS.map((question, i) => {
        return (
            <button className={question.answerIndex != null ? "active" : ""} key={"question_" + i + "_nav"}
                    onClick={handleQuestionsNavClick} value={i}>
                {i + 1}
            </button>
        )
    })

    const questionOptions = currentQuestion.options != null ? currentQuestion.options.map((option, i) => {
        return (
            <button className={(currentAnswer === i || currentQuestion.answerIndex === i) ? "active" : ""}
                    key={"option_" + i} value={i} onClick={handleOptionClick}>
                {option.text}
            </button>
        )
    }) : null

    return (
        <div className={"QuestionCard"}>
            {/*--NAV--*/}
            <div className="navigation">
                {questionsNav}
            </div>
            {/*--QUESTION--*/}
            <div className="question-content">
                {/*QUESTION --TEXT--*/}
                <h1>Pregunta {currentQuestion.id + 1}</h1>
                <p>{currentQuestion.text}</p>
                {/*QUESTION --OPTIONS--*/}
                {questionOptions != null
                    ?
                    <div className={"options-content"}>
                        {questionOptions}
                    </div>
                    :
                    <textarea placeholder="Ingresa tu respuesta aqui..."
                              onChange={handleTextareaChange}
                              value={textAreaAnswer}/>
                }
            </div>
            {/*--BUTTONS--*/}
            <div>
                <NavigationButtons currentStep={currentStep}
                                   handleSubmit={handleSubmit}
                                   questions={QUESTIONS}
                                   handleNavigationButtonsClick={handleNavigationButtonsClick}
                />
            </div>
        </div>
    );
}

export default QuestionCard;