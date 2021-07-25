import React from 'react';
import './NavigationButtons.scss';

function NavigationButtons({currentStep, length, handlePrevQuestionClick, handleNextQuestionClick}) {
    return (
        <div id={"nav-buttons"}>
            <div>
                {currentStep !== 0 ? <button onClick={handlePrevQuestionClick}>{'<'} Back</button> : ""}
            </div>
            <div>
                {currentStep !== (length - 1) ? <button onClick={handleNextQuestionClick}>Next {'>'}</button> : ""}
            </div>
        </div>
    );
}

export default NavigationButtons;