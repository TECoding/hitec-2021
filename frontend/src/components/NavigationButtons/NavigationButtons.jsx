import React from 'react';
import {Link} from "react-router-dom";
function NavigationButtons({currentStep, handleSubmit,questions, handleNavigationButtonsClick}) {
    return (
        <div id={"nav-buttons"}>
            <div>
                {currentStep !== 0 ? <button onClick={handleNavigationButtonsClick} value={-1}>{'<'} Back</button> : ""}
            </div>
            <div>
                {currentStep !== (questions.length - 1)
                    ? <button onClick={handleNavigationButtonsClick} value={1}>Next {'>'}</button> : ""}

                {questions.every(question => question.answerIndex != null) && currentStep === (questions.length - 1)
                    ? <Link to="/resultado" onClick={handleSubmit}>Resultados {'>'}</Link> : ""}
            </div>
        </div>
    );
}

export default NavigationButtons;