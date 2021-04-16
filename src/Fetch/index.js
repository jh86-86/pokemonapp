import React from 'react';

 



function PokeCall({fetchPokemon}){
    return(
    <button className="random-buttons" onClick={fetchPokemon}>Click me for pokemon</button>
    )
}

//calls a pokemon for the first card


export default PokeCall;