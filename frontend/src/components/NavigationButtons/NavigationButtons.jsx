//Hola
import React from 'react';
import './NavigationButtons.scss';

function NavigationButtons({currentStep, length, handleNavigationButtonsClick}) {
    return (
        <div id={"nav-buttons"}>
            <div>
                {currentStep !== 0 ? <button onClick={handleNavigationButtonsClick} value={-1}>{'<'} Back</button> : ""}
            </div>
            <div>
                {currentStep !== (length - 1) ? <button onClick={handleNavigationButtonsClick} value={1}>Next {'>'}</button> : ""}
            </div>
        </div>
    );
}

export default NavigationButtons;