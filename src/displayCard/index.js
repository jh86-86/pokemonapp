import React from 'react';

function PokemonCard({pokeName,pokeHp,pokeImage,pokeAtt,pokeDef,pokeSpeed}){
    return(
        <div className="card">  
            
            <img className="card-image" src={pokeImage}  />
            <div className="card-text">
            <p>Name {pokeName}</p>
            <p>HP: {pokeHp}</p>
            <p>Attack: {pokeAtt}</p>
            <p>Defense: {pokeDef}</p>
            <p>Speed: {pokeSpeed}</p>
        </div></div>
    )   
}

export default PokemonCard