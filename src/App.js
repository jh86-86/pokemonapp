import React, { useState,useReducer } from 'react';
import PokeCall from './Fetch/index';
import PokemonCard from './displayCard/index';
import FetchButtonTwo from './fetchButtontwo';
import FightButton from './fight button/index'
import ResultsDisplay from './results'
import "./App.css";
import H1 from './heading/index';
import {randomInt} from './Functions/RandomInt.js';
import {handleAttck} from './Functions/HandleAttack';
import {initialCardOne, reducer} from './PokemonReducers/ReducerOne';
import {initialCardTwo, reducerTwo} from './PokemonReducers/ReducerTwo';




function App() {

//card one state and reducer
const [state, dispatch] = useReducer(reducer, initialCardOne);
//pokecard two and reducer
 const [stateTwo, dispatchTwo] = useReducer(reducerTwo, initialCardTwo);
              
//states on victory passed down to resultsDisplay hook
const[winner,setWinner]=useState("");
const[winCount,setWinCount]=useState(0);
const[winCountTwo,setWinCountTwo]=useState(0);

// let resultsArray= [0,0]
// const[resultTable,setResultTable]=useState(resultsArray);


  
    async function fetchPokemon(){
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
async function fetchPokemonTwo(){
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




function fight(oneName,hpOne,attOne,twoName,hpTwo,attTwo){

    let winCountPlus=winCount +1;
    let winCountPlus2= winCountTwo +1;

  while(hpOne>0 && hpTwo>0){
      hpTwo=handleAttck(attOne, hpTwo,oneName,twoName);
     
      hpOne=handleAttck(attTwo,hpOne,twoName,oneName);    
      if(hpOne<=0){
        
        console.log(`${oneName} fainted.`);
        console.log(`${twoName} won`);
        setWinner(twoName);
        setWinCountTwo(winCountPlus2)
        
      }else if(hpTwo<=0){
         winCountPlus=winCountPlus++;
        console.log(`${twoName} fainted`);
        console.log(`${oneName} won`);
        setWinner(oneName);
        setWinCount(winCountPlus);
      }
  }
};




  return (
    <div className="App">

        <H1></H1>

        <div className='cards-section'>
        <PokemonCard 
        pokeName={state.pokeName} 
        pokeImage={state.pokeImage}
        pokeHp={state.pokemonHp}
        pokeAtt={state.pokeAtt}
        pokeDef={state.pokeDef}
        pokeSpeed={state.pokeSpeed}/> 

        <PokemonCard  pokeName={stateTwo.pokeName} pokeImage={stateTwo.pokeImage} pokeHp={stateTwo.pokemonHp}
        pokeAtt={stateTwo.pokeAtt} pokeDef={stateTwo.pokeDef} pokeSpeed={stateTwo.pokeSpeed}
        poke/>
        </div>


        <div className="button-section">
        <PokeCall fetchPokemon={fetchPokemon}/>
        <FetchButtonTwo fetchPokemonTwo={fetchPokemonTwo}/>
      </div>  

     
        <FightButton fight={fight} pokeName={state.pokeName} pokeHp={state.pokemonHp} pokeAtt={state.pokeAtt}
        pokeNameTwo={stateTwo.pokeName} pokeHpTwo={stateTwo.pokemonHp} pokeAttTwo={stateTwo.pokeAtt}/>
        <ResultsDisplay winnerDisplay={winner} winCountDisplay={winCount} winCountTwo={winCountTwo}/>


    </div>
  );
}

export default App;
