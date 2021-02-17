import React from 'react';

 



function PokeCall({fetchPokemon}){
    return(
    <button className="random-buttons" onClick={fetchPokemon}>Click me for pokemon</button>
    )
}




export default PokeCall;