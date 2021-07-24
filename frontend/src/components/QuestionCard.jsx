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

    const handleQuestionsNavClick = (ev) => {
        setCurrentStep(ev.target.value)
    }

    const handleNextQuestionClick = () => {
        // TODO: Check if last item

        setCurrentStep(currentStep + 1);
    }

    const handlePrevQuestionClick = () => {
        // TODO: Check if first item

        setCurrentStep(currentStep - 1);
    }


    const questionsNav = QUESTIONS.map((question, i) => {
        return (
            <button onClick={handleQuestionsNavClick} value={question.id}>
                <p>{i+1}</p>
            </button>
        )
    })

    const currentQuestion = QUESTIONS.filter(question => {
        return question.id === currentStep
    })

    return (
        <div>
            <div>
                {questionsNav}
            </div>
            <div>
                <h2>{currentQuestion.text}</h2>
            </div>
            <div>
                <p onClick={handlePrevQuestionClick}>Anterior</p>
                <p onClick={handleNextQuestionClick}>Siguiente</p>
            </div>
        </div>
    );
}

export default QuestionCard;