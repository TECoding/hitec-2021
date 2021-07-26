import React, {useState, useEffect} from 'react';
import NavigationButtons from './../NavigationButtons/NavigationButtons.jsx'
import './QuestionCard.scss'
// Only testing purpose, delete for final build.
const QUESTIONS = [
    {
        id: 0,
        text: "Question 1",
        options: [
            {
                text: "Answer 1"

            },
            {
                text: "Answer 2"
            },
            {
                text: "Answer 3"
            },
            {
                text: "Answer 4"
            },
            {
                text: "Answer 5"
            },
            {
                text: "Answer 6"
            },

        ],
        answerIndex: null,
    }, {
        id: 1,
        text: "Question 2",
        options: [
            {
                text: "Answer 1"
            },
            {
                text: "Answer 2"
            },
            {
                text: "Answer 3"
            },
            {
                text: "Answer 4"
            },
            {
                text: "Answer 5"
            },
            {
                text: "Answer 6"
            },

        ],
        answerIndex: null
    }, {
        id: 2,
        text: "Question 3",
        options: [
            {
                text: "Answer 1"
            },
            {
                text: "Answer 2"
            },
            {
                text: "Answer 3"
            },
            {
                text: "Answer 4"
            },
            {
                text: "Answer 5"
            },
            {
                text: "Answer 6"
            },

        ],
        answerIndex: null,
    }, {
        id: 3,
        text: "Question 4",
        options: [
            {
                text: "Answer 1"
            },
            {
                text: "Answer 2"
            },
            {
                text: "Answer 3"
            },
            {
                text: "Answer 4"
            },
            {
                text: "Answer 5"
            },
            {
                text: "Answer 6"
            },

        ],
        answerIndex: null,
    }, {
        id: 4,
        text: "Question 5",
        options: null,
        answerIndex: null,
    },
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

    const handleSubmit = (ev) => {
        ev.preventDefault();
        //TODO: Save answer into DB
        console.log("Form submitted");
        console.log(textAreaAnswer);
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
                {currentQuestion.id + " " + option.text}
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