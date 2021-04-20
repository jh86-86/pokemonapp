import {randomInt} from '../Functions/RandomInt';



export async function fetchPokemon({dispatch}){
    let rand= randomInt();
    const url=`${process.env.REACT_APP_POKEMON_API}${rand}`; 
    const response =await fetch(url);
    const data =await response.json();
  let name= data.name;
  let image=data.sprites.front_default;
  let hp= data.stats[0].base_stat;
  let attack= data.stats[1].base_stat;
  let defense= data.stats[2].base_stat;
  let speed= data.stats[5].base_stat;
    dispatch({type: "hp", payload:hp});
    dispatch({type:"pokeImage", payload: image});
    dispatch({type: "pokeName", payload:name});
    dispatch({type:"pokeAtt", payload:attack})
    dispatch({type: "pokeDef", payload:defense});
    dispatch({type:"pokeSpeed", payload:speed});
}


//pokemon card Two
export async function fetchPokemonTwo({dispatchTwo}){
let rand= randomInt();
const url=`https://pokeapi.co/api/v2/pokemon/${rand}`;
const response =await fetch(url);
const data =await response.json();
let nameTwo= data.name;
let imageTwo=data.sprites.front_default;
 let hpTwo= data.stats[0].base_stat;
 let attackTwo= data.stats[1].base_stat;
 let defenseTwo= data.stats[2].base_stat;
  let speedTwo= data.stats[5].base_stat;
  dispatchTwo({type: "hp", payload:hpTwo});
    dispatchTwo({type:"pokeImage", payload: imageTwo});
    dispatchTwo({type: "pokeName", payload:nameTwo});
    dispatchTwo({type:"pokeAtt", payload:attackTwo})
    dispatchTwo({type: "pokeDef", payload:defenseTwo});
    dispatchTwo({type:"pokeSpeed", payload:speedTwo});
}