import React from 'react';

function FetchButtonTwo({fetchPokemonTwo}){
    return(
        <button className="random-buttons" onClick={fetchPokemonTwo}>Click me for pokemon</button>
    )

}

export default FetchButtonTwo;