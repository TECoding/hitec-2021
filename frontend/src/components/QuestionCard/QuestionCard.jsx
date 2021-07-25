import React, {useState} from 'react';
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
    },
];

function QuestionCard() {
    const [currentStep, setCurrentStep] = useState(0);
    const currentQuestion = QUESTIONS[currentStep];

    // HANDLERS
    const handleQuestionsNavClick = (ev) => {
        setCurrentStep(Number(ev.target.value))
    }

    const handleOptionClick = (ev) => {
        currentQuestion.answerIndex = Number(ev.target.value);
        console.log(currentQuestion)
    }

    const handleNextQuestionClick = () => {
        setCurrentStep(Number(currentStep) + 1);
    }

    const handlePrevQuestionClick = () => {
        setCurrentStep(Number(currentStep) - 1);
    }

    const questionsNav = QUESTIONS.map((question, i) => {
        return (
            <button className={question.answerIndex != null ? "active" : ""} key={"question_" + i + "_nav"} onClick={handleQuestionsNavClick} value={i}>
                {i + 1}
            </button>
        )
    })

    const questionOptions = currentQuestion.options.map((option, i) => {
        return (
            <button className={currentQuestion.answerIndex === i ? "active" : ""} key={"option_" + i} value={i} onClick={handleOptionClick}>
                {currentQuestion.id + " " + option.text}
            </button>
        )
    })

    return (
        <div className={"QuestionCard"}>
            {/*--NAV--*/}
            <div className="navigation">
                {questionsNav}
            </div>
            {/*--QUESTION--*/}
            <div className="question-content">
                {/*QUESTION --TEXT--*/}
                <h2>Pregunta {currentQuestion.id + 1}</h2>
                <p>{currentQuestion.text}</p>
                {/*QUESTION --OPTIONS--*/}
                <div className={"options-content"}>
                    {questionOptions}
                </div>
            </div>
            {/*--BUTTONS--*/}
            <div>
                <NavigationButtons currentStep={currentStep}
                                   length={QUESTIONS.length}
                                   handlePrevQuestionClick={handlePrevQuestionClick}
                                   handleNextQuestionClick={handleNextQuestionClick}/>
            </div>
        </div>
    );
}

export default QuestionCard;