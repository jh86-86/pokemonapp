import React from 'react';

function FightButton({fight, pokeName, pokeHp, pokeAtt,
    pokeNameTwo, pokeHpTwo, pokeAttTwo}){
    return(
        <div className="fight-section">
        <button onClick={()=> fight(pokeName,pokeHp,pokeAtt,pokeNameTwo
            ,pokeHpTwo,pokeAttTwo)}>Fight</button>
            </div>
    )
};

export default FightButton;

//starts the fight