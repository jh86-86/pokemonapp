import React from 'react';

function ResultsDisplay({winnerDisplay,winCountDisplay,winCountTwo}){
    return(
        <div className="results-display">
    <p className="winner">{winnerDisplay} won</p>
    <p className="winDisplay">Player One wins:{winCountDisplay}</p>
    <p className="loses">Player Two Wins:{winCountTwo}</p>
    </div>
    )
};
    
export default ResultsDisplay;