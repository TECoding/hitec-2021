import React, {useState} from 'react';

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

        ],
        answerIndex: null,
    },
];

function QuestionCard() {
    const [currentStep, setCurrentStep] = useState(0);

    const currentQuestion = QUESTIONS[currentStep];

    // HANDLERS
    const handleQuestionsNavClick = (ev) => {
        setCurrentStep(ev.target.value)
        console.log(ev.target.value)
    }

    const handleOptionClick = (ev) => {
        currentQuestion.answerIndex = ev.target.value;
    }

    const handleNextQuestionClick = () => {
        setCurrentStep(currentStep + 1);
    }

    const handlePrevQuestionClick = () => {
        setCurrentStep(currentStep - 1);
    }

    const questionsNav = QUESTIONS.map((question, i) => {
        return (
            <button key={"question_"+ i +"_nav"} onClick={handleQuestionsNavClick} value={i}>
                {i + 1}
            </button>
        )
    })

    const questionOptions = currentQuestion.options.map((option, i) => {
        return(
            <button key={"option_" + i} value={i} onClick={handleOptionClick}>
                {currentQuestion.id + " " + option.text}
            </button>
        )
    })

    return (
        <div>
            {/*--NAV--*/}
            <div>
                {questionsNav}
            </div>
            {/*--QUESTION--*/}
            <div>
                {/*QUESTION --TEXT--*/}
                <div>
                    <h2>{currentQuestion.text}</h2>
                </div>
                {/*QUESTION --OPTIONS--*/}
                <div>
                    {questionOptions}
                </div>
            </div>
            {/*--BUTTONS--*/}
            <div>
                {currentStep !== 0 ? <p onClick={handlePrevQuestionClick}>Anterior</p> : ""}
                {currentStep !== QUESTIONS.length -1 ? <p onClick={handleNextQuestionClick}>Siguiente</p> : ""}
            </div>
        </div>
    );
}

export default QuestionCard;