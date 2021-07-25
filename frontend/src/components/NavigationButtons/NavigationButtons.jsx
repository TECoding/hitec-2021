import React from 'react';
import './NavigationButtons.scss';

function NavigationButtons() {
    return(
        <div>
            <button className="nav-button" onClick="">{'<'} Back</button>
            <button className="nav-button" onClick="">Next {'>'}</button>
        </div>
    );
}

export default NavigationButtons;